import { RECEIVE_LOGIN_RESULT } from '../constants'

export const loginResult = (state = [], action) => {
  switch(action.type){
    case RECEIVE_LOGIN_RESULT:
      return action.payload
    default:
      return state
  }
}