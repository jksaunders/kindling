import React from 'react';
import { Route } from 'react-router-dom';
import { ExamplePage } from './pages';

const { rootLocation = '' } = process.env;

const ROUTES = {
  EXAMPLE_PAGE: `${rootLocation}/`,
};

const Routes = () => (
  <>
    <Route path={ROUTES.EXAMPLE_PAGE} component={ExamplePage} exact />
  </>
);

export default Routes;
