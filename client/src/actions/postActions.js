import axios from 'axios'
import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  DELETE_POST,
  ITEMS_LOADING
} from './types'

export const getPosts = () => dispatch => {
  dispatch(setItemsLoading())
  axios
    .get('/api/posts')
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}
export const getPost = () => {
  return {
    type: GET_POST
  }
}
export const createPost = post => dispatch => {
  axios
    .post('/api/posts', post)
    .then(res =>
      dispatch({
        type: CREATE_POST,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}
export const deletePost = id => dispatch => {
  axios.delete(`/api/posts/${id}`).then(res =>
    dispatch({
      type: DELETE_POST,
      payload: id
    })
  )
  return {
    type: DELETE_POST,
    payload: id
  }
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
