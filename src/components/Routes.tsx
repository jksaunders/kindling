import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { ExamplePage } from './pages';

let rootLocation = '';

if (process.env.rootLocation) {
  rootLocation = process.env.rootLocation;
}

export const ROUTES = {
  EXAMPLE_PAGE: `${rootLocation}`,
};

const Routes: FC = () => (
  <>
    <Route path={ROUTES.EXAMPLE_PAGE} component={ExamplePage} exact />
  </>
);

export default Routes;
