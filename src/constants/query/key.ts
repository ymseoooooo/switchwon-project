export const QueryKey = {
  exchangeRate: {
    base: ['exchangeRate'] as const,

    findLatestExchangeRate: () => [...QueryKey.exchangeRate.base, 'findLatestExchangeRate'],
  },
};
