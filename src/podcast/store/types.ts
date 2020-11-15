import { Action } from "redux";
import { PodcastData } from "../../common/podcast";

export enum PODCAST_ACTIONS {
  SET_PODCAST = "podcast/set",
  SET_PODCASTS = "podcasts/set",
  RESET_PODCAST = "podcast/reset",
  SET_PLAY = "podcast/playing",
  SET_VOLUME = "podcast/set-volume",
  SELECT_PODCAST = "podcast/select-podcast",
}

export interface PodcastState {
  podcasts: PodcastData[];
  selectedPodcast?: PodcastData;
  showPlayer: boolean;
  playing: boolean;
  volume: number;
}

export const initialPodcastState: PodcastState = {
  podcasts: [],
  showPlayer: false,
  playing: false,
  volume: 70,
};

export type SetPodcastAction = Action<PODCAST_ACTIONS.SET_PODCAST> & {
  payload: PodcastState;
};

export type SetPodcastsAction = Action<PODCAST_ACTIONS.SET_PODCASTS> & {
  payload: PodcastData[];
};

export type ResetPodcastAction = Action<PODCAST_ACTIONS.RESET_PODCAST>;

export type SetPodcastVolume = Action<PODCAST_ACTIONS.SET_VOLUME> & {
  payload: number;
};

export type SetPodcastPlay = Action<PODCAST_ACTIONS.SET_PLAY> & {
  payload: boolean;
};

export type SelectPodcastAction = Action<PODCAST_ACTIONS.SELECT_PODCAST> & {
  payload: PodcastData;
};

export type SelectPodcastByNumber = Action<PODCAST_ACTIONS.SELECT_PODCAST> & {
  payload: PodcastData;
};

export type PodcastActions =
  | ResetPodcastAction
  | SetPodcastAction
  | SetPodcastsAction
  | SetPodcastPlay
  | SetPodcastVolume
  | SelectPodcastAction
  | SelectPodcastByNumber;
