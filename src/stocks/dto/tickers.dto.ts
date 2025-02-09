export class TickersDto {
  id?: number | null;

  ticker_name?: string | null;

  market?: string | null;

  locale?: string | null;

  primary_exchange?: string | null;

  ticker_type?: string | null;

  active?: boolean | null;

  currency_name?: string | null;

  cik?: string | null;

  composite_figi?: string | null;

  share_class_figi?: string | null;

  last_updated_utc?: string | null;

  currency_symbol?: string | null;

  base_currency_symbol?: string | null;

  base_currency_name?: string | null;

  source_feed?: string | null;
}
