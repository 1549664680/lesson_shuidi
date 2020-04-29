import { CHANGE_INPUT, ADDITEM, DELETEITEM } from './actionType'

const defaultState = {
  inputValue: 'Write Something',
  list: [
    '早上开会',
    '中午睡觉',
    '晚上嗨皮'
  ]
}
export default (state = defaultState, action) => {
  // console.log(state,action)
  // reducer 里只能接受state ，不能改变state
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADDITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETEITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}