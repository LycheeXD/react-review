import React from 'react';
import { connect } from 'react-redux';

import { sortExpensesBy } from '../actions/actionCreators';

const SortBy = props => (
  <div>
    <select value={props.sortBy} onChange={props.onSortByOptionChange}>
      <option value="description">Description</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = state => ({
  sortBy: state.sortReducer
});

const mapDispatchToProps = dispatch => ({
  onSortByOptionChange(event) {
    dispatch(sortExpensesBy(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortBy);