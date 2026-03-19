export interface BaseResponse {
  success: boolean;
  message: string;
}

export interface ResponseT<T = any> {
  success: boolean;
  message: string;
  data: T;
}
