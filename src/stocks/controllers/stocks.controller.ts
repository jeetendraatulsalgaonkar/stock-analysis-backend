import { Controller, Get } from '@nestjs/common';
import { StocksService } from '../service/stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stockService: StocksService) {}

  @Get()
  async getStocksByQueryString() {
    return await this.stockService.fetchTickersFromQueryString();
  }
}
