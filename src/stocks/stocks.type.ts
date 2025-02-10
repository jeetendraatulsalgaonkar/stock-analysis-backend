export type StocksResponse = [
  {
    ticker_id: string;
    ticker_name: string;
    ticker_type: string;
    market: string;
  },
];

export type PaginationProperties = {
  page: number;
  size: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
};

export type FindAllTickersRequest = {
  queryString: string;
  page: number;
  size: number;
};
