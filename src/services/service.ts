import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface BaseType {
    _id?: string;
}

export interface Http<TYPE extends BaseType> {
    baseRoute: string;
    get: (route: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<TYPE>>,
    put: (route: string, payload: TYPE, config?: AxiosRequestConfig) => Promise<AxiosResponse<TYPE>>,
    post: <AT>(route: string, payload: AT | TYPE, config?: AxiosRequestConfig) => Promise<AxiosResponse<TYPE>>,
    delete: (route: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<void>>,
}

export const makeHttp = <T extends BaseType>(baseRoute: string): Http<T> => {
    const http: Http<T> = {
        baseRoute,
        get: (route, config?) => {
            if(config) {
                return axios.get<T>(baseRoute + route, config);
            }
            return axios.get<T>(baseRoute + route);
        },
        put: (route, payload, config?) => {
            if(config) {
                return axios.put<T>(baseRoute + route, payload, config);
            }
            return axios.put<T>(baseRoute + route, payload);
        },
        post: <AT>(route: string, payload: T | AT, config?: AxiosRequestConfig) => {
            if(config) {
                return axios.post<T>(baseRoute + route, payload, config);
            }
            return axios.post<T>(baseRoute + route, payload);
        },
        delete: (route, config?) => {
            if(config) {
                return axios.delete(baseRoute + route, config);
            }
            return axios.delete(baseRoute + route);
        },
    };
    return http;
};

export interface BaseService<TYPE extends BaseType> {
    baseRoute: string;
    http: Http<TYPE>,
}

export const makeBaseService = <T extends BaseType>(baseRoute: string): BaseService<T> => {
    const http = makeHttp<T>(baseRoute);
    const baseService = {
        baseRoute,
        http,
    };
    return baseService;
};

export interface ServiceRead<T extends BaseType> extends BaseService<T> {
    getById: (id: string) => Promise<AxiosResponse<T>>; 
    getAll: () => Promise<AxiosResponse<T>>; 
    getManyById: (ids: string[]) => Promise<AxiosResponse<T>>; 
}

export interface ServiceWrite<T extends BaseType> extends ServiceRead<T> {
    create: (payload: T) => Promise<AxiosResponse<T>>; 
    update: (payload: T) => Promise<AxiosResponse<T>>; 
    delete: (id: string) => Promise<AxiosResponse<void>>; 
}

export const makeService = <T extends BaseType>(baseRoute: string): ServiceWrite<T> => {
    const { http } = makeBaseService<T>(baseRoute);
    const service = {
        baseRoute,
        http,
        getById: (id: string) => http.get(`/by-id/${id}`),
        getAll: () => http.get('/'),
        getManyById: (ids: string[]) => http.post('/many-by-id', ids),
        create: (payload: T) => http.post(`/${payload._id}`, payload),
        update: (payload: T) => http.put(`/${payload._id}`, payload),
        delete: (id: string) => http.delete(`/${id}`),
    };
    return service;
};