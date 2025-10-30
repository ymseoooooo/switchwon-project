export interface AuthLoginRequest {
  email: string;
}

export interface AuthLoginResponse {
  memberId: number;
  token: string;
}
