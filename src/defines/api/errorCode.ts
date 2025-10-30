import { AxiosError } from 'axios';

export enum ErrorCode {
  BAD_REQUEST = 'BAD_REQUEST',
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  MISSING_PARAMETER = 'MISSING_PARAMETER',
}

export interface ErrorField<TData = unknown> {
  code: ErrorCode;
  message: string;
  data: TData | null;
}

export type ErrorResponse = AxiosError<ErrorField>;
