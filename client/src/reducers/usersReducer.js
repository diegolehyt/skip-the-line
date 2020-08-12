import {
  GET_ITEM,
  CREATE_ITEM,
  ITEMS_LOADING,
  LOGIN,
  SET_ERROR
} from '../actions/types'

const initState = {
  user: {}
}
export default (state = initState, action) => {
  switch (action.type) {
    case GET_ITEM:
      return { ...state, user: action.payload, loading: false }
    case CREATE_ITEM:
      return { ...state, user: action.payload, loading: false }
    case LOGIN:
      return { ...state, user: action.payload, loading: false }
    case ITEMS_LOADING:
      return { ...state, loading: true }
    case SET_ERROR:
      return { ...state, error: action.payload, loading: false }
    default:
      return { ...state }
  }
}
