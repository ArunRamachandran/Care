import React, {Component} from 'react';

import '../../scss/content-layout.scss';
import { Grid, Segment, Button } from 'semantic-ui-react';

export default class ContentLayout extends Component {

  render() {
    return (
      <div className="app-content">
        <p>Welcome to WellCare Australia ..</p>
        <div className="visior-actions">
          {/*<Grid columns='equal'>
            <Grid.Column width={5}>
              <div className="visior-entry">Visitor Login</div>
            </Grid.Column>

            <Grid.Column width={5}>
              <div className="visitor-logout">Logout</div>
            </Grid.Column>
          </Grid>*/}
          <Button.Group>
            <Button>Visitor Login</Button>
            <Button.Or />
            <Button positive>Visitor History</Button>
          </Button.Group>

        </div>
      </div>
    );
  }
}
