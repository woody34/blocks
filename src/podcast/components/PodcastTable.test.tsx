import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import PodcastTable, { headers } from './PodcastTable';
import { TestingUtil, testUtil } from '../../util/testing-util';

const setupTests = (): TestingUtil => {
  return testUtil(< PodcastTable/>, { provideStore: true });
};

describe('PodcastTable', () => {
  it('should display labels', async () => {
    const { getByText } = setupTests();
    expect.assertions(headers.length);

    headers.forEach(header => {
      const element = getByText(header.label);
      expect(element).toBeDefined();
    });
  });
});
