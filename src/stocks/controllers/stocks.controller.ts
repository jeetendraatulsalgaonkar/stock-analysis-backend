import { Controller, Get, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { StocksService } from '../service/stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stockService: StocksService) {}

  @Get('queryString=:queryString&page=:page&size=:size')
  async getStocksByQueryString(
    @Param('queryString') queryString: string,
    @Param(
      'page',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    page: number,
    @Param(
      'size',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    size: number,
  ) {
    console.log(queryString, page, size);
    return await this.stockService.fetchTickersFromQueryString(
      queryString,
      page,
      size,
    );
  }
}
