import axios from 'axios';

export const serverUrl = 'https://exchange-example.switchflow.biz';

export const axiosInstance = axios.create({
  baseURL: serverUrl,
});
