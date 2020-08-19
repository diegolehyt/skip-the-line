import {
  GET_ITEMS,
  GET_ITEM,
  CREATE_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from '../actions/types'

const initState = {
  posts: [],
  loading: false
}
export default (state = initState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, posts: action.payload, loading: false }
    case GET_ITEM:
      return { ...state }
    case CREATE_ITEM:
      return { ...state, posts: [action.payload, ...state.posts] }
    case DELETE_ITEM:
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
