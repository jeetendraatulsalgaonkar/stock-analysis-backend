import { Args, Resolver, Query } from '@nestjs/graphql';
import { TickersService } from '../service/tickers.service';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { TickersGuard } from '../guard/tickers.guard';
import { Tickers } from '../../graphql.schema';

@Resolver('Tickers')
export class TickersResolver {
  constructor(private readonly tickersService: TickersService) {}

  @Query('tickers')
  @UseGuards(TickersGuard)
  async tickers(): Promise<Tickers[]> {
    return this.tickersService.findAll();
  }

  @Query('ticker')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Tickers> {
    return this.tickersService.findOneById(id);
  }
}
