import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BaseData } from '../common/base';

export interface Http<TYPE extends BaseData> {
  baseRoute: string;
  get: (
    route: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<TYPE>>;
  getMany: (
    route: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<TYPE[]>>;
  put: (
    route: string,
    payload: TYPE,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<TYPE>>;
  post: <AT>(
    route: string,
    payload: AT | TYPE,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<TYPE>>;
  delete: (
    route: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<void>>;
}

export const makeHttp = <T extends BaseData>(baseRoute: string): Http<T> => {
  const http: Http<T> = {
    baseRoute,
    get: (route, config?) => {
      if (config) {
        return axios.get<T>(baseRoute + route, config);
      }
      return axios.get<T>(baseRoute + route);
    },
    getMany: (route, config?) => {
      if (config) {
        return axios.get<T[]>(baseRoute + route, config);
      }
      return axios.get<T[]>(baseRoute + route);
    },
    put: (route, payload, config?) => {
      if (config) {
        return axios.put<T>(baseRoute + route, payload, config);
      }
      return axios.put<T>(baseRoute + route, payload);
    },
    post: <AT>(route: string, payload: T | AT, config?: AxiosRequestConfig) => {
      if (config) {
        return axios.post<T>(baseRoute + route, payload, config);
      }
      return axios.post<T>(baseRoute + route, payload);
    },
    delete: (route, config?) => {
      if (config) {
        return axios.delete(baseRoute + route, config);
      }
      return axios.delete(baseRoute + route);
    },
  };
  return http;
};

export interface BaseService<TYPE extends BaseData> {
  baseRoute: string;
  http: Http<TYPE>;
}

export const makeBaseService = <T extends BaseData>(
  baseRoute: string
): BaseService<T> => {
  const http = makeHttp<T>(baseRoute);
  const baseService = {
    baseRoute,
    http,
  };
  return baseService;
};

export interface ServiceRead<T extends BaseData> extends BaseService<T> {
  getById: (id: number) => Promise<AxiosResponse<T>>;
  getAll: () => Promise<AxiosResponse<T[]>>;
}

export interface ServiceWrite<T extends BaseData> extends ServiceRead<T> {
  create: (payload: T) => Promise<AxiosResponse<T>>;
  update: (payload: T) => Promise<AxiosResponse<T>>;
  delete: (id: number) => Promise<AxiosResponse<void>>;
}

export const makeService = <T extends BaseData>(
  baseRoute: string
): ServiceWrite<T> => {
  const { http } = makeBaseService<T>(baseRoute);
  const service = {
    baseRoute,
    http,
    getById: (id: number) => http.get(`/by-id/${id}`),
    getAll: () => {
      const task = http.getMany('/');
      return task;
    },
    create: (payload: T) => http.post(`/${payload.id}`, payload),
    update: (payload: T) => http.put(`/${payload.id}`, payload),
    delete: (id: number) => http.delete(`/${id}`),
  };
  return service;
};
