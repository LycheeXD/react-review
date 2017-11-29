import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import ReduxTest from './components/ReduxTest';
import FourOhFour from './components/FourOhFour';

const AppRouter = (
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/addexpense" component={AddExpense} />
          <Route path="/reduxtest" component={ReduxTest} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default AppRouter;