import React, {Component} from 'react';

import { Input, Grid, Message, Icon } from 'semantic-ui-react';
import CustomInput from '../atom/customInput.jsx';
import CustomTextArea from '../atom/customTextArea.jsx';
import CustomButton from '../atom/CustomButton.jsx';
import MessageContainer from '../atom/MessageContainer.jsx';
import Loader from '../atom/Loader.jsx';
import {timeOutContent} from '../static/data';

import AppConstants from '../constants/AppConstants';
import VisitorActions from '../actions/VisitorActions';
import AppStore from '../stores/AppStore';

import '../../scss/timeout-form.scss';

export default class TimeOutForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      visitorID: '',
      enableLoader: false
    }
  }

  handleUniqueIdUpdate = (event) => {
    this.setState({
      visitorID: event.target.value
    })
  }

  handleSubmission = () => {
    console.log("onClick : ", this.state.visitorID);
    this.setState({
      enableLoader: true
    })
  }

  render () {
    return (
      <div className="timeout-field-container">
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column width={9}>
              <MessageContainer content={timeOutContent}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5}>
              <CustomInput label='Licence / ID number' className='unique-id-field'
                  type='text'
                  isSelectEnabled={false}
                  placeholder='Licence / ID number'

                  handleOnBlur={this.handleUniqueIdUpdate}
                  enableWarning={false}

                  refID='visitorID'
                  customPlaceHolder={null}
                  isDisabled={false}
                  isExtraMargin={false}
                  action={false}/>
              </Grid.Column>

              <Grid.Column width={2}>
                <CustomButton
                  label='Search'
                  className='form-submit-btn'
                  onClick={this.handleSubmission}
                  loaderEnabled={this.state.enableLoader}/>
              </Grid.Column>

          </Grid.Row>

          <Grid.Row>
            {this.state.enableLoader && <Loader/>}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
