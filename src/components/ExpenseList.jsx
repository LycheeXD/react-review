import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ExpenseItem from './ExpenseItem';

const listOfExpenses = (expenses, searchInput) => {
  const filteredExpenseList = filterExpenses(expenses, searchInput);

  return _.map(filteredExpenseList, eachExpense => (
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
      if(_.startsWith(eachDescriptionWord, searchInput)) {
        return true;
      }
    });
  });
};


const ExpenseList = props => (
  <div>
    <h3>
      expenses: {props.expenses.length}
    </h3>

    <div>
      {listOfExpenses(props.expenses, props.searchInput)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  expenses: state.expensesReducer,
  searchInput: state.searchFilterReducer
});

export default connect(mapStateToProps)(ExpenseList);