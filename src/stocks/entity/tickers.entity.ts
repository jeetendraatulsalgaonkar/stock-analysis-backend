import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table({ tableName: 'tickers' })
export class Tickers extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  ticker_id: string;

  @Column
  ticker_name: string;

  @Column
  market: string;

  @Column
  locale: string;

  @Column
  primary_exchange: string;

  @Column
  ticker_type: string;

  @Column
  active: boolean;

  @Column
  currency_name: string;

  @Column
  cik: string;

  @Column
  composite_figi: string;

  @Column
  share_class_figi: string;

  @Column
  last_updated_utc: string;

  @Column
  currency_symbol: string;

  @Column
  base_currency_symbol: string;

  @Column
  base_currency_name: string;

  @Column
  source_feed: string;
}
