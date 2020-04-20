import React,{Component,Fragment} from 'react'
import './style.css'
import Xioajiejieitem from './Xiaojiejieitem'


class Xiaojiejie extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue:'',
      list:[
        '精油推背',
        '头部按摩'
      ]
    }
  }
  render(){
    return (
      <Fragment>
        <div>
          <label htmlFor="additem">增加服务</label>
          <input 
          id="additem"
          className="input" 
          value={this.state.inputValue} 
          onChange={this.inputChange.bind(this)}
          ref = {(input)=>this.input = input}
          />
          <button onClick={this.addlist.bind(this)}>增加服务</button>
        </div>
        <ul ref = {(ul) =>this.ul = ul}>
          {/* {this.state.list.map((item,index) => {
            return <li 
            key={index+item} 
            onClick={this.deleteitem.bind(this,index)}
            dangerouslySetInnerHTML={{__html:item}}
            > 
           </li> 
          })} */}
          {
          this.state.list.map((item,index) => {
            return(
               <Xioajiejieitem 
               key={item+index}
               index = {index}
               deleteitem={this.deleteitem.bind(this)}
               content={item}/>
               )
          })
          }
        </ul>
        <h2>当前选择服务数量:{this.state.list.length}</h2>
      </Fragment>
    )
  }
  inputChange(e){
    this.setState({
      // inputValue : e.target.value
      // ref
      inputValue :this.input.value
    })
  }
  addlist(){
    if(this.state.inputValue){
      this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
      //setState 需要时间
    },()=>{return this.ul.querySelectorAll('li').length})
    }else{
      alert('请输入服务！')
    }
    
  }
  deleteitem(index){
    let list = this.state.list
    list.splice(index,1)
    //坑 不能直接操作state中的值
    this.setState({
      list:list
      // list:this.state.list.splice(index,1) 错
    })
  }
  
}
export default Xiaojiejie