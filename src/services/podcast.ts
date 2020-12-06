import { makeService } from './service';
import { mockService } from '../mock/service';
import mockPodcastDocs from '../mock/data/podcast';
import { PodcastData } from '../common/podcast';
import { pickBy } from 'lodash';
import { HttpAdapters } from './service.types';

interface PodcastApiData {
  description: string;
  id?: number;
  length: number;
  number: number;
  postedDate: string;
  title: string;
}

const adapters: HttpAdapters<PodcastData, PodcastApiData> = {
  request: (req: PodcastData): PodcastApiData => {
    const data = ({
      Id: req.id,
      Number: req.number,
      Title: req.title,
      Description: req.description,
      Length: req.duration,
      PostedDate: req.published,
    } as unknown) as PodcastApiData;
    // FIXME: for some reason the api returns lowercase and takes in title case which breaks type
    return (pickBy(data, d => d !== undefined) as unknown) as PodcastApiData;
  },
  response: (resp: PodcastApiData): PodcastData => {
    const data: PodcastData = {
      id: resp.id,
      number: resp.number,
      title: resp.title,
      description: resp.description,
      duration: resp.length,
      published: resp.postedDate,
    };
    return (pickBy(data, d => d !== undefined) as unknown) as PodcastData;
  },
};

const baseRoute = process.env.PODCAST_API;

export const podcastService = makeService(
  baseRoute,
  adapters,
  mockService(mockPodcastDocs),
);
