import {takeEvery,put} from 'redux-saga/effects'
import {GET_MY_LIST}from './actionType'
import axios from 'axios'
import {getListAction} from './actionCreates'
function* mySaga(){
  yield takeEvery(GET_MY_LIST,getList)
}
function* getList(){
  // axios.get('https://mock.yonyoucloud.com/mock/6142/todolist/todolist')
  // .then((res)=>{
  //   const data = res.data
  //   const action = getListAction(data)
  //   put(action)
  // })
  const res = yield axios.get('https://mock.yonyoucloud.com/mock/6142/todolist/todolist')
  const action = getListAction(res.data)
  yield put(action)
}
export default mySaga