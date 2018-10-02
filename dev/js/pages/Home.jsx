import React, {Component} from 'react';

import ErrorBoundary from './ErrorBoundary.jsx';
import Header from '../components/Header.jsx';
import ContentLayout from '../components/ContentLayout.jsx';
import VisitorForm from '../components/VisitorForm.jsx';
import TimeOutForm from '../components/TimeOutForm.jsx';
import { Grid } from 'semantic-ui-react';

export default class Home extends Component {

  constructor (props) {
    super(props);
    this.state = {
      renderForm: false
    }
  }

  renderVisiotrForm = () => {
    this.setState({
      renderForm: true
    })
  }

  handleLogin = () => {
    console.log('Login');
  }

  render() {
    return (
      <ErrorBoundary>
        <div id="container" style={{'marginTop': '0 !important'}}>
          <Header handleLogin={this.handleLogin}/>
          {
            this.state.renderForm ?
              <VisitorForm/>
            : <ContentLayout
                redirect={this.redirectToHomePage}/>
          }
        </div>
      </ErrorBoundary>
    );
  }
}
