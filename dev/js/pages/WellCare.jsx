import React, {Component} from 'react';

import { Grid } from 'semantic-ui-react'
import '../../scss/wellcare.scss';

export default class WellCare extends Component {

  render () {
    return (
      <Grid className="opt_container">
        <Grid.Row columns={3}>
          <Grid.Column>
            <div className="opt resident">
              Resident
            </div>
          </Grid.Column>
          <Grid.Column>
             <div className="opt visitor">
               Visitor
             </div>
          </Grid.Column>
          <Grid.Column>
             <div className="opt staff">
               Staff
             </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
