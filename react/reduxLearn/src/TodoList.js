import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from './store'
import {changeInputvalue,clickBtn,deleteItem} from './store/actionCreates'
class TodoList extends Component {
constructor(props) {
  super(props);
  this.state = store.getState()
  this.changeInputvalue = this.changeInputvalue.bind(this)
  this.clickBtn = this.clickBtn.bind(this)
  this.storeChange = this.storeChange.bind(this)
  this.deleteItem = this.deleteItem.bind(this)
  store.subscribe(this.storeChange)
}
render() {
  return (
    <TodoListUI
    inputValue = {this.state.inputValue}
    changeInputvalue={this.changeInputvalue}
    clickBtn={this.clickBtn}
    list={this.state.list}
    deleteItem ={this.deleteItem}
    />
  );
}
storeChange() {
  this.setState(store.getState())
}
changeInputvalue(e) {
  const action = changeInputvalue(e.target.value)
  store.dispatch(action)
}
clickBtn() {
  if(document.getElementById('input').value.trim() === ''){
    alert('不能为空！')
  }else{
    const action = clickBtn()
    store.dispatch(action)
  }
}

deleteItem(index) {
  const action = deleteItem(index)
  store.dispatch(action)
}
} 
export default TodoList;