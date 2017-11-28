import React from 'react';

import SearchFilter from './SearchFilter';
import ExpenseList from './ExpenseList';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <SearchFilter />
    <ExpenseList />
  </div>
);

export default Dashboard;