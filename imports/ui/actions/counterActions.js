import { SET_COUNTER_COUNT } from '../constants/actionTypes.js';

/* eslint-disable import/prefer-default-export */

export const setCounterCount = (count) => ({
  type: SET_COUNTER_COUNT,
  payload: { count },
});
