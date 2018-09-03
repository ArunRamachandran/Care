import React, {Component} from 'react';

import '../../scss/header.scss';
import { Grid, Segment } from 'semantic-ui-react';

export default class Header extends Component {

  render() {
    return (
      <div className="nav-warpper">
        <div className="app-title">
          <span> Care.</span>
        </div>

        <div className="app-help">
          <p> Need help ?</p>
        </div>

        <div className="app-login">
          <p> Login </p>
        </div>
      </div>
    );
  }
}
