import { combineReducers } from 'redux';

import reduxTestReducer from './reduxTestReducer';
import expensesReducer from './expensesReducer';
import filtersReducer from './filtersReducer';
import searchFilterReducer from './searchFilterReducer';

const rootReducer = combineReducers({
  reduxTestReducer,
  expensesReducer,
  filtersReducer,
  searchFilterReducer
});

export default rootReducer;