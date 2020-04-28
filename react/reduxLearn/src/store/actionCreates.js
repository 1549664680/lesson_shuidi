import { CHANGE_INPUT, ADDITEM, DELETEITEM } from './actionType'

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