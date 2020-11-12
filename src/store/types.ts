import { Action, ThunkAction } from '@reduxjs/toolkit';
import { PodcastActions, PodcastState } from './podcast/types';
import { UserActions, UserState } from './user/types';

export interface State {
  user: UserState;
  podcast: PodcastState;
}

export type Actions = UserActions | PodcastActions;

export type AppThunk = ThunkAction<void, State, unknown, Action<string>>;
export type AppThunkAsync = ThunkAction<
  Promise<unknown>,
  State,
  unknown,
  Action<string>
>;
