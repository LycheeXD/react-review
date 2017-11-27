import { ON_ADD_EXPENSE } from '../actions/actions';

const initialState = [{
  description: 'rent',
  amount: 1500
}, {
  description: 'credit card',
  amount: 1000
}];

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_ADD_EXPENSE :
      return [...state, action.payload];
    default:
      return state;
  }
};

export default expensesReducer;