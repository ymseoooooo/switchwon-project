import { CurrencyType } from '@/apis/interfaces/currency';

export function getCurrencyTransrateLabel(currency: CurrencyType) {
  let label = '';

  switch (currency) {
    case 'USD':
      label = '미국 달러';
      break;
    case 'JPY':
      label = '일본 엔화';
      break;
    case 'KRW':
      label = '한국 원';
      break;
  }

  return label;
}

export function getCurrencyCountryLabel(currency: CurrencyType) {
  let country = '';
  switch (currency) {
    case 'USD':
      country = '미국';
      break;
    case 'JPY':
      country = '일본';
      break;
    case 'KRW':
      country = '한국';
      break;
  }

  return country;
}

export function getCurrecyUnitLabel(currency: CurrencyType) {
  let unit = '';
  switch (currency) {
    case 'USD':
      unit = '$';
      break;
    case 'JPY':
      unit = '¥';
      break;
    case 'KRW':
      unit = '₩';
      break;
  }

  return unit;
}

export function toComma(num: string | number) {
  return num.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
