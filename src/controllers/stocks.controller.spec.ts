import { Test, TestingModule } from '@nestjs/testing';
import { StocksController } from './stocks.controller';
import { StocksService } from '../service/stocks.service';

describe('StockController', () => {
  let stocksController: StocksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StocksController],
      providers: [StocksService],
    }).compile();

    stocksController = app.get<StocksController>(StocksController);
  });

  describe('root', () => {
    it('should return []', () => {
      expect(stocksController.getStocksByQueryString('a')).toStrictEqual([]);
    });
  });
});
