import { Dispatch } from '@reduxjs/toolkit';
import { Actions } from '../store/types';
import {
  cyPodcastDetails,
  cyPodcastPlayer,
  cyPodcastTable,
} from './components/util';

export const cyPodcast = {
  table: cyPodcastTable,
  details: cyPodcastDetails,
  player: cyPodcastPlayer,
  drawer: 'podcast-drawer',
  drawerClose: 'podcast-close-drawer',
};

export const actionMiddleware = (callback: (args: Actions) => void) => () => (
  next: Dispatch,
) => (action: Actions): Actions => {
  callback(action);
  return next(action);
};
