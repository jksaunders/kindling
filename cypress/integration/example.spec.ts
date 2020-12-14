import ExamplePage from '../page-objects/Example.page';

describe('Example', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('page has loaded', () => {
    ExamplePage().root.should('be.visible');
  });
});
