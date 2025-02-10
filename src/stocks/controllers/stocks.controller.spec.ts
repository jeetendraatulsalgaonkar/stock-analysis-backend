import { Test, TestingModule } from '@nestjs/testing';
import { StocksController } from './stocks.controller';
import { StocksService } from '../service/stocks.service';
import { tickersProviders } from '../repository/tickers.providers';
import { TickersEntityDTOMapper } from '../mapper/tickersEntityDTOMapper';
import { FindAllTickersRequest, PaginationProperties } from '../stocks.type';
import { TickersDto } from '../dto/tickers.dto';

describe('StockController', () => {
  let stocksController: StocksController;
  let stocksService: StocksService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StocksController],
      providers: [StocksService, ...tickersProviders, TickersEntityDTOMapper],
    }).compile();
    stocksService = app.get<StocksService>(StocksService);
    stocksController = app.get<StocksController>(StocksController);
  });

  describe('root', () => {
    it('should return results', async () => {
      const result: { data: TickersDto[]; pageProps: PaginationProperties } = {
        data: [
          {
            id: 5518,
            ticker_id: 'AAAIF',
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
          },
        ],
        pageProps: {
          page: 1,
          size: 1,
          pageSize: 1,
          totalPages: 1,
          totalElements: 1,
        },
      };
      jest
        .spyOn(stocksService, 'fetchTickersFromQueryString')
        .mockImplementation(() => Promise.resolve(result));
      const request: FindAllTickersRequest = {
        queryString: 'AA',
        page: 0,
        size: 10,
      };
      const response = await stocksController.getStocksByQueryString(
        request.queryString,
        request.page,
        request.size,
      );
      expect(response).toBe(result);
    });
  });
});
