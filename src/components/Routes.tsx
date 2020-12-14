import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { ExamplePage } from './pages';

const rootLocation = process.env.rootLocation || '';

const ROUTES = {
  EXAMPLE_PAGE: `${rootLocation}/`,
};

const Routes: FC = () => (
  <>
    <Route path={ROUTES.EXAMPLE_PAGE} component={ExamplePage} exact />
  </>
);

export default Routes;
