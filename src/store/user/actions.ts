import { ActionCreator } from '@reduxjs/toolkit';
import { AppThunkAsync } from '../types';
import { ResetUserAction, SetUserAction, UserState, USER_ACTIONS } from './types';

const setUser: ActionCreator<SetUserAction> = (payload: UserState) => ({
    type: USER_ACTIONS.SET_USER,
    payload,
});

export const login = (): AppThunkAsync => async (dispatch): Promise<boolean> => {
    try {
        const user = true; // TODO: Implement Service Request to login and return user payload;
        dispatch(setUser(user));
        return true;
    } catch (err) {
        // TODO: Present error with a message
        return false;
    }
};

export const logoff = (): ResetUserAction => ({
    type: USER_ACTIONS.RESET_USER,
});