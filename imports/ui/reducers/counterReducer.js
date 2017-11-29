import { SET_COUNTER_COUNT } from '../constants/actionTypes.js';
import { CounterState } from '../constants/models.js';

/* eslint-disable no-use-before-define */
const counterReducer = (state = CounterState, action) => {
  switch (action.type) {
  case SET_COUNTER_COUNT:
    return handleSetCounterCount(state, action.payload);
  default:
    return state;
  }
};
/* eslint-enable no-use-before-define */


function handleSetCounterCount(state, payload) {
  const newState = state.set('count', payload.count);
  return newState;
}

export default counterReducer;
