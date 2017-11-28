import { ON_INPUT_CHANGE } from './actions';
import { ON_ADD_EXPENSE } from './actions';
import { ON_SEARCH_FILTER_CHANGE } from './actions';

export const setInputValue = inputValue => ({
    type: ON_INPUT_CHANGE,
    payload: inputValue
  }
);

export const addExpense = inputExpense => ({
    type: ON_ADD_EXPENSE,
    payload: inputExpense
  }
);

export const setSearchFilterValue = searchFilterInputValue => ({
  type: ON_SEARCH_FILTER_CHANGE,
  payload: searchFilterInputValue
});
