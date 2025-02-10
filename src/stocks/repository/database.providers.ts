import { Sequelize } from 'sequelize-typescript';
import { Tickers } from '../entity/tickers.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      console.log(process.env.DATABASE_DIALECT);
      const sequelize: Sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT || '5432'),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
      });
      sequelize.addModels([Tickers]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
