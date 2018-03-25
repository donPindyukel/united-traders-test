import { stringValueConstants } from '../constants';

const initialState = {
  array: [],
  mistake: false,
  timeRemain: 60,
  timePass: 0,
  stats: 0,
  strLength: 0,
  mistakes: 0,
};

export function stringValue(state = initialState, action) {
  switch (action.type) {
    case stringValueConstants.BEGIN_EXERCISE: {
      return {...state, ...initialState, array:[...action.payload], strLength: action.payload.length };
    }
    case stringValueConstants.TIMER_DEC: {
      return {...state, timeRemain: state.timeRemain - 1, timePass: state.timePass + 1};
    }
    case stringValueConstants.PRESS_RIGHT_KEY: {
      return {...state, array: [...state.array.slice(1)], stats: state.stats + 1, mistake: false}
    }
    case stringValueConstants.PRES_WRONG_KEY: {
      return {...state, mistakes: state.mistakes + 1, mistake: true }
    }
    default: return state
  }
}