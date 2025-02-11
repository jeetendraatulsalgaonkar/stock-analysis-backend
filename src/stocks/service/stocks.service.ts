import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Tickers } from '../entity/tickers.entity';
import { TickersEntityDTOMapper } from '../mapper/tickersEntityDTO.mapper';
import { Op } from 'sequelize';
import { TickersDto } from '../dto/tickers.dto';
import { PaginationProperties } from '../stocks.type';

@Injectable()
export class StocksService {
  constructor(
    @Inject('TICKERS_REPOSITORY')
    private tickersRepository: typeof Tickers,

    @Inject()
    private tickersEntityDTOMapper: TickersEntityDTOMapper,
  ) {}

  async fetchTickersFromQueryString(
    queryString: string,
    page: number,
    size: number,
  ) {
    const tickers: { rows: Tickers[]; count: number } =
      await this.tickersRepository.findAndCountAll({
        where: {
          [Op.or]: [
            {
              ticker_id: { [Op.like]: `%${queryString}%` },
            },
            {
              ticker_name: { [Op.like]: `%${queryString}%` },
            },
          ],
        },
        order: ['ticker_id'],
        offset: page * size,
        limit: size,
      });
    console.log(tickers);
    if (JSON.stringify(tickers.rows) === '[]') {
      throw new NotFoundException(`No tickers found`);
    }
    const data: TickersDto[] = tickers.rows.map((ticker) =>
      this.tickersEntityDTOMapper.mapTickersEntityToDTO(ticker),
    );
    const response: { data: TickersDto[]; pageProps: PaginationProperties } = {
      data,
      pageProps: {
        page,
        size,
        pageSize: size,
        totalPages: Math.ceil(tickers.count / size),
        totalElements: tickers.count,
      },
    };
    return Promise.resolve(response);
  }
}
