import _ from 'lodash';

import { ON_ADD_EXPENSE,
         ON_DELETE_EXPENSE } from '../actions/actions';
import uuid from 'uuid';

const initialState = [{
  id: uuid(),
  description: 'rent',
  amount: 1500
}, {
  id: uuid(),
  description: 'credit card bill',
  amount: 2000
}, {
  id: uuid(),
  description: 'utility bill',
  amount: 500
}, {
  id: uuid(),
  description: 'student loan',
  amount: 3000
}];

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_ADD_EXPENSE :
      return [...state, action.payload];

    case ON_DELETE_EXPENSE: {
      var expenseListAfterDelete = _.filter(state, eachExpense => (
        eachExpense.id !== action.payload
      ));

      return expenseListAfterDelete;
    }

    default:
      return state;
  }
};

export default expensesReducer;