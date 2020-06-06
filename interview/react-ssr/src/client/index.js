import React from 'react'
import ReactDom from 'react-dom';
import Header from '../components/Header.jsx'
import {BrowserRouter}from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from '../Routes'
// SPA
// ReactDom.render(<Header/>,document.getElementById('root'))
// SSR 不需要render 
const App = function(){
  return (
      <BrowserRouter>
    {/* <Route>
    </Route> */}
    {renderRoutes(routes)}
  </BrowserRouter>
  )
  }
ReactDom.hydrate(<App/>,document.getElementById('root'))