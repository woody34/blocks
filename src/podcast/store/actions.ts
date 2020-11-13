import { ActionCreator } from '@reduxjs/toolkit';
import { PodcastData } from '../../common/podcast';
import { podcastService } from '../../services/podcast';
import { AppThunkAsync } from '../../store/types';
import {
  ResetPodcastAction,
  SetPodcastAction,
  PodcastState,
  PODCAST_ACTIONS,
  LoadPodcastsAction,
  SelectPodcastAction,
  SetPodcastVolume,
  SetPodcastPlay,
  SelectPodcastByNumber,
} from './types';
import { store } from '../../store';

export const setPodcast: ActionCreator<SetPodcastAction> = (
  payload: PodcastState
) => ({
  type: PODCAST_ACTIONS.SET_PODCAST,
  payload,
});

export const setPodcasts: ActionCreator<LoadPodcastsAction> = (
  payload: PodcastData[]
) => ({
  type: PODCAST_ACTIONS.LOAD_PODCASTS,
  payload,
});

export const selectPodCast: ActionCreator<SelectPodcastAction> = (
  payload: PodcastData
) => ({
  type: PODCAST_ACTIONS.SELECT_PODCAST,
  payload,
});

export const selectPodCastByNumber: ActionCreator<SelectPodcastByNumber> = (
  payload: number
) => {
  const state = store.getState().podcast;
  const podcast = state.podcasts.find(p => p.number === payload) || state.selectedPodcast as PodcastData;
  return  {
    type: PODCAST_ACTIONS.SELECT_PODCAST,
    payload: podcast,
  };
};

export const setPodcastVolume: ActionCreator<SetPodcastVolume> = (
  payload: number
) => ({
  type: PODCAST_ACTIONS.SET_VOLUME,
  payload,
});

export const setPodcastPlay: ActionCreator<SetPodcastPlay> = (
  payload: boolean
) => ({
  type: PODCAST_ACTIONS.SET_PLAY,
  payload,
});

export const reset = (): ResetPodcastAction => ({
  type: PODCAST_ACTIONS.RESET_PODCAST,
});

export const loadPodcasts = (): AppThunkAsync => async (
  dispatch
): Promise<undefined> => {
  try {
    const podcasts = await podcastService.getAll();
    dispatch(setPodcasts(podcasts));
    return;
  } catch (err) {
    // TODO: Present error with a message
    return;
  }
};

export default { setPodcast, setPodcasts, setPodcastPlay, selectPodCast, reset, loadPodcasts, selectPodCastByNumber };
