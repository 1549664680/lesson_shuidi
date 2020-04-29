import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
const TodoListUI = (props)=>{
  return (
    <div style={{ margin: '10px' }}>
      <div>
        <Input
          placeholder={props.inputValue}
          style={{ width: '250px', marginRight: '10px' }}
          onChange={props.changeInputvalue}
          id='input'
          value={props.inputValue}
        />
        <Button
          type="primary"
          onClick={props.clickBtn}
        >增加</Button>
      </div>
      <div>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => { props.deleteItem(index) }}>
              {item}
            </List.Item>)}
        />
      </div>
    </div>
  );
}

export default TodoListUI;