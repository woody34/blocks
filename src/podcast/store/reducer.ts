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
    const { podcasts, selectedPodcast } = state;
    if (!selectedPodcast) {
      return { ...state };
    }

    const index = state.podcasts.indexOf(selectedPodcast) || 0;
    const previousIndex = index - 1;
    if (previousIndex < 0) {
      return { ...state };
    }

    const previousPodcast = podcasts[previousIndex] || selectedPodcast;
    return { ...state, selectedPodcast: previousPodcast };
  }

  case PODCAST_ACTIONS.NEXT_TRACK: {
    const { podcasts, selectedPodcast } = state;
    if (!state.selectedPodcast || !selectedPodcast) {
      return { ...state };
    }

    const index = podcasts.indexOf(selectedPodcast) || 0;
    const nextIndex = index + 1;
    if (nextIndex >= podcasts.length) {
      return { ...state };
    }

    const nextPodcast = podcasts[nextIndex] || state.selectedPodcast;
    return { ...state, selectedPodcast: nextPodcast };
  }
  
  case PODCAST_ACTIONS.SELECT_PODCAST: {
    console.log(action.payload);
    return { ...state, selectedPodcast: action.payload };
  }

  default: {
    return { ...state };
  }
  }
};
