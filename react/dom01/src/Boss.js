import React, { Component } from 'react';
import './style.css'
class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isshow:true
     }
    this.submit = this.submit.bind(this)
  }
  render() { 
    return ( 
      <div>
        <div className={this.state.isshow?"show":"hiden"}>boss级人物- 孙悟空</div>
        <button onClick={this.submit}>召唤boss</button>
      </div>
     );
  }
  submit(){
    console.log(this.state.isshow)
    this.setState({
      isshow:!this.state.isshow
    })
  }
}
 
export default Boss;