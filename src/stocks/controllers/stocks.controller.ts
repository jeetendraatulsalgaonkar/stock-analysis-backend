import { Controller, Get, Param } from '@nestjs/common';
import { StocksService } from '../service/stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stockService: StocksService) {}

  @Get('queryString=:queryString&page=:page&size=:size')
  async getStocksByQueryString(
    @Param('queryString') queryString: string,
    @Param('page') page: number,
    @Param('size') size: number,
  ) {
    console.log(queryString, page, size);
    return await this.stockService.fetchTickersFromQueryString(
      queryString,
      page,
      size,
    );
  }
}
