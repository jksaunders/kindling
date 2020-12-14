import ExamplePage from '../page-objects/Example.page';

describe('Example', () => {
  before(() => {
    cy.visit('/');
  });

  it('page has loaded', () => {
    ExamplePage().root.should('be.visible');
  });

  it('content has loaded', () => {
    ExamplePage().content.contains("I'm an example page!");
  });
});
