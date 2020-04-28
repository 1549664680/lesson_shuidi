import React, { Component } from 'react';
import './style.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isshow: true
    }
    this.submit = this.submit.bind(this)
  }
  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.isshow}
          timeout={2000}
          classNames="boss-Text"
          unmountOnExit
        ><div>boss级人物- 孙悟空</div></CSSTransition>
        <button onClick={this.submit}>召唤boss</button>
      </div>
    );
  }
  submit() {
    console.log(this.state.isshow)
    this.setState({
      isshow: !this.state.isshow
    })
  }
}

export default Boss;