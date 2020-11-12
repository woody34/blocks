// import { makeService } from './service';
import { mockService } from '../mock/service';
import mockPodcastDocs from '../mock/data/podcast';

// const baseRoute = '/podcast';
// export const podcastService = makeService(baseRoute);
const service = mockService(mockPodcastDocs);
export const podcastService = service;

export default podcastService;