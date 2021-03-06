import { initialPodcastState, PodcastState, PODCAST_ACTIONS } from './types';
import {
  loadPodcasts,
  playPodcast,
  reset,
  selectPodcast,
  setPodcast,
  setPodcastPlay,
  setPodcasts,
  setPodcastVolume,
} from './actions';
import mockPodcastDocs from '../../mock/data/podcast';
import { makeAction, mockStore, strictEquals } from '../../util/testing-util';
import { podcastService } from '../../services/podcast';
import { Actions } from '../../store/types';

const received: Actions[] = [];

const grabActions = (action: Actions) => {
  received.push(action);
};

const slice: PodcastState = {
  podcasts: mockPodcastDocs,
  showPlayer: true,
  playing: true,
  volume: 35,
};

const { dispatch } = mockStore(initialPodcastState, grabActions);

describe('Podcast Actions', () => {
  beforeEach(() => (received.length = 0));

  it('should create an action to set state', () => {
    dispatch(setPodcast(slice));
    const expected = [makeAction(PODCAST_ACTIONS.SET_PODCAST, slice)];
    strictEquals(received, expected);
  });

  it('should create an action to reset state', () => {
    dispatch(reset());
    const expected = [makeAction(PODCAST_ACTIONS.RESET_PODCAST)];
    strictEquals(received, expected);
  });

  it('should create an action to set podcasts', () => {
    dispatch(setPodcasts(mockPodcastDocs));
    const expected = [
      makeAction(PODCAST_ACTIONS.SET_PODCASTS, mockPodcastDocs),
    ];
    strictEquals(received, expected);
  });

  it('should create an action to set selectedPodcast', () => {
    const [podcast] = mockPodcastDocs;
    dispatch(selectPodcast(podcast));
    const expected = [makeAction(PODCAST_ACTIONS.SELECT_PODCAST, podcast)];
    strictEquals(received, expected);
  });

  it('should create an action to set volume', () => {
    dispatch(setPodcastVolume(10));
    const expected = [makeAction(PODCAST_ACTIONS.SET_VOLUME, 10)];
    strictEquals(received, expected);
  });

  it('should create an action to set playing', () => {
    dispatch(setPodcastPlay(true));
    const expected = [makeAction(PODCAST_ACTIONS.SET_PLAY, true)];
    strictEquals(received, expected);
  });

  it('should call setPodcasts on loadPodcasts', async () => {
    jest.spyOn(podcastService, 'query').mockResolvedValue(mockPodcastDocs);
    await dispatch(loadPodcasts());
    const expected = [
      makeAction(PODCAST_ACTIONS.SET_PODCASTS, mockPodcastDocs),
    ];
    strictEquals(received, expected);
  });

  it('should call selectPodcast and setPodcastPlay on playPodcast', async () => {
    jest.spyOn(podcastService, 'query').mockResolvedValue(mockPodcastDocs);
    await dispatch(playPodcast(mockPodcastDocs));
    const expected = [
      makeAction(PODCAST_ACTIONS.SELECT_PODCAST, mockPodcastDocs),
      makeAction(PODCAST_ACTIONS.SET_PLAY, true),
    ];
    strictEquals(received, expected);
  });
});
