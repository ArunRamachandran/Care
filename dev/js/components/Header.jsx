import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../../scss/header.scss';
import { Grid, Button } from 'semantic-ui-react';

export default class Header extends Component {

  render() {
    return (
      <Grid columns='equal' className="nav-warpper">
        <Grid.Column width={10} style={{'padding-top': '5px'}}>
          <p className="app-title">WellCare.</p>
        </Grid.Column>

        <Grid.Column width={3} className="app-help-wrapper">
          <Button className="ui orange basic button">Need help ?</Button>
        </Grid.Column>

        <Grid.Column width={2} className="app-login-wrapper">
          <Button className="ui linkedin button">
            <i className="lock icon"></i>
            <Link to='/login' className="login-link">
              Login
            </Link>

          </Button>
        </Grid.Column>
      </Grid>
    );
  }
}
