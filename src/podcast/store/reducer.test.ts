import {
  reset,
  setPodcast,
  selectPodcast,
  setPodcastPlay,
  setPodcasts,
} from "./actions";
import { podcastReducer } from "./reducer";
import { PodcastState, initialPodcastState, PodcastActions } from "./types";
import podcastDocs from "../../mock/data/podcast";
import { strictEquals } from "../../util/testing-util";

const state: PodcastState = {
  podcasts: [],
  showPlayer: true,
  playing: true,
  volume: 100,
};

describe("Podcast Reducer", () => {
  it("should return detault state", () => {
    const received = podcastReducer(state, {} as PodcastActions);
    const expected = state;
    strictEquals(received, expected);
  });

  it("should set state", () => {
    const received = podcastReducer(initialPodcastState, setPodcast(state));
    const expected = state;
    strictEquals(received, expected);
  });

  it("should reset state", () => {
    const received = podcastReducer(state, reset());
    const expected = initialPodcastState;
    strictEquals(received, expected);
  });

  it("should set selectedPodcast", async () => {
    const [podcast] = podcastDocs;
    const received = podcastReducer(
      initialPodcastState,
      selectPodcast(podcast)
    );
    const expected = { ...initialPodcastState, selectedPodcast: podcast };
    strictEquals(received, expected);
  });

  it("should set podcasts", async () => {
    const received = podcastReducer(
      initialPodcastState,
      setPodcasts(podcastDocs)
    );
    const expected = { ...initialPodcastState, podcasts: podcastDocs };
    strictEquals(received, expected);
  });

  it("should set playing", () => {
    const received = podcastReducer(initialPodcastState, setPodcastPlay(true));
    const expected = { ...initialPodcastState, playing: true };
    strictEquals(received, expected);
  });
});
