import {
  GET_STORES,
  ITEMS_LOADING,
  SET_ERROR
} from '../actions/types'

const initState = {
  stores: []
}
export default (state = initState, action) => {
  switch (action.type) {
    case GET_STORES:
      return { ...state, stores: action.payload, loading: false }
    case ITEMS_LOADING:
      return { ...state, loading: true }
    case SET_ERROR:
      return { ...state, error: action.payload, loading: false }
    default:
      return { ...state }
  }
}
