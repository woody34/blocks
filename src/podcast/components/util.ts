import moment from 'moment';
import { PodcastData } from '../../common/podcast';
import { Headers } from '../../components/Table/util';

export const filterDuration = (item: PodcastData): string =>
  new Date(item.duration * 1000).toISOString().substr(11, 8);
export const filterPublishDate = (item: PodcastData): string =>
  moment(item.published).format('MMM. Do, YYYY');

export const headers: Headers<PodcastData>[] = [
  {
    label: '',
    value: 'prepend',
  },
  {
    value: 'number',
    label: 'Track',
    align: 'left',
    sortable: true,
  },
  {
    value: 'title',
    label: 'Title',
  },
  {
    value: 'description',
    label: 'Description',
  },
  {
    value: 'duration',
    label: 'Length',
    sortable: true,
    filter: filterDuration,
  },
  {
    value: 'published',
    label: 'Published',
    filter: filterPublishDate,
  },
];

export const cyPodcastTable = {
  playButton: 'podcast-table-play-button',
  pauseButton: 'podcast-table-pause-button',
};

export const cyPodcastDetails = {
  description: 'podcast-details-description',
  title: 'podcast-details-title',
};

export const cyPodcastPlayer = {
  previous: 'podcast-player-previous',
  play: 'podcast-player-play',
  pause: 'podcast-player-pause',
  next: 'podcast-player-next',
  volumeUp: 'podcast-player-volume-up',
  volumeSlider: 'podcast-player-volume-slider',
  volumeDown: 'podcast-player-volume-down',
};
