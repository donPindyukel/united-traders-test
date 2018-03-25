import { stringValueConstants } from '../constants';

export const stringValueActions = {
  beginExercise,
  timerDecrement,
  pressRightKey,
  pressWrongKey
};

function beginExercise(stringValue) {
  return { type: stringValueConstants.BEGIN_EXERCISE, payload: stringValue }
}

function timerDecrement() {
  return { type: stringValueConstants.TIMER_DEC }
}

function pressRightKey() {
  return { type: stringValueConstants.PRESS_RIGHT_KEY }
}

function pressWrongKey() {
  return { type: stringValueConstants.PRES_WRONG_KEY }
}