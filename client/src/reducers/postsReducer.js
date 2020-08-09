import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  DELETE_POST,
  ITEMS_LOADING
} from '../actions/types'

const initState = {
  posts: [],
  loading: false
}
export default (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload, loading: false }
    case GET_POST:
      return { ...state }
    case CREATE_POST:
      return { ...state, posts: [action.payload, ...state.posts] }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      }
    case ITEMS_LOADING:
      return { ...state, loading: true }
    default:
      return { ...state }
  }
}
