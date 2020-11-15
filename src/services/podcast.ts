// import { makeService } from './service';
import { mockService } from '../mock/service';
import mockPodcastDocs from '../mock/data/podcast';
import { makeService } from './service';

const baseRoute = '/podcast';
// export const podcastService = makeService(baseRoute);
export const podcastService = mockService(mockPodcastDocs);
