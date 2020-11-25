import { Reducer } from '@reduxjs/toolkit';
import { APP_ACTIONS, initialAppState, AppState, AppActions } from './types';

export const appReducer: Reducer<AppState, AppActions> = (
  state: AppState = initialAppState,
  action: AppActions,
) => {
  switch (action.type) {
    case APP_ACTIONS.RESET_APP: {
      return { ...initialAppState };
    }

    case APP_ACTIONS.SET_APP: {
      return { ...state, ...action.payload };
    }

    case APP_ACTIONS.SET_IS_NAV_STICKY: {
      return { ...state, isNavSticky: action.payload };
    }

    case APP_ACTIONS.SET_Y_OFFSET: {
      return { ...state, yOffset: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};
