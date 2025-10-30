export type CurrencyType = 'KRW' | 'USD' | 'JPY';

export interface ExchangeRate {
  exchangeRateId: number;
  currency: CurrencyType;
  rate: number;
  changePercentage: number;
  applyDateTime: string;
}

export type FindExchangeRateLatestRateResponse = ExchangeRate[];
