import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Header from './Header';
import ReduxTest from './ReduxTest';
import FourOhFour from './FourOhFour';

const Home = () => (
  <div>
    <div>
      <Link to="/test">test</Link>
    </div>

    <div>
      <Link to="/reduxtest">reduxtest</Link>
    </div>
  </div>
);

const TestRoute = () => (
  <div>
    route success
    <Link to="/">home</Link>
  </div>
);

const AppRouter = (
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/test" component={TestRoute} />
          <Route path="/reduxtest" component={ReduxTest} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default AppRouter;