import React from 'react';

import AddExpenseForm from './AddExpenseForm';
import SearchFilter from './SearchFilter';
import SortBy from './SortBy';
import ExpenseList from './ExpenseList';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    
    <div>
      <h4>
        Add Expense:
      </h4>

      <AddExpenseForm />
    </div>

    <div>
      <h4>
        Search Expense:
      </h4>

      <SearchFilter />
    </div>
    
    <SortBy />

    <ExpenseList />
  </div>
);

export default Dashboard;