import React, {Component} from 'react';

import { Input, Grid, Dropdown, Select } from 'semantic-ui-react';
import CustomInput from '../atom/customInput.jsx';
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
              <CustomInput label='Full Name' className='first-name-field'
                type='text'
                options={selectFieldOptions}
                isSelectEnabled={true}
                placeholder='Full name'
                customPlaceHolder={null}
                isDisabled={false}
                action={false}
                defaultValue='Mr.'/>
            </Grid.Column>
            <Grid.Column width={5}>
              <CustomInput label='Date' className='date-field'
                labelPosition='left'
                type='text'
                value='10/09/2018'
                customPlaceHolder='Date  :   '
                isDisabled={true}
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
                action={false}/>
            </Grid.Column>
            <Grid.Column width={5}>
              <CustomInput label='Time IN' className='time-in-field'
                labelPosition='left'
                type='text'
                value='10:15:55 pm'
                customPlaceHolder='Time IN : '
                isDisabled={true}
                action={false}
                isSelectEnabled={false} />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      )
    }
}
