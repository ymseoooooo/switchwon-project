import { FindOrderQuoteRequest } from '@/apis/interfaces/order';
import { Request2QueryParam } from '@/utils/query';

export const QueryKey = {
  exchangeRate: {
    base: ['exchangeRate'] as const,

    findLatestExchangeRate: () => [...QueryKey.exchangeRate.base, 'findLatestExchangeRate'],
  },

  wallet: {
    base: ['wallet'] as const,

    findWallets: () => [...QueryKey.wallet.base, 'findWallets'],
  },

  order: {
    base: ['order'] as const,

    findOrderQuote: (req: FindOrderQuoteRequest) => [...QueryKey.order.base, 'findOrderQuote', Request2QueryParam(req)],
  },
};
