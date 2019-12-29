import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from '@jksaunders/bonfire';
import { AppRouter } from './ components';
// eslint-disable-next-line no-unused-vars
import favicons from '../assets/favicons';

ReactDOM.render(
  <Layout height="100vh" width="100vw">
    <AppRouter />
  </Layout>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
