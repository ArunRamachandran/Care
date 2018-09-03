import React, {Component} from 'react';

import Header from '../components/Header.jsx';
import { Grid } from 'semantic-ui-react';

export default class Home extends Component {

  render() {
    return (
      <Grid>
        <Header/>
      </Grid>
    );
  }
}
