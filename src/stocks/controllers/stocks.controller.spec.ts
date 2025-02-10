import { Test, TestingModule } from '@nestjs/testing';
import { StocksController } from './stocks.controller';
import { StocksService } from '../service/stocks.service';
import { TickersDto } from '../dto/tickers.dto';
import { tickersProviders } from '../repository/tickers.providers';

describe('StockController', () => {
  let stocksController: StocksController;
  let stocksService: StocksService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StocksController],
      providers: [StocksService, ...tickersProviders],
    }).compile();
    stocksService = app.get<StocksService>(StocksService);
    stocksController = app.get<StocksController>(StocksController);
  });

  describe('root', () => {
    it('should return results', async () => {
      const result: TickersDto = {
        id: 5518,
        ticker_name: 'ALTERNATIVE INVSTMENT TR',
        market: 'otc',
        locale: 'us',
        primary_exchange: '',
        ticker_type: 'FUND',
        active: true,
        currency_name: 'USD',
        cik: '',
        composite_figi: '',
        share_class_figi: '',
        last_updated_utc: '2022-08-26T05:00:07.114Z',
        currency_symbol: '',
        base_currency_symbol: '',
        base_currency_name: '',
        source_feed: '',
      };
      jest
        .spyOn(stocksService, 'fetchTickersFromQueryString')
        .mockImplementation(() => Promise.resolve(result));
      const response = await stocksController.getStocksByQueryString();
      expect(response).toBe(result);
    });
  });
});
