import { Action } from 'redux';
import { PodcastData } from '../../common/podcast';

export enum PODCAST_ACTIONS {
  SET_PODCAST = 'podcast/set',
  RESET_PODCAST = 'podcast/reset',
  LOAD_PODCASTS = 'podcast/load',
  PAUSE_PODCAST = 'podcast/pause',
  PLAY_PODCAST = 'podcast/play',
  NEXT_TRACK = 'podcast/next-track',
  PREVIOUS_TRACK = 'podcast/previous-track',
  SET_VOLUME = 'podcast/set-volume',
  SELECT_PODCAST = 'podcast/select-podcast',
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

export type ResetPodcastAction = Action<PODCAST_ACTIONS.RESET_PODCAST>;

export type LoadPodcastsAction = Action<PODCAST_ACTIONS.LOAD_PODCASTS> & {
  payload: PodcastData[];
};

export type PausePodcastAction = Action<PODCAST_ACTIONS.PAUSE_PODCAST>;

export type PlayPodcastAction = Action<PODCAST_ACTIONS.PLAY_PODCAST>;

export type PreviousTrackAction = Action<PODCAST_ACTIONS.PREVIOUS_TRACK>;

export type NextTrackAction = Action<PODCAST_ACTIONS.NEXT_TRACK>;

export type PodcastActions =
  | ResetPodcastAction
  | SetPodcastAction
  | LoadPodcastsAction
  | PausePodcastAction
  | PlayPodcastAction
  | PreviousTrackAction
  | NextTrackAction;
