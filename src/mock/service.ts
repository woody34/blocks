import { random } from 'faker';
import { BaseData } from '../common/base';
import { AxiosResponse } from 'axios';
import { makeBaseService } from '../services/service';
import { QueryResponse, ServiceWrite } from '../services/service.types';

export const mockAxiosResponse = <T>(object?: T): Promise<AxiosResponse<T>> =>
  (Promise.resolve(object) as unknown) as Promise<AxiosResponse<T>>;

export const mockQueryResponse = <T>(results: T[]): QueryResponse<T> => ({
  totalRowCount: 10,
  currentPage: 1,
  totalPageCount: 1,
  firstRowOnPage: 1,
  lastRowOnPage: 1,
  results,
  skipRowCount: 0,
  takePageSize: 1,
  fuzzySearchString: '',
  orderByColName: '',
  orderByAscending: true,
  includeDeleted: false,
});

export const mockService = <T extends BaseData, API>(
  docs: T[],
): ServiceWrite<T> => {
  const baseRoute = 'mock';
  const { http } = makeBaseService<T, API>(baseRoute);
  const service: ServiceWrite<T> = {
    baseRoute,
    http,
    getById: (id: number) =>
      Promise.resolve(docs.find(doc => doc.id === id) as T),
    query: () => Promise.resolve(docs),
    create: (payload: T) =>
      Promise.resolve({ id: random.number(), ...payload } as T),
    update: (payload: T) => {
      const doc = docs.find(doc => doc.id === payload.id);
      return Promise.resolve({ ...doc, ...payload });
    },
    delete: (id: number) => {
      const doc = docs.find(doc => doc.id === id);
      const index = docs.indexOf(doc as T);
      docs.splice(index, 1);
      return Promise.resolve();
    },
  };
  return service;
};
