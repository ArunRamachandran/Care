import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

// The Roster component matches one of two different routes
// depending on the full pathname
const routes = () => (
  <Switch>
    <Route exact path='/visitor' component={Home}/>
  </Switch>
)

export default routes;
