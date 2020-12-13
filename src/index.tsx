import React, { FC } from 'react';
import { render } from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Layout } from '@jksaunders/bonfire';
// import { Routes } from './components';
// eslint-disable-next-line no-unused-vars
// import favicons from '../assets/favicons';
// import { LocalStoresRoot } from './stores';

// eslint-disable-next-line react/prop-types
// const AppWrappers = ({ children }) => (
//   <Router>
//     <LocalStoresRoot>
//       <Layout height="100vh" width="100vw">
//         {children}
//       </Layout>
//     </LocalStoresRoot>
//   </Router>
// );

// ReactDOM.render(
//   <AppWrappers>
//     <Routes />
//   </AppWrappers>,
//   // eslint-disable-next-line no-undef
//   document.getElementById('root')
// );

const App: FC = () => <div>hi</div>;

render(<App />, document.getElementById('root'));
