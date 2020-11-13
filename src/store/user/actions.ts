import { ActionCreator } from '@reduxjs/toolkit';
import { AppThunkAsync } from '../types';
import {
  ResetUserAction,
  SetUserAction,
  UserState,
  USER_ACTIONS,
} from './types';

const setUser: ActionCreator<SetUserAction> = (payload: UserState) => ({
  type: USER_ACTIONS.SET_USER,
  payload,
});

export const login = (paylaod: Partial<UserState>): AppThunkAsync => async (
  dispatch,
): Promise<undefined> => {
  try {
    // TODO: Implement Service Request to login and return user payload;
    dispatch(setUser(paylaod));
    return;
  } catch (err) {
    // TODO: Present error with a message
    return;
  }
};

export const logoff = (): ResetUserAction => ({
  type: USER_ACTIONS.RESET_USER,
});

export default { login, logoff };
