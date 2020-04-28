import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import {changeInputvalue,clickBtn,deleteItem} from './store/actionCreates'
class TodoList extends Component {
constructor(props) {
  super(props);
  this.state = store.getState()
  this.changeInputvalue = this.changeInputvalue.bind(this)
  this.clickBtn = this.clickBtn.bind(this)
  this.storeChange = this.storeChange.bind(this)
  store.subscribe(this.storeChange)
}
render() {
  return (
    <div style={{ margin: '10px' }}>
      <div>
        <Input
          placeholder={this.state.inputVlue}
          style={{ width: '250px', marginRight: '10px' }}
          onChange={this.changeInputvalue}
          id = 'input'
          value = {this.state.inputVlue}
        />
        <Button
          type="primary"
          onClick={this.clickBtn}
        >增加</Button>
      </div>
      <div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(Item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{Item}</List.Item>)}
        />
      </div>
    </div>
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