import { CypressResult } from './interfaces';

class Example {
  get root(): CypressResult {
    return cy.get('body');
  }

  get content(): CypressResult {
    return this.root.find('span');
  }
}

export type Type = InstanceType<typeof Example>;

export default (): Type => new Example();
