import { Reducer } from '@reduxjs/toolkit';
import { PODCAST_ACTIONS, initialPodcastState, PodcastState, PodcastActions } from './types';

export const podcastReducer: Reducer<PodcastState, PodcastActions> = (
  state: PodcastState = initialPodcastState,
  action: PodcastActions,
) => {
  switch (action.type) {
    case PODCAST_ACTIONS.RESET_PODCAST: {
      return { ...initialPodcastState };
    }

    case PODCAST_ACTIONS.SET_PODCAST: {
      return { ...state, ...action.payload };
    }

    case PODCAST_ACTIONS.SET_PODCASTS: {
      return { ...state, podcasts: action.payload };
    }

    case PODCAST_ACTIONS.SET_PLAY: {
      return { ...state, playing: action.payload };
    }

    case PODCAST_ACTIONS.SET_VOLUME: {
      return { ...state, volume: action.payload };
    }

    case PODCAST_ACTIONS.SELECT_PODCAST: {
      return { ...state, selectedPodcast: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};
