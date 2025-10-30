export const QueryKey = {
  exchangeRate: {
    base: ['exchangeRate'] as const,

    findLatestExchangeRate: () => [...QueryKey.exchangeRate.base, 'findLatestExchangeRate'],
  },

  wallet: {
    base: ['wallet'] as const,

    findWallets: () => [...QueryKey.wallet.base, 'findWallets'],
  },
};
