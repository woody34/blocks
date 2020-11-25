import { ActionCreator } from '@reduxjs/toolkit';
import { AppThunk } from '../types';
import {
  SetAppAction,
  ResetAppAction,
  SetYOffset,
  APP_ACTIONS,
  AppState,
  SetIsNavStickyAction,
} from './types';

export const setApp: ActionCreator<SetAppAction> = (payload: AppState) => ({
  type: APP_ACTIONS.SET_APP,
  payload,
});

export const resetApp: ActionCreator<ResetAppAction> = (payload: AppState) => ({
  type: APP_ACTIONS.RESET_APP,
  payload,
});

export const setIsNavSticky: ActionCreator<SetIsNavStickyAction> = (
  payload: boolean,
) => {
  return {
    type: APP_ACTIONS.SET_IS_NAV_STICKY,
    payload,
  };
};

export const setYOffset: ActionCreator<SetYOffset> = (payload: number) => ({
  type: APP_ACTIONS.SET_Y_OFFSET,
  payload,
});

export const updateYOffset = (yOffset: number): AppThunk => (
  dispatch,
): undefined => {
  dispatch(setIsNavSticky(yOffset >= 765));
  dispatch(setYOffset(yOffset));
  return;
};

export default {
  setApp,
  resetApp,
  setIsNavSticky,
  setYOffset,
};
