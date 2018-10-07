import { combineReducers } from 'redux'

import { loading, success, failed} from './processor'
import { loginResult } from './loginresult'
import { contacts,singleContact } from './home'
import { signupResult } from './signupResult'

const rootReducers = combineReducers({
  loading,
  success,
  failed,
  loginResult,
  contacts,
  singleContact,
  signupResult

})

export default rootReducers