import React, {Component} from 'react';

import { Input, Grid, Dropdown, Select, TextArea } from 'semantic-ui-react';
import CustomInput from '../atom/customInput.jsx';
import CustomTextArea from '../atom/customTextArea.jsx';
import CustomButton from '../atom/CustomButton.jsx';

import '../../scss/visitor-form.scss';

export default class VisitorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                value='10/09/2018'
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
                customPlaceHolder={null}
                isDisabled={false}
                isExtraMargin={false}
                action={false}/>
            </Grid.Column>
            <Grid.Column width={5}>
              <CustomInput label='Time IN' className='time-in-field'
                labelPosition='left'
                type='text'
                value='10:15:55 pm'
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
                additionalStylingClass='reason-field-border'/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <CustomButton label='Submit' />
          </Grid.Row>

        </Grid>
      )
    }
}
