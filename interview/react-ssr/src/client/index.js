import React from 'react'
import ReactDom from 'react-dom';
import Header from '../components/Header.jsx'
// SPA
// ReactDom.render(<Header/>,document.getElementById('root'))
// SSR 不需要render 
ReactDom.hydrate(<Header/>,document.getElementById('root'))