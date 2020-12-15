import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { AnotherPage, ExamplePage } from './pages';

let rootLocation = '';

if (process.env.rootLocation) {
  rootLocation = process.env.rootLocation;
}

export const ROUTES = {
  EXAMPLE_PAGE: `${rootLocation}/`,
  ANOTHER_PAGE: `${rootLocation}/another-page`,
};

const Routes: FC = () => (
  <>
    <Route path={ROUTES.EXAMPLE_PAGE} component={ExamplePage} exact />
    <Route path={ROUTES.ANOTHER_PAGE} component={AnotherPage} exact />
  </>
);

export default Routes;
