import { random } from 'faker';
import { BaseData } from '../common/base';
import { AxiosResponse } from 'axios';
import { ServiceWrite, makeBaseService } from '../services/service';

export const mockAxiosResponse = <T>(object?: T): Promise<AxiosResponse<T>> =>
  (Promise.resolve(object) as unknown) as Promise<AxiosResponse<T>>;

export const mockService = <T extends BaseData>(docs: T[]): ServiceWrite<T> => {
  const baseRoute = 'mock';
  const { http } = makeBaseService<T>(baseRoute);
  const service = {
    baseRoute,
    http,
    getById: (id: number) =>
      mockAxiosResponse(docs.find((doc) => doc.id === id)),
    getAll: () => mockAxiosResponse(docs),
    create: (payload: T) =>
      mockAxiosResponse({ id: random.number(), ...payload } as T),
    update: (payload: T) => {
      const doc = docs.find((doc) => doc.id === payload.id);
      return mockAxiosResponse({ ...doc, ...payload });
    },
    delete: (id: number) => {
      const doc = docs.find((doc) => doc.id === id);
      const index = docs.indexOf(doc as T);
      docs.splice(index, 1);
      return mockAxiosResponse<void>();
    },
  };
  return service;
};
