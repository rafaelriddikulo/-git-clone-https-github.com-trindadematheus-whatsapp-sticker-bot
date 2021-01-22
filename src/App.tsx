import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/global'
import 'react-toastify/dist/ReactToastify.css'

import { SocketProvider } from './hooks/socket';
import Routes from './routes';

const mainElement = document.createElement('div')

mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <Router>
        <SocketProvider>
          <Routes />
          <GlobalStyles />
          <ToastContainer />
        </SocketProvider>
      </Router>
    </>
  )
}

render(<App />, mainElement)
