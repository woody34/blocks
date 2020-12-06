import axios, { AxiosResponse } from 'axios';
import { BaseData } from '../common/base';
import {
  QueryParams,
  HttpAdapters,
  QueryResponse,
  BaseService,
  Http,
  ServiceWrite,
} from './service.types';

const adapterByPass = {
  request: <T extends BaseData, API>(req: T) => (req as unknown) as API,
  response: <T extends BaseData, API>(resp: API) => (resp as unknown) as T,
};

const queryParams: QueryParams = {
  includeDeleted: 'false',
  skip: '0',
  take: '50',
  orderBy: 'Number',
  desc: 'true',
  search: '',
};

export const makeHttp = <T extends BaseData, API>(
  baseRoute: string,
  adapters: HttpAdapters<T, API> = adapterByPass,
): Http<T> => {
  const http: Http<T> = {
    baseRoute,
    get: (route, config = {}) => {
      return axios
        .get<API>(baseRoute + route, config)
        .then(unwrapData)
        .then(adapters.response);
    },
    query: (route, config = {}) => {
      return axios
        .get<QueryResponse<API>>(baseRoute + route, {
          ...config,
          params: { ...queryParams, ...config.params },
        })
        .then(unwrapData)
        .then(unwrapQuery)
        .then(resp => resp.map<T>(adapters.response));
    },
    put: (route, payload, config = {}) => {
      return axios
        .put<API>(baseRoute + route, adapters.request(payload), config)
        .then(unwrapData)
        .then(adapters.response);
    },
    post: (route: string, payload: T, config = {}) => {
      return axios
        .post<API>(baseRoute + route, adapters.request(payload), config)
        .then(unwrapData)
        .then(adapters.response);
    },
    delete: (route, config = {}) => {
      return axios.delete(baseRoute + route, config);
    },
  };
  return http;
};

export const makeBaseService = <T extends BaseData, API>(
  baseRoute: string,
): BaseService<T> => {
  const http = makeHttp<T, API>(baseRoute);
  const baseService = {
    baseRoute,
    http,
  };
  return baseService;
};

export const makeService = <T extends BaseData, API>(
  baseRoute?: string,
  adapters?: HttpAdapters<T, API>,
  mockService?: ServiceWrite<T>,
): ServiceWrite<T> => {
  if (!baseRoute && mockService) {
    // mocking for tests
    return mockService;
  }
  const route = baseRoute ?? '';
  const http = makeHttp<T, API>(route, adapters);
  const service: ServiceWrite<T> = {
    baseRoute: route,
    http,
    getById: (id: number) => http.get(`/by-id/${id}`),
    query: (params: Partial<QueryParams>) => http.query('/query', { params }),
    create: (payload: T) => http.post(`/`, payload),
    update: (payload: T) => http.put(`/`, payload),
    delete: (id: number) => http.delete(`/${id}`),
  };
  return service;
};

const unwrapData = <T>(response: AxiosResponse<T>) => {
  return response.data;
};

const unwrapQuery = <T>(response: QueryResponse<T>) => {
  return response.results;
};
