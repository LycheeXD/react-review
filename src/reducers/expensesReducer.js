import { ON_ADD_EXPENSE } from '../actions/actions';

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case ON_ADD_EXPENSE :
      return [...state, action.payload];
    default:
      return state;
  }
};

export default expensesReducer;