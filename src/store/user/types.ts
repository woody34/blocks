import { Action } from 'redux';

export enum USER_ACTIONS {
    SET_USER = 'user/set',
    RESET_USER = 'user/reset',
}

export interface UserState {
    username: string;
}

export const initialUserState: UserState = {
    username: 'not-set',
};

export interface SetUserAction extends Action<USER_ACTIONS.SET_USER> {
    payload: UserState;
}

export interface ResetUserAction extends Action<USER_ACTIONS.RESET_USER> {
    payload?: undefined;
}


export type UserActions = ResetUserAction | SetUserAction;
