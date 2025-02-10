import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { StocksController } from '../controllers/stocks.controller';
import { StocksService } from '../service/stocks.service';
import { tickersProviders } from '../repository/tickers.providers';
import { TickersEntityDTOMapper } from '../mapper/tickersEntityDTOMapper';

@Module({
  imports: [DatabaseModule],
  controllers: [StocksController],
  providers: [StocksService, ...tickersProviders, TickersEntityDTOMapper],
})
export class TickersModule {}
