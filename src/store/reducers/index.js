import { combineReducers } from 'redux';

import { stringValue } from './stringValue.reducer';

const rootReducer = combineReducers({
  stringValue,
});

export default rootReducer;