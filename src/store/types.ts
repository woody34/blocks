import { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { PodcastActions, PodcastState } from '../podcast/store/types';
import { UserActions, UserState } from './user/types';

export interface State {
  user: UserState;
  podcast: PodcastState;
}

export type Actions = UserActions | PodcastActions;

export type AppThunk = ThunkAction<undefined, State, null, Actions>;
export type AppThunkAsync = ThunkAction<
  Promise<undefined>,
  State,
  null,
  Actions
>;
