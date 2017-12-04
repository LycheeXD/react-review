import { ON_SORT_CHANGE } from '../actions/actions';

const sortReducer = (state = 'amount', action) => {
  switch (action.type) {
    case ON_SORT_CHANGE :
      return action.payload;
    default:
      return state;
  }
};

export default sortReducer;