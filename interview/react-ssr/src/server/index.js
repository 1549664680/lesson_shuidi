import express from 'express';
import React from 'react'
import Header from '../components/Header.jsx'
import {renderToString}  from 'react-dom/server'
import {renderRoutes}from 'react-router-config'
import {StaticRouter} from 'react-router-dom'
import Routes from '../Routes'
const app = express();
app.use(express.static('static'))
app.get('*',(req,res)=>{
  // 入口组件 jsx
  const App = (
    <StaticRouter location={req.url}>
      {renderRoutes(Routes)}
    </StaticRouter>
  )
  const htmlStr = renderToString(App)
  // console.log(htmlStr)
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <!-- root reactDom.render -->
    <div id="root">${htmlStr}</div>
    <script src="/index.js"></script>
  </body>
  </html>`)
})

app.listen(3000,()=>{
  console.log('server is runging 3000 port')
})