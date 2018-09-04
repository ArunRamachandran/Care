import React, {Component} from 'react';

import '../../scss/header.scss';
import { Grid, Button } from 'semantic-ui-react';

export default class Header extends Component {

  render() {
    return (
      <Grid columns='equal' className="nav-warpper">
        <Grid.Column width={10} style={{'padding-top': '0'}}>
          <p className="app-title">Care.</p>
        </Grid.Column>

        <Grid.Column width={2} className="app-help-wrapper">
          {/*<p className="app-help">Need help ?</p>*/}
           <Button icon='help' label={{ as: 'a', basic: true, content: 'Need help ?' }} labelPosition='right' />
        </Grid.Column>

        <Grid.Column width={2} className="app-login-wrapper">
          {/*<p className="app-login">Login</p>*/}
          <Button icon='lock' label={{ as: 'a', basic: true, content: 'Login' }} labelPosition='left' />
        </Grid.Column>
      </Grid>
    );
  }
}
