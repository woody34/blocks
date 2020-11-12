import { Action, ThunkAction } from '@reduxjs/toolkit';
import { UserActions, UserState } from './user/types';

export type State = {
    user: UserState
}

export type Actions = UserActions

export type AppThunk = ThunkAction<void, State, unknown, Action<string>>;
export type AppThunkAsync = ThunkAction<Promise<any>, State, unknown, Action<string>>;