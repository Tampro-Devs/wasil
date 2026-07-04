export interface ResponseResource<T> {
  data: T;
  message: string | null;
  responseCode: number;
  isSessionExpired: false;
}
