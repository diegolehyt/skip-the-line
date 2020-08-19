import axios from 'axios'
import {
  GET_ITEMS,
  GET_ITEM,
  CREATE_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from './types'

export const getPosts = () => dispatch => {
  dispatch(setItemsLoading())
  axios
    .get('/api/posts')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}
export const getPost = () => {
  return {
    type: GET_ITEM
  }
}
export const createPost = post => dispatch => {
  axios
    .post('/api/posts', post)
    .then(res =>
      dispatch({
        type: CREATE_ITEM,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}
export const deletePost = id => dispatch => {
  axios.delete(`/api/posts/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
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
