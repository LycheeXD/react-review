import React from 'react';
import { connect } from 'react-redux';

import { deleteExpense } from '../actions/actionCreators';

const ExpenseItem = props => (
  <div style={{border: 1, borderColor: 'black', borderStyle: 'solid'}}>
    <h3>
      {props.description}
    </h3>
    <p>
      {props.amount}
    </p>

    <button onClick={() => {props.onDeleteExpense(props.id)}}>
      remove
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onDeleteExpense(expenseId) {
    dispatch(deleteExpense(expenseId));
  }
})

export default connect(null, mapDispatchToProps)(ExpenseItem);