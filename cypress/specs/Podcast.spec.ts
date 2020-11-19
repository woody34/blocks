import {
  selectors,
  checkBlocksTableContent,
  changeBlocksTableSize,
  checkPodcastDrawer,
  checkBaseTableNavigation,
} from '../util';
import mockPodcastData from '../../src/mock/data/podcast';
import { headers } from '../../src/podcast/components/util';
import { authRoutes } from '../../src/routes';

describe('Podcast', () => {
  it('should load app', () => {
    cy.visit('/');
  });

  it('should navigate to podcast page', () => {
    cy.get(selectors.links.podcasts).first().click();
    cy.url().should('include', authRoutes.podcast);
  });

  it('should display the podcast table', () => {
    cy.get(selectors.components.table.table).should('exist');
  });

  it('should display table play buttons', () => {
    cy.get(selectors.features.podcast.table.playButton)
      .should('have.length', 5)
      .should('exist');
  });

  it('should play first track in table', () => {
    cy.get(selectors.features.podcast.table.playButton).first().click();
  });

  it('should pause first track in table', () => {
    cy.get(selectors.features.podcast.table.pauseButton).click();
  });

  it('should go to cycle page and display proper data', () => {
    checkBaseTableNavigation([5, 10, 15], headers, mockPodcastData);
  });

  it('should see drawer, player and details with proper data', () => {
    checkPodcastDrawer(mockPodcastData[0]);
  });

  it('should cycle tracks and show proper data in drawer', () => {
    Array.from('01234')
      .map(track => {
        checkPodcastDrawer(mockPodcastData[track]);
        cy.get(selectors.features.podcast.player.next).click();
        return track;
      })
      .reverse()
      .forEach(track => {
        cy.get(selectors.features.podcast.player.previous).click();
        checkPodcastDrawer(mockPodcastData[track]);
        return track;
      });
    checkPodcastDrawer(mockPodcastData[0]);
  });

  it('should close drawer', () => {
    cy.get(selectors.features.podcast.drawerClose)
      .click()
      .should('not.be.visible');
  });

  ['25', '10', '5'].forEach(page => {
    it(`should properly populate ${page} rows of data`, () => {
      changeBlocksTableSize(page);
      checkBlocksTableContent(headers, mockPodcastData);
    });
  });
});
