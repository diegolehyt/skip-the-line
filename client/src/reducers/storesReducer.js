import {
  GET_ITEMS,
  ITEMS_LOADING,
  SET_ERROR,
  UPDATE_ITEM,
  DELETE_ITEM
} from '../actions/types'

const initState = {
  stores: []
}
export default (state = initState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, stores: action.payload, loading: false }
    case ITEMS_LOADING:
      return { ...state, loading: true }
    case SET_ERROR:
      return { ...state, error: action.payload, loading: false }
    case UPDATE_ITEM:
      return {
        ...state,
        stores: state.stores.map(store => {
          
          return store._id === action.payload._id ? action.payload : store
        })
      }
    case DELETE_ITEM:
      return {
        ...state,
        stores: state.stores.map(store => {
          
          return store._id === action.payload._id ? action.payload : store
        })
      }
    default:
      return { ...state }
  }
}
