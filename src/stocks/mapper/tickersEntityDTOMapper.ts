import { Injectable } from '@nestjs/common';
import { Tickers } from '../entity/tickers.entity';
import { TickersDto } from '../dto/tickers.dto';

@Injectable()
export class TickersEntityDTOMapper {
  mapTickersEntityToDTO(tickers: Tickers | null): TickersDto {
    const tickersDTO = new TickersDto();
    if (tickers != null) {
      tickersDTO.id = tickers.id;
      tickersDTO.ticker_name = tickers.ticker_name;
      tickersDTO.ticker_type = tickers.ticker_type;
      tickersDTO.market = tickers.market;
      tickersDTO.locale = tickers.locale;
      tickersDTO.currency_name = tickers.currency_name;
      tickersDTO.cik = tickers.cik;
      tickersDTO.composite_figi = tickers.composite_figi;
      tickersDTO.share_class_figi = tickers.share_class_figi;
      tickersDTO.last_updated_utc = tickers.last_updated_utc;
      tickersDTO.currency_symbol = tickers.currency_symbol;
      tickersDTO.base_currency_symbol = tickers.base_currency_symbol;
      tickersDTO.base_currency_name = tickers.base_currency_name;
      tickersDTO.source_feed = tickers.source_feed;
    }
    return tickersDTO;
  }
}
