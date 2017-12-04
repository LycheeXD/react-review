import { combineReducers } from 'redux';

import reduxTestReducer from './reduxTestReducer';
import expensesReducer from './expensesReducer';
import searchFilterReducer from './searchFilterReducer';
import sortReducer from './sortReducer';

const rootReducer = combineReducers({
  reduxTestReducer,
  expensesReducer,
  searchFilterReducer,
  sortReducer
});

export default rootReducer;