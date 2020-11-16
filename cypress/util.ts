import { BaseData } from '../src/common/base';
import { selectors } from '../src/util/data-cy';
import { Headers } from '../src/components/Table/util';
import { get } from 'lodash';
import { PodcastData } from '../src/common/podcast';

export { selectors } from '../src/util/data-cy';

export const checkBlocksTableContent = <D extends BaseData>(
  headers: Headers<D>[],
  data: D[],
  selector?: string,
): void => {
  cy.get(selector ?? selectors.components.table.table).within(() => {
    cy.get(selectors.components.table.header).each(($th, i) => {
      cy.wrap($th).should('have.text', headers[i].label);
    });

    cy.get(selectors.components.table.row).each(($tr, rowIndex) => {
      cy.wrap($tr).within(() => {
        cy.get('td').each(($td, colIndex) => {
          const header = headers[colIndex];

          const expected = header.filter
            ? header.filter(data[rowIndex])
            : get(data[rowIndex], header.value, '');
          cy.wrap($td).should('have.text', expected);
        });
      });
    });
  });
};

export const changeBlocksTableSize = (
  page: string,
  selector?: string,
): void => {
  cy.get(selector ?? selectors.components.table.pagination)
    .find('input')
    .scrollIntoView()
    .parent()
    .click();
  cy.get('.MuiPaper-root.MuiMenu-paper.MuiPopover-paper')
    .contains(page)
    .click()
    .should('not.exist');
};

export const checkBaseTableNavigation = <D extends BaseData>(
  rows: number[],
  headers: Headers<D>[],
  data: D[],
): void => {
  rows
    .map(count => {
      cy.get(selectors.components.table.pagination).within(() => {
        cy.get('[title="Next page"]').should('be.visible').click();
      });
      const podcasts = [...data].splice(count, 5);
      checkBlocksTableContent(headers, podcasts);
      return count;
    })
    .reverse()
    .forEach(count => {
      const podcasts = [...data].splice(count, 5);
      checkBlocksTableContent(headers, podcasts);
      cy.get(selectors.components.table.pagination).within(() => {
        cy.get('[title="Previous page"]').should('be.visible').click();
      });
    });
};

export const checkPodcastDrawer = (podcast: PodcastData): void => {
  cy.get(selectors.features.podcast.drawer)
    .should('be.visible')
    .within(() => {
      // details
      ['title', 'description'].forEach(prop => {
        cy.get(selectors.features.podcast.details[prop]).should(
          'contain',
          podcast[prop],
        );
      });

      // player
      Object.keys(selectors.features.podcast.player).forEach(prop => {
        if (prop === 'pause') {
          cy.get(selectors.features.podcast.player.play).click();
          cy.get(selectors.features.podcast.player.pause).click();
        } else {
          cy.get(selectors.features.podcast.player[prop]).should('be.visible');
        }
      });
    });
};
