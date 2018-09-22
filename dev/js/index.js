import babel from "babel-core/register";
import babelPolyfil from "babel-polyfill";
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';

render((
  <BrowserRouter>
    <Home />
  </BrowserRouter>
), document.getElementById('root'));
