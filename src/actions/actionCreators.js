import { ON_INPUT_CHANGE } from './actions';

export const setInputValue = (inputValue) => {
  return {
    type: ON_INPUT_CHANGE,
    payload: inputValue
  };
};