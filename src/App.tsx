import React from 'react'
import { render } from 'react-dom'

import Connect from './page/Connect'
import Global from './style/global'

const mainElement = document.createElement('div')

mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <Connect />
      <Global />
    </>
  )
}

render(<App />, mainElement)
