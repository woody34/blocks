import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import PodcastTable from './PodcastTable';
import { cyTable } from '../../components/Table/util';
import { TestingUtil, testUtil } from '../../util/testing-util';
import { podcastService } from '../../services/podcast';
import mockPodcastDocs from '../../mock/data/podcast';
import { get } from 'lodash';
import { headers } from './util';
const wrapper = (): TestingUtil => {
  return testUtil(<PodcastTable />, { provideStore: true });
};

describe('PodcastTable', () => {
  beforeEach(jest.restoreAllMocks);
  jest.spyOn(podcastService, 'query').mockResolvedValue(mockPodcastDocs);

  it('should display all labels', async () => {
    const { getAllByDataCy } = wrapper();
    expect.assertions(headers.length);

    const cells = getAllByDataCy<HTMLTableCellElement>(cyTable.header);
    headers.forEach((header, i) => {
      expect(cells[i].textContent).toEqual(header.label);
    });
  });

  it('should display 5 podcasts by default', async () => {
    const { getAllByDataCy } = wrapper();
    expect.assertions(36);

    const rows = getAllByDataCy<HTMLTableRowElement>(cyTable.row);
    expect(rows).toHaveLength(5);
    rows.forEach((row, i) => {
      const cells = row.querySelectorAll('td');
      expect(cells).toHaveLength(6);
      headers.forEach((header, k) => {
        const received = cells[k].textContent;
        const expected = header.filter
          ? header.filter(mockPodcastDocs[i])
          : get(mockPodcastDocs[i], header.value, '');
        expect(received).toContain(expected);
      });
    });
  });
});
