
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateTickersInput {
    ticker_id?: Nullable<string>;
    ticker_name?: Nullable<string>;
    market?: Nullable<string>;
    locale?: Nullable<string>;
    primary_exchange?: Nullable<string>;
    ticker_type?: Nullable<string>;
    active?: Nullable<boolean>;
    currency_name?: Nullable<string>;
    cik?: Nullable<string>;
    composite_figi?: Nullable<string>;
    share_class_figi?: Nullable<string>;
    last_updated_utc?: Nullable<string>;
    currency_symbol?: Nullable<string>;
    base_currency_symbol?: Nullable<string>;
    base_currency_name?: Nullable<string>;
    source_feed?: Nullable<string>;
}

export abstract class IQuery {
    abstract tickers(): Nullable<Nullable<Tickers>[]> | Promise<Nullable<Nullable<Tickers>[]>>;

    abstract ticker(id: string): Nullable<Tickers> | Promise<Nullable<Tickers>>;
}

export abstract class IMutation {
    abstract createTickers(createTickersInput?: Nullable<CreateTickersInput>): Nullable<Tickers> | Promise<Nullable<Tickers>>;
}

export abstract class ISubscription {
    abstract tickerCreated(): Nullable<Tickers> | Promise<Nullable<Tickers>>;
}

export class Tickers {
    id?: Nullable<number>;
    ticker_id: string;
    ticker_name: string;
    market?: Nullable<string>;
    locale?: Nullable<string>;
    primary_exchange?: Nullable<string>;
    ticker_type?: Nullable<string>;
    active?: Nullable<boolean>;
    currency_name?: Nullable<string>;
    cik?: Nullable<string>;
    composite_figi?: Nullable<string>;
    share_class_figi?: Nullable<string>;
    last_updated_utc?: Nullable<string>;
    currency_symbol?: Nullable<string>;
    base_currency_symbol?: Nullable<string>;
    base_currency_name?: Nullable<string>;
    source_feed?: Nullable<string>;
}

type Nullable<T> = T | null;
