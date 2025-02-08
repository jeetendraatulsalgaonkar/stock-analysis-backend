import { Sequelize } from 'sequelize';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
export const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost:54320/stocks',
);
