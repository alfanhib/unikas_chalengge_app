import { RECEIVE_SIGNUP_RESULT } from '../constants'

export const signupResult = (state = [], action) => {
  switch(action.type){
    case RECEIVE_SIGNUP_RESULT:
      return action.payload
    default:
      return state
  }
}