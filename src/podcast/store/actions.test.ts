import { initialPodcastState, PODCAST_ACTIONS, ResetPodcastAction, SetPodcastAction } from './types';
import actions from './actions';

describe('Podcast Actions', () => {
  it('should create an action to reset state', () => {
    const action: ResetPodcastAction = {
      type: PODCAST_ACTIONS.RESET_PODCAST
    };

    expect(actions.reset()).toEqual(action);
  });

  it('should create an action to set state', () => {
    const action: SetPodcastAction = {
      type: PODCAST_ACTIONS.SET_PODCAST,
      payload: initialPodcastState,
    };

    expect(actions.setPodcast(initialPodcastState)).toEqual(action);
  });
});