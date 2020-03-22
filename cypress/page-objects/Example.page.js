/// <reference types="Cypress" />

export class Example {
  constructor() {
    this.root = () => cy.get('body');
  }

  get content() {
    return this.root().find('span');
  }
}

export default () => new Example();
