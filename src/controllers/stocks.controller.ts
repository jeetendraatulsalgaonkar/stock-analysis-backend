import { Controller, Get, Query } from '@nestjs/common';
import { StocksService } from '../service/stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stockService: StocksService) {}

  @Get()
  async getStocksByQueryString(@Query('queryString') queryString: string) {
    return await this.stockService.fetchStocksFromQueryString(queryString);
  }
}
