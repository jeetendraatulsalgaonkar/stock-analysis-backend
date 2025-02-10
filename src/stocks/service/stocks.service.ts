import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Tickers } from '../entity/tickers.entity';
import { TickersEntityDTOMapper } from '../mapper/tickersEntityDTOMapper';

@Injectable()
export class StocksService {
  constructor(
    @Inject('TICKERS_REPOSITORY')
    private tickersRepository: typeof Tickers,
  ) {}

  async fetchTickersFromQueryString() {
    const tickers: Tickers | null =
      await this.tickersRepository.findOne<Tickers>();
    if (JSON.stringify(tickers) === '{}' || tickers === null) {
      throw new NotFoundException(`No tickers found`);
    }
    return new TickersEntityDTOMapper().mapTickersEntityToDTO(tickers);
  }
}
