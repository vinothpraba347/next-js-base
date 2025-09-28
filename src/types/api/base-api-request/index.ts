export type BaseApiQueryParams<T> = {
  query: T;
};

export type BaseApiBodyParams<T> = {
  body: T;
};

export type BaseApiRequest<T, K> = BaseApiQueryParams<T> & BaseApiBodyParams<K>;
