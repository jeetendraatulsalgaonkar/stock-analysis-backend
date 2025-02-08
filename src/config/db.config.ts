module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: 'postgres',
  DB: 'stocks',
  dialect: 'postgres',
  PORT: 54320,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 100000,
  },
};
