import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FourOhFour from './components/FourOhFour';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Expenses = () => (
  <div>
    test
  </div>
);

const Create = () => (
  <div>
    route success
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Expenses} exact />
        <Route path="/create" component={Create} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
    

  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
