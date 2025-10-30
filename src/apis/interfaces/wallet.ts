import { CurrencyType } from './currency';

export interface Wallet {
  walletId: number;
  currency: CurrencyType;
  balance: number;
}

export interface FindWalletsResponse {
  totalKrwBalance: number;
  wallets: Wallet[];
}
