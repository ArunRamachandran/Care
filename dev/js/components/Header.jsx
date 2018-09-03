import React, {Component} from 'react';

import '../../scss/header.scss';
import { Grid, Segment } from 'semantic-ui-react';

export default class Header extends Component {

  render() {
    return (
      <Grid columns='equal' className="nav-warpper">
        <Grid.Column width={10}>
          <span className="app-title">Care.</span>
        </Grid.Column>

        <Grid.Column width={2}>
          <p className="app-help">Need help ?</p>
        </Grid.Column>

        <Grid.Column width={2}>
          <p className="app-login">Login</p>
        </Grid.Column>
      </Grid>
    );
  }
}
