import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import PodcastTable, { headers } from './PodcastTable';
import { cyTable } from '../../components/Table/util';
import { TestingUtil, testUtil } from '../../util/testing-util';
import { podcastService } from '../../services/podcast';
import mockPodcastDocs from '../../mock/data/podcast';
import { fakeResonseWrapper } from '../../mock/service';
import { filterDuration, filterPublishDate } from './util';
const setup = async (): Promise<TestingUtil> => {
  return testUtil(< PodcastTable/>, { provideStore: true });
};

describe('PodcastTable', () => {
  beforeEach(jest.restoreAllMocks);
  jest.spyOn(podcastService, 'getAll').mockResolvedValue(fakeResonseWrapper(mockPodcastDocs));
  it('should display all labels', async () => {
    const { getByText } = await setup();
    expect.assertions(headers.length);
    
    headers.forEach(header => {
      const cell = getByText<HTMLTableCellElement>(header.label);
      expect(cell).toBeDefined();
    });
  });
  it('should display 5 rows podcasts by default', async () => {
    const { getAllByDataCy } = await setup();
    expect.assertions(26);
    
    const rows = getAllByDataCy<HTMLTableRowElement>(cyTable.row);
    expect(rows.length).toEqual(5);
    rows.forEach((row, i) => {
      headers.filter(h => h.value).forEach(header => {
        let value = String(mockPodcastDocs[i][header.value!]);
        if (header.value === 'duration') {
          value = filterDuration(mockPodcastDocs[i]);
        }
        if (header.value === 'published') {
          value = filterPublishDate(mockPodcastDocs[i]);
        }

        const cells = Array.from(row.childNodes).filter(cell => !cell.textContent?.includes('Play'));
        const hasValue = cells.some(c => c.textContent?.includes(value));
        expect(hasValue).toBe(true);
      });
    });
  });
});
