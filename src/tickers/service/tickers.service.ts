import { Injectable } from '@nestjs/common';
import { Tickers } from '../../graphql.schema';

@Injectable()
export class TickersService {
  private readonly tickers: Array<Tickers & { ownerId?: number }> = [
    {
      id: 5518,
      ticker_id: 'AAAIF',
      ticker_name: 'ALTERNATIVE INVSTMENT TR',
      market: 'otc',
      locale: 'us',
      primary_exchange: '',
      ticker_type: 'FUND',
      active: true,
      currency_name: 'USD',
      cik: '',
      composite_figi: '',
      share_class_figi: '',
      last_updated_utc: '2022-08-26T05: 00:07.114Z',
      currency_symbol: '',
      base_currency_symbol: '',
      base_currency_name: '',
      source_feed: '',
    },
  ];

  create(ticker: Tickers): Tickers {
    ticker.id = this.tickers.length + 1;
    this.tickers.push(ticker);
    return ticker;
  }

  async findAll(): Promise<Tickers[]> {
    return Promise.resolve(this.tickers);
  }

  async findOneById(id: number): Promise<Tickers> {
    return Promise.resolve(
      this.tickers.find((ticker) => ticker.id === id) as Tickers,
    );
  }
}
