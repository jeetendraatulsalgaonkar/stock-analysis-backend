import { Injectable } from '@nestjs/common';
import { stocksByQueryString } from '../entity/stocks.model';

@Injectable()
export class StocksService {
  async fetchStocksFromQueryString(queryString: string) {
    return await stocksByQueryString(queryString);
  }
}
