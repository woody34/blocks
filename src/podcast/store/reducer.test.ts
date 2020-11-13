import { reset, setPodcast, selectPodCast, setPodcastPlay, setPodcasts } from './actions';
import { podcastReducer } from './reducer';
import {
  PodcastState,
  initialPodcastState,
  PodcastActions,
} from './types';
import podcastDocs from '../../mock/data/podcast';

const state: PodcastState = {
  podcasts: [],
  showPlayer: true,
  playing: true,
  volume: 100,
};

const testReducer = <R, E>(received: R, expected: E) => {
  return expect(received).toEqual(expected);
};

describe('Podcast Reducer', () => {
  it('should return detault state', () => {
    const received = podcastReducer(state, {} as PodcastActions);
    const expected = state;
    testReducer(received, expected);
  });

  it('should set state', () => {
    const received = podcastReducer(initialPodcastState, setPodcast(state));
    const expected = state;
    expect(received).toEqual(expected);
  });
  
  it('should reset state', () => {
    const received = podcastReducer(state, reset());
    const expected = initialPodcastState;
    testReducer(received, expected);
  });

  it('should set selectedPodcast', async () => {
    const [podcast] = podcastDocs;
    const received =  podcastReducer(initialPodcastState, selectPodCast(podcast));
    const expected = { ...initialPodcastState, selectedPodcast: podcast };
    expect(received).toEqual(expected);
  });

  it('should set podcasts', async () => {
    const received =  podcastReducer(initialPodcastState, setPodcasts(podcastDocs));
    const expected = { ...initialPodcastState, podcasts: podcastDocs };
    expect(received).toEqual(expected);
  });

  it('should set playing', () => {
    const received = podcastReducer(initialPodcastState, setPodcastPlay(true));
    const expected = { ... initialPodcastState, playing: true};
    expect(received).toEqual(expected);
  });
});