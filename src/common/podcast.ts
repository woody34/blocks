import { BaseData } from "./base";

export interface PodcastData extends BaseData {
  number: number;
  title: string;
  description: string;
  duration: number;
  published: string;
}
