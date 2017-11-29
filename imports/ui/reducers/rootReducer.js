import { combineReducers } from 'redux-immutable';
import counterReducer from './counterReducer.js';

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
