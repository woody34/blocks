import { AxiosRequestConfig } from 'axios';
import { BaseData } from '../common/base';

export interface QueryParams {
  includeDeleted: string;
  skip: string;
  take: string;
  orderBy: string;
  desc: string;
  search: string;
}

export interface QueryResponse<T> {
  totalRowCount: number;
  currentPage: number;
  totalPageCount: number;
  firstRowOnPage: number;
  lastRowOnPage: number;
  results: T[];
  skipRowCount: number;
  takePageSize: number;
  fuzzySearchString: string;
  orderByColName: string;
  orderByAscending: boolean;
  includeDeleted: boolean;
  additionalParameters?: Array<{
    key: keyof QueryParams;
    value: string;
  }>;
}

export interface HttpAdapters<T extends BaseData, API> {
  request: (req: T) => API;
  response: (resp: API) => T;
}

export interface Http<TYPE extends BaseData> {
  baseRoute: string;
  get: (route: string, config?: AxiosRequestConfig) => Promise<TYPE>;
  query: (route: string, config: AxiosRequestConfig) => Promise<TYPE[]>;
  put: (
    route: string,
    payload: TYPE,
    config?: AxiosRequestConfig,
  ) => Promise<TYPE>;
  post: (
    route: string,
    payload: TYPE,
    config?: AxiosRequestConfig,
  ) => Promise<TYPE>;
  delete: (route: string, config?: AxiosRequestConfig) => Promise<void>;
}

export interface BaseService<TYPE extends BaseData> {
  baseRoute: string;
  http: Http<TYPE>;
}

export interface ServiceRead<T extends BaseData> extends BaseService<T> {
  getById: (id: number) => Promise<T>;
  query: (params: Partial<QueryParams>) => Promise<T[]>;
}

export interface ServiceWrite<T extends BaseData> extends ServiceRead<T> {
  create: (payload: T) => Promise<T>;
  update: (payload: T) => Promise<T>;
  delete: (id: number) => Promise<void>;
}
