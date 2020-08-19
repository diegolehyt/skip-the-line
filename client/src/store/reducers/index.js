import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'
import storesReducer from './storesReducer'

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  stores: storesReducer
})
