import { ON_INPUT_CHANGE } from '../actions/actions';

const reduxTestReducer = (state = '', action) => {
  switch (action.type) {
    case ON_INPUT_CHANGE :
      return action.payload;
    default:
      return state;
  }
};

export default reduxTestReducer;