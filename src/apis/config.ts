import axios from 'axios';

export const serverUrl = 'https://exchange-example.switchflow.biz';

export const serverDomainPath = {
  auth: '/auth',
  exchangeRate: '/exchange-rates',
  order: '/orders',
  wallet: '/wallets',
};

export const axiosInstance = axios.create({
  baseURL: serverUrl,
});
