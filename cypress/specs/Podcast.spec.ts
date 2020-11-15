import { util, validateBlocksTableContent } from '../util';
import mockPodcastData from '../../src/mock/data/podcast';
import { headers } from '../../src/podcast/components/util';
import { authRoutes } from '../../src/routes';

describe('Podcast', () => {
  it('should load app', () => {
    cy.visit('/');
  });

  it('should navigate to podcast page', () => {
    cy.get(util.links.podcasts).click();
    cy.url().should('include', authRoutes.podcast);
  });

  it('should display the podcast table', () => {
    cy.get(util.components.table.table).should('exist');
  });

  it('should display and table play buttons', () => {
    cy.get(util.features.podcast.table.playButton) 
      .should('have.length', 5)
      .should('exist');
  });

  it('should have expected table data', () => {
    validateBlocksTableContent(headers, mockPodcastData);
  });

  it('should be able to changes rows per page', () => {
    ['5', '10', '25'];
  });

});