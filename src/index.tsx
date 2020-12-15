import React, { FC } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Layout } from '@jksaunders/bonfire';
import { Routes } from './components';
import { LocalStoresRoot } from './stores';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import favicons from '../assets/favicons';

const AppWrappers: FC = ({ children }) => (
  <Router>
    <LocalStoresRoot>
      {/* <Layout height="100vh" width="100vw"> */}
      {children}
      {/* </Layout> */}
    </LocalStoresRoot>
  </Router>
);

render(
  <AppWrappers>
    <Routes />
  </AppWrappers>,
  document.getElementById('root')
);
