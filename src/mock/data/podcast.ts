import { random, lorem, date } from 'faker';
import { PodcastData } from '../../common/podcast';

const generatePodcast = (id: number) => ({
  id,
  number: id,
  title: lorem.sentence(8),
  description: lorem.paragraph(3),
  duration: random.number(7200),
  published: date.past(),
});

const docs: PodcastData[] = Array(50).fill(0).map((_, i) => generatePodcast(i));
export default docs;