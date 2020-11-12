import { Reducer } from '@reduxjs/toolkit';
import {
  PODCAST_ACTIONS,
  initialPodcastState,
  PodcastState,
  PodcastActions,
} from './types';

export const podcastReducer: Reducer<PodcastState, PodcastActions> = (
  state: PodcastState = initialPodcastState,
  action: PodcastActions
) => {
  switch (action.type) {
  case PODCAST_ACTIONS.RESET_PODCAST: {
    return { ...initialPodcastState };
  }
  case PODCAST_ACTIONS.SET_PODCAST: {
    return { ...state, ...action.payload };
  }
  case PODCAST_ACTIONS.LOAD_PODCASTS: {
    return { ...state, podcasts: action.payload };
  }
  case PODCAST_ACTIONS.PAUSE_PODCAST: {
    return { ...state, playing: false };
  }
  case PODCAST_ACTIONS.PLAY_PODCAST: {
    return { ...state, playing: true };
  }
  case PODCAST_ACTIONS.PREVIOUS_TRACK: {
    if (!state.selectedPodcast) {
      return { ...state };
    }
    const index = state.podcasts.indexOf(state.selectedPodcast) || 0;
    const previousIndex = index - 1;
    const selectedPodcast =
        state.podcasts[previousIndex] || state.selectedPodcast;
    return { ...state, selectedPodcast };
  }
  case PODCAST_ACTIONS.NEXT_TRACK: {
    if (!state.selectedPodcast) {
      return { ...state };
    }
    const index = state.podcasts.indexOf(state.selectedPodcast) || 0;
    const nextIndex = index + 1;
    const selectedPodcast =
        state.podcasts[nextIndex] || state.selectedPodcast;
    return { ...state, selectedPodcast };
  }
  default: {
    return { ...state };
  }
  }
};
