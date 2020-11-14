import { cyPodcastTable } from './components/util';

export const cyPodcast = {
  table: cyPodcastTable,
};

export const actionMiddleware = (callback: (args: any[]) => any) => (_: any) => (next: any) => (action: any) => {
  callback(action);
  return next(action);
};