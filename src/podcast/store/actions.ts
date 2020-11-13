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
} from './types';

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

export default { setPodcast, reset, loadPodcasts };
