// import { ON_INPUT_CHANGE } from '../actions/actions';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    // case ON_INPUT_CHANGE :
    //   return action.payload;
    default:
      return state;
  }
};

export default filtersReducer;