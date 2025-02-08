import { StocksController } from './controllers/stocks.controller';
import { StocksService } from './service/stocks.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
