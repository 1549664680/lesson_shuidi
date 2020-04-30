import { CHANGE_INPUT, ADDITEM, DELETEITEM ,GET_LIST} from './actionType'

const defaultState = {
  inputValue: 'Write Something',
  list: [
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
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data.data.list
    return newState
  }
  return state
}