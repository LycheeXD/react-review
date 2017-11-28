import { ON_SEARCH_FILTER_CHANGE } from '../actions/actions';

const filtersReducer = (state = '', action) => {
  switch (action.type) {
    case ON_SEARCH_FILTER_CHANGE :
      return action.payload;
    default:
      return state;
  }
};

export default filtersReducer;