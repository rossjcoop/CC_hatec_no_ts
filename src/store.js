import { createStore } from 'redux'
import reducer from './reducers/reducer'

const store = createStore(reducer)

export default store



///use combineReducers if we decide to use more. RC