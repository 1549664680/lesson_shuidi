const defailtState = {
  inputValue:'js',
  list:[]
}

export default (state =defailtState,action ) =>{
  if(action.type === 'change_input'){
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === 'change_list'){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  return state
}