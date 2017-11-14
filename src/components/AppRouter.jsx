import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Header from './Header';
import FourOhFour from './FourOhFour';

const Home = () => (
  <div>
    <Link to="/test">test</Link>
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
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/test" component={TestRoute} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;