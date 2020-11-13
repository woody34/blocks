import actions from './actions';
import { podcastReducer } from './reducer';
import { PodcastState, initialPodcastState } from './types';

const state: PodcastState = {
  podcasts: [],
  showPlayer: true,
  playing: true,
  volume: 100,
};

describe('Podcast Reducer', () => {
  it('should reset state', () => {
    expect(podcastReducer(state, actions.reset())).toEqual({ ...initialPodcastState });
  });

  it('should set state', () => {
    expect(podcastReducer(initialPodcastState, actions.setPodcast(state))).toEqual(state);
  });
});
