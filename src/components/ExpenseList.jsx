import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ExpenseItem from './ExpenseItem';

const listOfExpenses = expenses => (
  _.map(expenses, eachExpense => (
    <ExpenseItem
      key={eachExpense.description}
      description={eachExpense.description}
      amount={eachExpense.amount}
    />
  ))
);


const ExpenseList = props => (
  <div>
    <h3>
      expenses: {props.expenses.length}
    </h3>

    <div>
      {listOfExpenses(props.expenses)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  expenses: state.expensesReducer
});

export default connect(mapStateToProps)(ExpenseList);