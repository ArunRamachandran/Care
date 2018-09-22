import React, {Component} from 'react';

import { Input, Grid, Dropdown, Select, TextArea } from 'semantic-ui-react';
import CustomInput from '../atom/customInput.jsx';
import CustomTextArea from '../atom/customTextArea.jsx';
import CustomButton from '../atom/CustomButton.jsx';

import AppConstants from '../constants/AppConstants';
import VisitorActions from '../actions/VisitorActions';
import AppStore from '../stores/AppStore';

import '../../scss/visitor-form.scss';

/** TODO **/
// Write a function picker which will return the action required for
// each user interation.
// This will reduce the number of multiple function declarations which
// do the same set of logic


export default class VisitorForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: null,
        time: null,
        invalidFields: [],
        isValidating: false // to control loading icon on button
      }
    }

    componentWillMount = () => {
      AppStore.addChangeListener(AppConstants.ERROR, this.handleError);
      AppStore.addChangeListener(AppConstants.SUCCESS, this.handleQuerySubmission);
    }

    componentDidMount = () => {
      let dateTime = new Date();
      let currentDate = dateTime.toLocaleDateString();
      let currentTime = dateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      this.setState({
        date: currentDate,
        time: currentTime
      });

      VisitorActions.updateDateAndTime(currentDate, currentTime);
    }

    componentWillUnmount = () => {
      AppStore.removeListener(AppConstants.ERROR, this.handleError);
      AppStore.removeChangeListener(AppConstants.SUCCESS, this.handleQuerySubmission);
    }

    async handleQuerySubmission (visitorData) {
      console.log("proceed with query : ", visitorData);
      const response = await fetch('/api/test');
      console.log('API worked :) : ', response);
    }

    handleError = (response) => {
      let invalidFields = [];
      response.forEach((field, i) => {
        invalidFields.push( Object.keys(field)[0] );
      })
      this.setState({
        invalidFields: invalidFields,
        isValidating: false // Remove loader from button
      });
      console.log('There is an error : ', invalidFields);
    }

    handleOnSelect = (event) => {
      VisitorActions.updateVisitorTitle(event.currentTarget.innerText);
    }

    updateVisitorName = (event) => {
      console.log('name : ', event.target.value);
      VisitorActions.updateVisitorName(event.target.value);
    }

    handleUniqueIdUpdate = (event) => {
      VisitorActions.updateCustomerUniqueID(event.target.value);
    }

    updateCustomerCarRego = (event) => {
      VisitorActions.updateVisitorCarRego(event.target.value);
    }

    updateReasonForVisit = (event) => {
      VisitorActions.updateReasonForVisit(event.target.value);
    }

    handleSubmission = () => {
      this.setState({
        isValidating: true // Enable loader on button
      })

      VisitorActions.verifyAndSubmitUserData();
    }

    validateFieldEntry = (fieldName) => {
      let invalidFields = this.state.invalidFields;
      if (invalidFields.indexOf(fieldName) > -1 ) {// if the given field name is mandatory & visitor doesn't provide any vali  input
        return true;
      } else return false;
    }

    createErrorMessageFragment = () => {
      return (
        <div className='form-field-error-msg'>
          *Following fields are mandatory & can not be leave as empty
        </div>
      )
    }

    render() {

      const selectFieldOptions = [
        { key: 'Mr.', text: 'Mr.', value: 'Mr.' },
        { key: 'Mrs.', text: 'Mrs.', value: 'Mrs.' },
        { key: 'Miss.', text: 'Miss.', value: 'Miss.' },
        { key: 'Ms.', text: 'Ms.', value: 'Ms.' },
        { key: 'Dr.', text: 'Dr.', value: 'Dr.' }
      ]

      return (
        <div>
          <Grid columns='equal' className='form-field-container'>
            <Grid.Row>
              {this.state.invalidFields.length ? this.createErrorMessageFragment() : null}
            </Grid.Row>

            <Grid.Row>

              <Grid.Column width={9}>
                <CustomInput label='Full Name'
                  icon='users' iconPosition='left'
                  className='first-name-field'
                  type='text'
                  options={selectFieldOptions}
                  isSelectEnabled={true}

                  handleOnBlur={this.updateVisitorName}
                  handleOnSelect={this.handleOnSelect}
                  enableWarning={this.validateFieldEntry('fullName')}

                  placeholder='Full name'
                  customPlaceHolder={null}
                  isDisabled={false}
                  isExtraMargin={false}
                  action={false}
                  defaultValue='Mr.'/>
              </Grid.Column>
              <Grid.Column width={5}>
                <CustomInput label='Date' className='date-field'
                  labelPosition='left'
                  type='text'
                  value={this.state.date}
                  customPlaceHolder='Date '
                  isDisabled={true}
                  isExtraMargin={true}
                  action={false}
                  isSelectEnabled={false} />
              </Grid.Column>

            </Grid.Row>

            <Grid.Row>

              <Grid.Column width={9}>
                <CustomInput label='Licence / ID number' className='unique-id-field'
                  type='text'
                  isSelectEnabled={false}
                  placeholder='Licence / ID number'

                  handleOnBlur={this.handleUniqueIdUpdate}
                  enableWarning={this.validateFieldEntry('uniqueID')}

                  customPlaceHolder={null}
                  isDisabled={false}
                  isExtraMargin={false}
                  action={false}/>
              </Grid.Column>
              <Grid.Column width={5}>
                <CustomInput label='Time IN' className='time-in-field'
                  labelPosition='left'
                  type='text'
                  value={this.state.time}
                  customPlaceHolder='Time IN  '
                  isExtraMargin={false}
                  isDisabled={true}
                  action={false}
                  isSelectEnabled={false} />
              </Grid.Column>

            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={9}>
                <CustomInput label='Car Rego ( If applicable )' className='car-rego-field'
                  labelPosition='left'
                  type='text'
                  placeholder='Car Rego ( If applicable )'

                  handleOnBlur={this.updateCustomerCarRego}

                  customPlaceHolder={null}
                  isExtraMargin={false}
                  isDisabled={false}
                  action={false}
                  isSelectEnabled={false} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={9}>
                <CustomTextArea
                  placeholder='Reason for visit'
                  customPlaceHolder='Reason for visit'
                  className='reason-for-visit-field'
                  additionalStylingClass='reason-field-border'
                  enableWarning={this.validateFieldEntry('reasonForVisit')}
                  handleOnBlur={this.updateReasonForVisit}/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <CustomButton
                label='Submit'
                className='form-submit-btn'
                onClick={this.handleSubmission}
                loaderEnabled={this.state.isValidating}/>
            </Grid.Row>

          </Grid>

        </div>
      )
    }
}
