import { ActionCreator } from '@reduxjs/toolkit';
import { AppThunkAsync } from '../types';
import { SetUserAction, UserState, USER_ACTIONS } from './types';

const setUser: ActionCreator<SetUserAction> = (payload: UserState) => ({
    type: USER_ACTIONS.SET_USER,
    payload,
});

export const login = (username: string, password: string): AppThunkAsync => async (dispatch, getState): Promise<boolean> => {
    try {
        const user = true // TODO: Implement Service Request to login and return user payload;
        dispatch(setUser(user));
        return true
    } catch (err) {
        // TODO: Present error with a message
        return false;
    }
};

export const logoff = () => ({
    type: USER_ACTIONS.RESET_USER,
})