import { combineReducers } from 'redux';

import reduxTestReducer from './reduxTestReducer';
import expensesReducer from './expensesReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({
  reduxTestReducer,
  expensesReducer,
  filtersReducer
});

export default rootReducer;