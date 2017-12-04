import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ExpenseItem from './ExpenseItem';

const listOfExpenses = (expenses, searchInput, sortBy) => {
  const filteredExpenseList = filterExpenses(expenses, searchInput);

  const sortedExpenseList = _.orderBy(filteredExpenseList, sortBy, 'asc');

  return _.map(sortedExpenseList, eachExpense => (
    <ExpenseItem
      key={eachExpense.id}
      id={eachExpense.id}
      description={eachExpense.description}
      amount={eachExpense.amount}
    />
  ));
};

// display only expenses that starts with the search input
const filterExpenses = (expenses, searchInput) => {
  return _.filter(expenses, eachExpense => {
    const eachExpenseDescriptionWordArray = eachExpense.description.split(' ');

    return _.some(eachExpenseDescriptionWordArray, eachDescriptionWord => {
        return _.startsWith(eachDescriptionWord, searchInput);
    });
  });
};

const ExpenseList = props => (
  <div>
    <h3>
      expenses: {props.expenses.length}  |  sort by: {props.sortBy}
    </h3>

    <div>
      {listOfExpenses(props.expenses, props.searchInput, props.sortBy)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  expenses: state.expensesReducer,
  searchInput: state.searchFilterReducer,
  sortBy: state.sortReducer
});

export default connect(mapStateToProps)(ExpenseList);