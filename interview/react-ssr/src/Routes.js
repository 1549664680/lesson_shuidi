import React from 'react'
import indexRoute from './indexRoute'
import Home from './pages/home/index.jsx'
import Login from './pages/login/index.jsx'
export default [
  {
    path:'/',
    component:indexRoute,
    routes:[
    {
      path:'/', 
      exact:true,
      component:Home
    },
    {
      path:'/login',
      component:Login
    }
  ]
  }
]