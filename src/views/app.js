import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../services/histroy';
import Home from './pages/home'
import Table from './pages/table'

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/table/:id" exact component={Table} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;