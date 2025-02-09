import { Sequelize } from 'sequelize-typescript';
import { Tickers } from '../entity/tickers.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize: Sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 54320,
        username: 'postgres',
        password: 'postgres',
        database: 'stocks',
      });
      sequelize.addModels([Tickers]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
