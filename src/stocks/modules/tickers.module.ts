import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { StocksController } from '../controllers/stocks.controller';
import { StocksService } from '../service/stocks.service';
import { tickersProviders } from '../repository/tickers.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [StocksController],
  providers: [StocksService, ...tickersProviders],
})
export class TickersModule {}
