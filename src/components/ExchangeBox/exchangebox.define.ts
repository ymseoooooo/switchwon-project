export type ExchangeType = 'buy' | 'sell';

type ExchangeTypeContent = {
  amountLabel: string;
  actionText: string;
  priceText: string;
  priceColor: string;
};

export const ExchangeTypeContent: Record<ExchangeType, ExchangeTypeContent> = {
  buy: {
    amountLabel: '매수 금액',
    actionText: '사기',
    priceText: '원 필요해요',
    priceColor: 'text-red-500',
  },
  sell: {
    amountLabel: '매도 금액',
    actionText: '팔기',
    priceText: '원 받을 수 있어요',
    priceColor: 'text-blue-500',
  },
};
