import React, {Component} from 'react';

import { Grid, Message, Icon, Label, Rating } from 'semantic-ui-react';
import CustomInput from '../atom/customInput.jsx';
import CustomTextArea from '../atom/customTextArea.jsx';
import CustomButton from '../atom/CustomButton.jsx';
import MessageContainer from '../atom/MessageContainer.jsx';
import Loader from '../atom/Loader.jsx';
import {timeOutContent, loadingPanelContent} from '../static/data';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const CustomSwal = withReactContent(Swal);

import AppConstants from '../constants/AppConstants';
import VisitorActions from '../actions/VisitorActions';
import AppStore from '../stores/AppStore';

import '../../scss/timeout-form.scss';

export default class TimeOutForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      visitorID: null,
      enableLoader: false,
      isInvalidID: false, // to indicate an error field in search field
      visitorData: null,  // to store search result, which will be used to render visitor details
      isOUTloader: false
    }
  }

  componentDidMount = () => {
    // setTimeout(() => {
    //   this.setState({ enableLoader: false })
    // }, 2500);
  }

  handleUniqueIdUpdate = (event) => {
    this.setState({
      visitorID: event.target.value,
    })
  }

  handleOnChange = (event) => {
    this.state.isInvalidID && this.setState({
      isInvalidID: false // Remove error label from search field once user provides a value
    })
  }

  handleSubmission = () => {
    this.state.visitorID ? this.findVisitor() : this.setState ({ isInvalidID: true })
  }

  updateSearchResult = () => {
    this.setState({
      enableLoader: false,
      visitorData: {'name': 'Daniel Hems Well', 'IN_Time': '9.10 am'}
    });
  }

  async findVisitor () {
      this.setState({ // Bring up the loader while searching for user details
        enableLoader: true
      });
      const data = await fetch(`${AppConstants.API}/api/test/findUser`)
        .then(response => response.json())
        .then(json => {
             // Update the api result to state to display it to user
            setTimeout( () => {
              this.updateSearchResult()
            }, 900);
        })
        .catch(e => {
            // If api failed to fetch the data then,
            console.log('API error : e : ', e);
            CustomSwal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: 'Click button to try again..',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Try again'
            }).then((result) => {
              console.log('result : SWAL : ', result);
              if (result.value) {
                this.findVisitor();
              }
            })
        })
  }

  handleOutTime = () => {
    let dateTime = new Date();
    let currentTime = dateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    this.updateOUTTime();
  }

  async updateOUTTime () {
    this.setState({ // Bring up the loader while updating the visitor's OUT time
      isOUTloader: true
    });
    const data = await fetch(`${AppConstants.API}/api/test/outTime`)
      .then(response => response.json())
      .then(json => {
          this.setState({ isOUTloader: false })
          // Update the api result to state to display it to user
          CustomSwal.fire({
            type: 'success',
            title: 'Thank you',
            html:
              'You can use <b>bold text</b>, ' +
              '<a href="//github.com">links</a> ' +
              'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: 'Great &#128077;',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i className="fa fa-thumbs-down"></i> Need to improve',
            cancelButtonAriaLabel: 'Thumbs down',
          }).then((result) => {
            console.log('result : SWAL : ', result);
            if (result.value) {
              this.updateOUTTime();
            }
          })

      })
      .catch(e => {
          // If api failed to fetch the data then,
          console.log('API error : e : ', e);
          CustomSwal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'Please try again..',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Try again'
          }).then((result) => {
            if (result.value) {
              this.findVisitor();
            }
          })
      })
  }

  createLoader = () => {
    return (
      <Grid.Column width={2} className="search-loading-panel">
        <Loader/>
      </Grid.Column>
    )
  }

  renderSearchResult = (visitor) => {
    return (
      <Grid.Column width={13} className="search-result-panel">
        <table className="ui green table ">
          <thead>
            <tr><th>Name</th>
            <th>Entry Time</th>
            <th>Out Time</th>
          </tr></thead><tbody>
            <tr>
              <td>{visitor.name}</td>
              <td>{visitor.IN_Time}</td>
              <td>
                <CustomButton
                    label='Click here'
                    className='timeout-btn'
                    onClick={this.handleOutTime}
                    loaderEnabled={this.state.isOUTloader}/>
                <div className="ui pointing label" style={{'position': 'absolute', 'marginLeft': '-10%', 'marginTop': '1%'}}>
                  Click on the button to capture your OUT time
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Grid.Column>
    )
  }

  createContentPanel = () => {
    return this.state.visitorData ?
      this.renderSearchResult (this.state.visitorData)
      : (this.state.enableLoader ? this.createLoader() : null)
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
                  handleOnChange={this.handleOnChange}
                  enableWarning={false}

                  refID='visitorID'
                  customPlaceHolder={null}
                  isDisabled={false}
                  isExtraMargin={false}
                  action={false}/>

              { this.state.isInvalidID &&
                <Label basic color='red' pointing className='search-field-error'>
                  <p>Please enter a value</p>
                </Label>
              }

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
            {this.createContentPanel()}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
