import { TickersDto } from '../dto/tickers.dto';
import { Tickers } from '../entity/tickers.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { TickersEntityDTOMapper } from './tickersEntityDTO.mapper';
import { InternalServerErrorException } from '@nestjs/common';

describe('TickersEntityToDTOMapper', () => {
  let tickersEntityDTOMapper: TickersEntityDTOMapper;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [TickersEntityDTOMapper],
    }).compile();
    tickersEntityDTOMapper = app.get(TickersEntityDTOMapper);
  });

  describe('root', () => {
    it('should return the mapped TickersDTO', () => {
      const result: TickersDto = {
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
      };

      const entity = {
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
      };
      expect(
        tickersEntityDTOMapper.mapTickersEntityToDTO(entity as Tickers),
      ).toEqual(result);
    });

    it('Should Throw Exception', () => {
      const entity = {};
      try {
        tickersEntityDTOMapper.mapTickersEntityToDTO(entity as Tickers);
      } catch (error) {
        expect(error).toBeInstanceOf(InternalServerErrorException);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(error.message).toEqual('Unable to map the entity to DTO');
      }
    });

    it('Should Throw Exception for null entity', () => {
      const entity = null;
      try {
        tickersEntityDTOMapper.mapTickersEntityToDTO(entity as Tickers | null);
      } catch (error) {
        expect(error).toBeInstanceOf(InternalServerErrorException);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(error.message).toEqual('Unable to map the entity to DTO');
      }
    });
  });

  it('Should Throw Exception for partial entity', () => {
    const entity = {
      id: 5518,
      ticker_id: null,
      ticker_name: null,
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
    try {
      tickersEntityDTOMapper.mapTickersEntityToDTO(
        entity as unknown as Tickers,
      );
    } catch (error) {
      expect(error).toBeInstanceOf(InternalServerErrorException);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(error.message).toEqual('Unable to map the entity to DTO');
    }
  });
});
