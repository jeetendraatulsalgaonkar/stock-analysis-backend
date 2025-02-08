import { DataTypes, Op } from 'sequelize';
import { sequelize } from './index';

const Tickers = sequelize.define('tickers', {
  ticker_id: DataTypes.STRING,
  ticker_name: DataTypes.STRING,
  market: DataTypes.STRING,
  locale: DataTypes.STRING,
  primary_exchange: DataTypes.STRING,
  ticker_type: DataTypes.STRING,
  active: DataTypes.BOOLEAN,
  currency_name: DataTypes.STRING,
  cik: DataTypes.STRING,
  composite_figit: DataTypes.STRING,
  share_class_figi: DataTypes.STRING,
  last_updated_utc: DataTypes.STRING,
  currency_symbol: DataTypes.STRING,
  base_currency_symbol: DataTypes.STRING,
  base_currency_name: DataTypes.STRING,
  source_feed: DataTypes.STRING,
});

export const stocksByQueryString = async (queryString: string) => {
  return await Tickers.findAll({
    attributes: ['ticker_id', 'ticker_name', 'ticker_type'],
    where: {
      [Op.or]: {
        ticker_id: {
          [Op.like]: `${queryString}%`,
        },
        ticker_name: {
          [Op.like]: `%${queryString}%`,
        },
      },
    },
    order: [['ticker_id', 'ASC']],
  });
};
