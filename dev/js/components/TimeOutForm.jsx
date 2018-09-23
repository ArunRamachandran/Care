import React, {Component} from 'react';

import { Input, Grid, Message, Icon } from 'semantic-ui-react';
import CustomInput from '../atom/customInput.jsx';
import CustomTextArea from '../atom/customTextArea.jsx';
import CustomButton from '../atom/CustomButton.jsx';

import AppConstants from '../constants/AppConstants';
import VisitorActions from '../actions/VisitorActions';
import AppStore from '../stores/AppStore';

import '../../scss/timeout-form.scss';

export default class TimeOutForm extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Grid columns='equal' className='timeout-field-container'>
          <Grid.Row>
            <Grid.Column width={9}>
              <Message
                icon='inbox'
                header='Just one second'
                content='Please provide your id number to fetch your details'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
