import axios from 'axios'
import { GET_STORES, ITEMS_LOADING, SET_ERROR } from './types'

export const getStores = () => dispatch => {
  dispatch(setItemsLoading())
  axios
    .get('/api/stores')
    .then(res => {
      console.log(res.data)
      dispatch({
        type: GET_STORES,
        payload: res.data
      })}
    )
    .catch(err => console.log(err))
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
