import React, {Component} from 'react';

import { Input, Grid, Message, Icon } from 'semantic-ui-react';
import CustomInput from '../atom/customInput.jsx';
import CustomTextArea from '../atom/customTextArea.jsx';
import CustomButton from '../atom/CustomButton.jsx';
import MessageContainer from '../atom/MessageContainer.jsx';
import Loader from '../atom/Loader.jsx';
import {timeOutContent, loadingPanelContent} from '../static/data';

import AppConstants from '../constants/AppConstants';
import VisitorActions from '../actions/VisitorActions';
import AppStore from '../stores/AppStore';

import '../../scss/timeout-form.scss';

export default class TimeOutForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      visitorID: '',
      enableLoader: true
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ enableLoader: false })
    }, 2500);
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

  createLoader = () => {
    return (
      <Grid.Column width={2} className="search-loading-panel">
        <Loader/>
      </Grid.Column>
    )
  }

  renderSearchResult = () => {
    return (
      <Grid.Column width={9} className="search-result-panel">
        <table className="ui green table ">
          <thead>
            <tr><th>Name</th>
            <th>Entry Time</th>
            <th>Out Time</th>
          </tr></thead><tbody>
            <tr>
              <td>Daniel Hems Well</td>
              <td>9.10 am</td>
              <td>
                <CustomButton
                    label='Click here'
                    className='timeout-btn'
                    loaderEnabled={false}/>
                <div className="ui pointing label" style={{'position': 'absolute'}}>
                  Click on the button to capture your OUT time
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Grid.Column>
    )
  }

  render () {
    return (
      <div className="timeout-field-container">
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column width={14}>
              <MessageContainer content={timeOutContent}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5} className="search-field-panel">
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
            {this.state.enableLoader ? this.createLoader () : this.renderSearchResult()}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
