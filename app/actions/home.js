import { RECEIVE_CONTACT,RECEIVE_SINGLE_CONTACT } from '../constants'
import { setLoading, setSuccess, setFailed } from './processor'
import { api_contact } from '../env'

//Function 
export const fetchContact = (id, accessToken) => {
    console.log('data id', id)
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_CONTACT'))
		try {
			const response = await fetch(`${api_contact}/api/v1/contacts/${id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization:accessToken
				}
			})
			const data = await response.json()
			console.log('data login :', data.status)
				await dispatch(receiveContact(data.data))
				await dispatch(setLogged(true))
				await dispatch(setSuccess(true, 'SUCCESS_FETCH_CONTACT'))
				await dispatch(setLoading(false, 'LOADING_FETCH_CONTACT'))
		} catch (e) {
			dispatch(setLoading(false, 'LOADING_FETCH_CONTACT'))
			dispatch(setFailed(true, 'FAILED_FETCH_CONTACT', e))
		}
	}
}

const receiveContact = (data) => {
  return{
    type:  RECEIVE_CONTACT,
    payload: data
  }
}

export const makeContact = (id, accessToken, items) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_CREATE_CONTACT'))
		console.log('items action: ', items)
		try {
			const response = await fetch(`${api_contact}/api/v1/user/contact/upload`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                },
                body: JSON.stringify({					
					name:items.nama,
					address:items.alamat,
					gender:items.gender,
					status:items.status,
					user_id:id
                })
			})
			const data = await response.json()
			await dispatch(setSuccess(true, 'SUCCESS_CREATE_CONTACT'))
      		await dispatch(setLoading(false, 'LOADING_CREATE_CONTACT'))
		} catch (e) {
			console.log('action add error',e)
			dispatch(setFailed(true, 'FAILED_CREATE_CONTACT', e))
			dispatch(setLoading(false, 'LOADING_CREATE_CONTACT'))
		}
	}
}

export const editContact = (id, accessToken, items) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_EDIT_CONTACT'))
		console.log('items action: ', items)
		try {
			const response = await fetch(`${api_contact}/api/v1/user/contact/edit/${id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                },
                body: JSON.stringify({					
					name:items.nama,
					address:items.alamat,
					gender:items.gender,
					status:items.status,
                })
			})
			const data = await response.json()
			await dispatch(setSuccess(true, 'SUCCESS_EDIT_CONTACT'))
      		await dispatch(setLoading(false, 'LOADING_EDIT_CONTACT'))
		} catch (e) {
			console.log('action add error',e)
			dispatch(setFailed(true, 'FAILED_EDIT_CONTACT', e))
			dispatch(setLoading(false, 'LOADING_EDIT_CONTACT'))
		}
	}
}

export const SingleContact = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_SINGLE_CONTACT'))
		try {
			const response = await fetch(`${api_contact}/api/v1/contact/${id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization:accessToken
				}
			})
			const data = await response.json()
				await dispatch(receiveSingleContact(data.data))
				await dispatch(setSuccess(true, 'SUCCESS_FETCH_SINGLE_CONTACT'))
				await dispatch(setLoading(false, 'LOADING_FETCH_SINGLE_CONTACT'))
		} catch (e) {
			dispatch(setLoading(false, 'LOADING_FETCH_SINGLE_CONTACT'))
			dispatch(setFailed(true, 'FAILED_FETCH_SINGLE_CONTACT', e))
		}
	}
}

const receiveSingleContact = (data) => {
  return{
    type:  RECEIVE_SINGLE_CONTACT,
    payload: data
  }
}



export const deleteContact = (id, accessToken) => {
    console.log('data id', id)
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_DELETE_CONTACT'))
		try {
			const response = await fetch(`${api_contact}/api/v1/user/contact/delete/${id}`, {
				method: 'DELETE',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization:accessToken
				}
			})
			const data = await response.json()
			console.log('data login :', data.status)
				await dispatch(setSuccess(true, 'SUCCESS_DELETE_CONTACT'))
				await dispatch(setLoading(false, 'LOADING_DELETE_CONTACT'))
		} catch (e) {
			dispatch(setLoading(false, 'LOADING_DELETE_CONTACT'))
			dispatch(setFailed(true, 'FAILED_DELETE_CONTACT', e))
		}
	}
}
