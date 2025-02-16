import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Tickers } from '../entity/tickers.entity';
import { TickersDto } from '../dto/tickers.dto';

@Injectable()
export class TickersEntityDTOMapper {
  private ifObjectDoesNotQualifyForMapping(tickers: Tickers | null) {
    if (!tickers) {
      return !tickers;
    }
    return (
      !tickers.ticker_id ||
      !tickers.ticker_name ||
      !tickers.ticker_type ||
      !tickers.market ||
      !tickers.currency_name
    );
  }
  mapTickersEntityToDTO(tickers: Tickers | null): TickersDto {
    const tickersDTO = new TickersDto();
    try {
      if (this.ifObjectDoesNotQualifyForMapping(tickers)) {
        throw new InternalServerErrorException(
          'Unable to map the entity to DTO',
        );
      }
      if (tickers != null || tickers != undefined) {
        tickersDTO.id = tickers.id;
        tickersDTO.ticker_id = tickers.ticker_id;
        tickersDTO.ticker_name = tickers.ticker_name;
        tickersDTO.ticker_type = tickers.ticker_type;
        tickersDTO.market = tickers.market;
        tickersDTO.locale = tickers.locale;
        tickersDTO.currency_name = tickers.currency_name;
        tickersDTO.cik = tickers.cik;
        tickersDTO.active = tickers.active;
        tickersDTO.primary_exchange = tickers.primary_exchange;
        tickersDTO.composite_figi = tickers.composite_figi;
        tickersDTO.share_class_figi = tickers.share_class_figi;
        tickersDTO.last_updated_utc = tickers.last_updated_utc;
        tickersDTO.currency_symbol = tickers.currency_symbol;
        tickersDTO.base_currency_symbol = tickers.base_currency_symbol;
        tickersDTO.base_currency_name = tickers.base_currency_name;
        tickersDTO.source_feed = tickers.source_feed;
      }
      return tickersDTO;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
