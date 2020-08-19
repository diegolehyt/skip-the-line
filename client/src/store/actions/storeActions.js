import axios from 'axios'
import {
  GET_ITEMS,
  GET_ITEM,
  ITEMS_LOADING,
  SET_ERROR,
  UPDATE_ITEM,
  DELETE_ITEM
} from './types'

export const getStores = () => dispatch => {
  dispatch(setItemsLoading())
  axios
    .get('/api/stores')
    .then(res => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}
export const getStore = id => dispatch => {
  dispatch(setItemsLoading())
  axios
    .get(`/api/stores/${id}`)
    .then(res => {
      dispatch({
        type: GET_ITEM,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}

export const updateStore = id => dispatch => {
  dispatch(setItemsLoading())
  axios.patch(`/api/stores/${id}`).then(res => {
    console.log(res.data)
    dispatch({
      type: UPDATE_ITEM,
      payload: res.data
    })
  })
}

export const deleteStore = id => dispatch => {
  dispatch(setItemsLoading())
  axios.delete(`/api/stores/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: res.data
    })
  )
  return {
    type: DELETE_ITEM,
    payload: id
  }
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
