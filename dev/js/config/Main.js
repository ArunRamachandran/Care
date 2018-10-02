import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';

// The Roster component matches one of two different routes
// depending on the full pathname
const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/Login' component={Login}/>
  </Switch>
)

export default Main;
