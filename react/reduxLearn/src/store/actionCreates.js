import { CHANGE_INPUT, ADDITEM, DELETEITEM, GET_LIST,GET_MY_LIST} from './actionType'
import axios from 'axios'
export const changeInputvalue = (value) =>({
    type: CHANGE_INPUT,
    value
})
export const clickBtn = () =>({
  type: ADDITEM,
})
export const deleteItem = (index) =>({
  type: DELETEITEM,
  index
})
export const getListAction = (data) =>({
  type: GET_LIST,
  data
})

export const getTodoList = ()=>{
  return (dispatch)=>{
    axios.get('https://mock.yonyoucloud.com/mock/6142/todolist/todolist')
    .then((res)=>{
      const data = res.data
      const action = getListAction(data)
      dispatch(action)
    })
  }
}
export const getMyListAction =()=>({
  type:GET_MY_LIST
})