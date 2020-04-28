import React, { Component } from 'react';
import propTypes from 'prop-types'
class Xiaojiejieitem extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    // state = {  }
  }
  
  render() { 
    return ( 
    <li onClick={this.handleClick}>{this.props.avname} 为你服务 {this.props.content}</li>
    );
  }
  handleClick(){
    this.props.deleteitem(this.props.index)
  }
}
Xiaojiejieitem.propTypes = {
  index:propTypes.number,
  content:propTypes.string,
  deleteitem:propTypes.func
}
Xiaojiejieitem.defaultProps ={
  avname:'波多野结衣'
}
export default Xiaojiejieitem;