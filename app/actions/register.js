import { setLoading, setSuccess, setFailed } from './processor'
import { RECEIVE_SIGNUP_RESULT } from '../constants'
import { api_user } from '../env'

export const register = (items) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_CREATE_USER'))
		console.log('items action: ', items)
		try {
			const response = await fetch(`${api_user}/api/v1/user/register`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({					
					email_address:items.email_address,
					username:items.username,
					password:items.password
                })
			})
            const data = await response.json()
            await dispatch(receiveSignUp(data))
			await dispatch(setSuccess(true, 'SUCCESS_CREATE_USER'))
      		await dispatch(setLoading(false, 'LOADING_CREATE_USER'))
		} catch (e) {
			console.log('action add error',e)
			dispatch(setFailed(true, 'FAILED_CREATE_USER', e))
			dispatch(setLoading(false, 'LOADING_CREATE_USER'))
		}
	}
}

const receiveSignUp = (data) => {
    return{
      type:  RECEIVE_SIGNUP_RESULT,
      payload: data
    }
  }