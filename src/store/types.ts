import { ThunkAction } from '@reduxjs/toolkit';
import { PodcastActions, PodcastState } from '../podcast/store/types';
import { AppActions, AppState } from './app/types';

export interface State {
  podcast: PodcastState;
  app: AppState;
}

export type States = PodcastState;

export type Actions = PodcastActions | AppActions;

export type AppThunk = ThunkAction<undefined, State, null, Actions>;
export type AppThunkAsync = ThunkAction<
  Promise<undefined>,
  State,
  null,
  Actions
>;
