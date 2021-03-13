import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import { WAConnectProvider } from './hooks/wa-connect';
import Routes from './routes';

const mainElement = document.createElement('div');

mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <>
      <Router>
        <WAConnectProvider>
          <Routes />
          <GlobalStyles />
          <ToastContainer />
        </WAConnectProvider>
      </Router>
    </>
  );
};

render(<App />, mainElement);
