import { CurrencyType } from './currency';

export interface FindOrderQuoteRequest {
  fromCurrency: CurrencyType;
  toCurrency: CurrencyType;
  forexAmount: number;
}

export interface FindOrderQuoteResponse {
  krwAmount: number;
  appliedRate: number;
}
