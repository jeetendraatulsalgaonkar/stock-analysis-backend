import { Module } from '@nestjs/common';
import { TickersResolver } from '../resolver/tickers.resolver';
import { TickersService } from '../service/tickers.service';

@Module({
  providers: [TickersService, TickersResolver],
  imports: [],
})
export class TickersModule {}
