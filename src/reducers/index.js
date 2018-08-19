// ./todo-client/src/reducers/index.js
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import *  as appReducer from './appReducer';
import * as todoReducer from './todoReducer';
export default combineReducers({
  appState:appReducer,
  todoState:todoReducer,
  routing
  // More reducers if there are
  // can go here
})