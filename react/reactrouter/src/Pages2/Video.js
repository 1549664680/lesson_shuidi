import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Redirect} from 'react-router-dom'
import ReactPage from './video/ReactPage'
import Flutter from './video/Flutter'
import Vue from './video/Vue'
import './Video.css'
class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Redirect to="/video/reacpage"/>
        <div className="topNav">
          <ul>
            <li><Link to="/video/reacpage">react教程</Link></li>
            <li><Link to="/video/flutter">Flutter教程</Link></li>
            <li><Link to="/video/vue">Vue教程</Link></li>
          </ul>
        </div>
        <div className="videocontent">
          <div><h3>视频教程</h3></div>
          <Route path="/video/reacpage" component={ReactPage}></Route>
          <Route path="/video/flutter" component={Flutter}></Route>
          <Route path="/video/vue" component={Vue}></Route>
        </div>
      </div>
    );
  }
}

export default Video;