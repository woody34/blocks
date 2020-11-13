import moment from 'moment';
import { PodcastData } from '../../common/podcast';

export const filterDuration = (item: PodcastData): string => new Date(item.duration * 1000).toISOString().substr(11, 8);
export const filterPublishDate = (item: PodcastData): string => moment(item.published).format('MMM. Do, YYYY');

export const cyPodcastTable = {
  playButton: 'podcast-table-play-button',
  pauseButton: 'podcast-table-pause-button',
};
