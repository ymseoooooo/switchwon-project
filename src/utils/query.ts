import { stringify } from 'qs';

export const Request2QueryParam = (req: Object) => {
  return stringify(req);
};
