import { ThunkAction } from "@reduxjs/toolkit";
import { PodcastActions, PodcastState } from "../podcast/store/types";

export interface State {
  podcast: PodcastState;
}

export type States = PodcastState;

export type Actions = PodcastActions;

export type AppThunk = ThunkAction<undefined, State, null, Actions>;
export type AppThunkAsync = ThunkAction<
  Promise<undefined>,
  State,
  null,
  Actions
>;
