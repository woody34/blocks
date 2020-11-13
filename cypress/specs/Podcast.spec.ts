import { util } from '../util';

describe('Podcast', () => {
  it('should navigate to podcast page', () => {
    cy.visit('/podcast');
  });

  it('should display the podcast table', () => {
    cy.get(util.components.table.table).should('exist');
  });

  it('should display and click play buttons', () => {
    cy.get(util.features.podcast.table.playButton) 
      .should('have.length', 5)
      .each(e => {
        cy.wrap(e).click();
      });
  });
});