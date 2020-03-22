/// <reference types="Cypress" />

import { Example } from '../page-objects';

describe('Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('page has loaded', () => {
    Example().root().should('be.visible');
    Example().content.contains("I'm an example page!");
  });
});
