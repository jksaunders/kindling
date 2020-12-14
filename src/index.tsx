import React, { FC } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Layout } from '@jksaunders/bonfire';
import { Routes } from './components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import favicons from '../assets/favicons';
// import { LocalStoresRoot } from './stores';

const AppWrappers: FC = ({ children }) => (
  <Router>
    {/* <LocalStoresRoot> */}
    {/* <Layout height="100vh" width="100vw"> */}
    {children}
    {/* </Layout> */}
    {/* </LocalStoresRoot> */}
  </Router>
);

render(
  <AppWrappers>
    <Routes />
  </AppWrappers>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
