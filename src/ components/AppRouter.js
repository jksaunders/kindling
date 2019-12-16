import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ExamplePage } from './pages';

const { rootLocation = '' } = process.env;

const ROUTES = {
  EXAMPLE_PAGE: `${rootLocation}/`,
};

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const AppRouter = ({ children }) => (
  <Router>
    {children}
    <Route path={ROUTES.EXAMPLE_PAGE} component={ExamplePage} exact />
  </Router>
);

AppRouter.propTypes = propTypes;
AppRouter.defaultProps = defaultProps;
AppRouter.ROUTES = ROUTES;

export default AppRouter;
