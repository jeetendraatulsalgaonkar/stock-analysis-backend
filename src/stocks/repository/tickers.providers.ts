import { Tickers } from '../entity/tickers.entity';

export const tickersProviders = [
  {
    provide: 'TICKERS_REPOSITORY',
    useValue: Tickers,
  },
];
