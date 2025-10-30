import { stringify } from 'qs';

export function Request2QueryParam(req: Object) {
  return stringify(req);
}
