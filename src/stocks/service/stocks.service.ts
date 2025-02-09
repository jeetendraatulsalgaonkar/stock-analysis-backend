import { Inject, Injectable } from '@nestjs/common';
import { Tickers } from '../entity/tickers.entity';
import { TickersEntityDTOMapper } from '../mapper/tickersEntityDTOMapper';

@Injectable()
export class StocksService {
  constructor(
    @Inject('TICKERS_REPOSITORY')
    private tickersRepository: typeof Tickers,
  ) {}

  async fetchTickersFromQueryString() {
    return new TickersEntityDTOMapper().mapTickersEntityToDTO(
      await this.tickersRepository.findOne<Tickers>(),
    );
  }
}
