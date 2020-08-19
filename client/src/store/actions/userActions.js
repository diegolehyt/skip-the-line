import axios from 'axios'
import { GET_USER, ITEMS_LOADING, CREATE_ITEM, LOGIN, SET_ERROR } from './types'

export const getUser = () => dispatch => {
  dispatch(setItemsLoading())
  axios
    .get('/api/auth/user')
    .then(res => {
      console.log(res.data)
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}

export const createUser = post => dispatch => {
  dispatch(setItemsLoading())
  axios
    .post('/api/auth/register', post)
    .then(res =>
      dispatch({
        type: CREATE_ITEM,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(setError(err.response.data.message))
    })
}

export const loginUser = post => dispatch => {
  dispatch(setItemsLoading())
  axios
    .post('/api/auth/local', post)
    .then(res =>
      dispatch({
        type: LOGIN,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(setError(err.response.data.message))
    })
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
export const setError = error => {
  return {
    type: SET_ERROR,
    payload: error
  }
}
