import React from 'react'
import {renderRoutes}from 'react-router-config'
function indexRoute(props){
  const {route} = props
  return (
    <div>
      indexRoute
      {renderRoutes(route.routes)}
      </div>
  )
}

export default indexRoute