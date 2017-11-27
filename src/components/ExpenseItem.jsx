import React from 'react';

const ExpenseItem = props => (
  <div>
    <h3>
      {props.description}
    </h3>
    <p>
      {props.amount}
    </p>
  </div>
);

export default ExpenseItem;