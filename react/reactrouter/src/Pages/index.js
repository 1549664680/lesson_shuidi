import React, { Component } from 'react';
import {Redirect,Link} from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[
        {
          cid:123,
          title:'js'
        },
        {
          cid:456,
          title:'go'
        },
        {
          cid:789,
          title:'java'
        },
      ]
     }
     this.props.history.push("/home/")
  }
  render() { 
    return ( 
    <div>
      {/* <Redirect to='/home/'/> */}
      JSPANG
      <ul>
        {this.state.list.map((item,index)=>{
         return (
         <li key={index}>
           <Link to={'/list/'+item.cid}>
           {item.title}
           </Link>
           </li>
         )
        })}
      </ul>
    </div> 
    );
  }
}
 
export default Index;