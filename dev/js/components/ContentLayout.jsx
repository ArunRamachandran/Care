import React, {Component} from 'react';

import '../../scss/content-layout.scss';
import { Grid, Segment, Button } from 'semantic-ui-react';

export default class ContentLayout extends Component {

  render() {
    return (
      <div className="app-content">
        {/*<p>Welcome to WellCare Australia ..</p>*/}
        <p>Welcome to </p> <p className="content-highlight">WellCare</p> <p>Australia ..</p>
        <div className="visior-actions">
          <Button content='Visitor Entry' icon='group' labelPosition='left' />
          <Button content='Timout' icon='right arrow' labelPosition='right' />
        </div>
      </div>
    );
  }
}
