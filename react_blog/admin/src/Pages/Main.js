import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from './Login'
import AdminIndex from './AdminIndex'
function Main(){
  return (
    <Router>
      <Route path="/" exact component={Login}/>
      <Route path="/login"  component={Login}/>
      <Route path="/admin"  component={AdminIndex}/>
    </Router>
  )
}

export default Main