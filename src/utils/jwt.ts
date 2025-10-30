import { jwtDecode } from 'jwt-decode';

export function getJwtMaxAge(token: string) {
  const decoded = jwtDecode(token);
  const { iat, exp } = decoded;

  if (!iat || !exp) {
    return;
  }

  return exp - iat;
}
