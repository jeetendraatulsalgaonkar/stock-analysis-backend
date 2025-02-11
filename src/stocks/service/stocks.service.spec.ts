import { Test, TestingModule } from '@nestjs/testing';
import { Tickers } from '../entity/tickers.entity';
import { tickersProviders } from '../repository/tickers.providers';
import { TickersEntityDTOMapper } from '../mapper/tickersEntityDTO.mapper';
import { StocksService } from './stocks.service';
import { Sequelize } from 'sequelize-typescript';

describe('StocksService', () => {
  let stocksService: StocksService;
  let mockedSequelize: Sequelize = jest.requireMock('sequelize');

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [StocksService, ...tickersProviders, TickersEntityDTOMapper],
    }).compile();
    stocksService = app.get<StocksService>(StocksService);
    mockedSequelize = new Sequelize({
      validateOnly: true,
      models: [__dirname + '/models/**'],
    });
  });

  afterEach(async () => {
    jest.clearAllMocks();
    await mockedSequelize.close();
  });

  describe('root', () => {
    it('should return proper value', async () => {
      const result = {
        rows: [
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
        ] as Tickers[],
        count: [],
      };

      jest
        .spyOn(Tickers, 'findAndCountAll')
        .mockImplementation(() => Promise.resolve(result));

      const response = await stocksService.fetchTickersFromQueryString(
        'AA',
        1,
        10,
      );
      console.log(response.data.length);
      expect(response.data.length).toBeGreaterThan(0);
      expect(response.data.length).toEqual(1);
    });
  });
});
