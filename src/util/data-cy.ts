import { cyTable } from '../components/Table/util';
import { cyPodcast } from '../podcast/util';

export const values = {
  components: {
    table: cyTable,
  },
  features: {
    podcast: cyPodcast
  }
};

const makeValueSelector = (_value: string): string => {
  return `[data-cy="${_value}"]`;
};

interface DataCySelector {
  [k: string]: string | DataCySelector | unknown;
}

export const generateSelectors = (_values: DataCySelector): DataCySelector => {
  const selectors = { ..._values };
  for (const prop in selectors) {
    if (typeof selectors[prop] === 'string') {
      selectors[prop] = makeValueSelector(selectors[prop] as string);
    }
    if (typeof selectors[prop] === 'object') {
      selectors[prop] = generateSelectors(selectors[prop] as DataCySelector);
    }
  }
  return selectors;
};

export const selectors = generateSelectors(values) as typeof values;
