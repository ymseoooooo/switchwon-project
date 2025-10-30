// next/headers Cookie Option
export interface CookieOptions {
  domain?: string | undefined;
  partitioned?: boolean | undefined;
  path?: string | undefined;
  sameSite?: true | false | 'lax' | 'strict' | 'none' | undefined;
  secure?: boolean | undefined;
  httpOnly?: boolean | undefined;
  maxAge?: number | undefined;
  priority?: 'low' | 'medium' | 'high' | undefined;
  expires?: number;
}
