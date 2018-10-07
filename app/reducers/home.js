
import { RECEIVE_CONTACT, RECEIVE_SINGLE_CONTACT } from '../constants'

export const contacts = (state = [], action) => {
  switch(action.type){
    case RECEIVE_CONTACT:
      return action.payload
    default:
      return state
  }
}

export const singleContact = ( state = [], action ) => {
  switch(action.type){
    case RECEIVE_SINGLE_CONTACT:
      return action.payload
    default:
      return state
  }
}