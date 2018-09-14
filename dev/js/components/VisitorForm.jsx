import React, {Component} from 'react';

import { Input, Grid, Dropdown, Select, TextArea } from 'semantic-ui-react';
import CustomInput from '../atom/customInput.jsx';
import CustomTextArea from '../atom/customTextArea.jsx';
import CustomButton from '../atom/CustomButton.jsx';

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
        time: null
      }
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

    render() {

      const selectFieldOptions = [
        { key: 'Mr.', text: 'Mr.', value: 'Mr.' },
        { key: 'Mrs.', text: 'Mrs.', value: 'Mrs.' },
        { key: 'Miss.', text: 'Miss.', value: 'Miss.' },
        { key: 'Ms.', text: 'Ms.', value: 'Ms.' },
        { key: 'Dr.', text: 'Dr.', value: 'Dr.' }
      ]

      return (
        <Grid columns='equal' className='form-field-container'>
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
                handleOnBlur={this.updateReasonForVisit}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <CustomButton label='Submit' className='form-submit-btn'/>
          </Grid.Row>

        </Grid>
      )
    }
}
