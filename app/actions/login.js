import { RECEIVE_LOGIN_RESULT } from '../constants'
import { setLoading, setSuccess, setFailed } from './processor'
import { login_url } from '../env'
import { AsyncStorage } from 'react-native'

//Function Login
export const login = (email, password) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_LOGIN'))
		try {
			const response = await fetch(`${login_url}`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email_address:email, 
					password: password})
			})
			const data = await response.json()
			console.log('data login :', data.status)
			if (data.status == 200) {
				await dispatch(receiveLogin(data))
				await dispatch(saveSession(data))
				await dispatch(setLogged(true))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_LOGIN'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
				
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_LOGIN'))
			}
		} catch (e) {
			dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
			dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', e))
		}
	}
}

const receiveLogin = (data) => {
  return{
    type:  RECEIVE_LOGIN_RESULT,
    payload: data
  }
}

const saveSession = data => {
	return () => {
		AsyncStorage.setItem('session', JSON.stringify(data))
	}
}