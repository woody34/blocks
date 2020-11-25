import { Action } from 'redux';

export enum APP_ACTIONS {
  SET_APP = 'app/set',
  RESET_APP = 'app/reset',
  SET_IS_NAV_STICKY = 'app/set-is-nav-sticky',
  SET_Y_OFFSET = 'app/set-y-offset',
}

export interface AppState {
  isNavSticky: boolean;
  yOffset: number;
}

export const initialAppState: AppState = {
  isNavSticky: false,
  yOffset: 0,
};

export type SetAppAction = Action<APP_ACTIONS.SET_APP> & {
  payload: AppState;
};

export type ResetAppAction = Action<APP_ACTIONS.RESET_APP>;

export type SetIsNavStickyAction = Action<APP_ACTIONS.SET_IS_NAV_STICKY> & {
  payload: boolean;
};

export type SetYOffset = Action<APP_ACTIONS.SET_Y_OFFSET> & {
  payload: number;
};

export type AppActions =
  | SetAppAction
  | ResetAppAction
  | SetIsNavStickyAction
  | SetYOffset;
