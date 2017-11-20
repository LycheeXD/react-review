import { ON_INPUT_CHANGE } from './actions';
import { ON_ADD_EXPENSE } from './actions';

export const setInputValue = (inputValue) => {
  return {
    type: ON_INPUT_CHANGE,
    payload: inputValue
  };
};

export const addExpense = (inputExpense) => {
  return {
    type: ON_ADD_EXPENSE,
    payload: inputExpense
  };
}