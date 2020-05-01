import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Redirect} from 'react-router-dom'
import money from './workplace/Money'
import Getup from './workplace/Getup'
import './Video.css'
class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Redirect to="/workplace/money/"/>
        <div className="topNav">
          <ul>
            <li><Link to="/workplace/money/">程序员加薪秘籍</Link></li>
            <li><Link to="/workplace/getup/">早起秘籍</Link></li>
          </ul>
        </div>
        <div className="videocontent">
          <div><h3>职场软技能</h3></div>
          <Route path="/workplace/money/" component={money}></Route>
          <Route path="/workplace/getup/" component={Getup}></Route>
        </div>
      </div>
    );
  }
}

export default Video;