import { ActionCreator } from '@reduxjs/toolkit';
import { PodcastData } from '../../common/podcast';
import { podcastService } from '../../services/podcast';
import { AppThunkAsync } from '../../store/types';
import {
  ResetPodcastAction,
  SetPodcastAction,
  PodcastState,
  PODCAST_ACTIONS,
  SelectPodcastAction,
  SetPodcastVolume,
  SetPodcastPlay,
  SetPodcastsAction,
} from './types';

export const setPodcast: ActionCreator<SetPodcastAction> = (
  payload: PodcastState,
) => ({
  type: PODCAST_ACTIONS.SET_PODCAST,
  payload,
});

export const setPodcasts: ActionCreator<SetPodcastsAction> = (
  payload: PodcastData[],
) => ({
  type: PODCAST_ACTIONS.SET_PODCASTS,
  payload,
});

export const selectPodcast: ActionCreator<SelectPodcastAction> = (
  payload: PodcastData,
) => {
  return {
    type: PODCAST_ACTIONS.SELECT_PODCAST,
    payload,
  };
};

export const setPodcastVolume: ActionCreator<SetPodcastVolume> = (
  payload: number,
) => ({
  type: PODCAST_ACTIONS.SET_VOLUME,
  payload,
});

export const setPodcastPlay: ActionCreator<SetPodcastPlay> = (
  payload: boolean,
) => ({
  type: PODCAST_ACTIONS.SET_PLAY,
  payload,
});

export const reset = (): ResetPodcastAction => ({
  type: PODCAST_ACTIONS.RESET_PODCAST,
});

export const loadPodcasts = (): AppThunkAsync => async (
  dispatch,
): Promise<undefined> => {
  try {
    const podcasts = await podcastService.getAll();
    dispatch(setPodcasts(podcasts));
    return;
  } catch (err) {
    // TODO: Present error with a modal
    return;
  }
};

export const playPodcast = (podcast: PodcastData): AppThunkAsync => async (
  dispatch,
): Promise<undefined> => {
  try {
    dispatch(selectPodcast(podcast));
    dispatch(setPodcastPlay(true));
    return;
  } catch (err) {
    // TODO: Present error with a modal
    return;
  }
};

export default {
  setPodcast,
  setPodcasts,
  setPodcastPlay,
  selectPodcast,
  reset,
};
