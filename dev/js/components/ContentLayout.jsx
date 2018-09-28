import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../scss/content-layout.scss';
import VisitorForm from './VisitorForm.jsx';
import TimeOutForm from './TimeOutForm.jsx';
import { Grid, Segment, Button } from 'semantic-ui-react';

import {data} from '../static/data';

class ContentLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customCls: "",
      wrapperCls: "app-content",
      isFormEnabled: false,
      isLogoutEnabled: false
    }
  }

  handleVisiotrForm = () => {
    this.setState({
      customCls: "transition",
      isFormEnabled: true
    });
  }

  handleVisitorLogout = () => {
    this.setState({
      customCls: "transition",
      isLogoutEnabled: true
    })
  }

  createLayoutTitle = (state) => {
    let title;
    console.log("data['isFormEnabled'] : ", data['isFormEnabled'])
    switch (state) {

      case state.isFormEnabled === true:
        return (<p>{data['isFormEnabled']}</p>);
        break;

      case state.isLogoutEnabled === true:
        return (<p>{data['isLogoutEnabled']}</p>);
        break;

      default:
        title =
          <div>
            <p>Welcome to </p> <p className="content-highlight">WellCare</p> <p>Australia ..</p>
          </div>
    };

    return title;
  }

  /** @def : redirect is a temporary function to redirect back to home page */
  /** TODO : Implement router to handle redirection */
  redirect = () => {
    this.setState({
      isFormEnabled: false,
      customCls: false
    })
  }

  createContentLayout = (state) => {
    if (state.isFormEnabled) return <VisitorForm redirect={this.redirect}/>;
    else if (state.isLogoutEnabled) return <TimeOutForm/>;
  }

  render() {

    let contentLayout = this.createContentLayout(this.state);
    let title = this.createLayoutTitle(this.state);

    return (
      <div className={`${this.state.wrapperCls} ${this.state.customCls}`}>

        {/*title*/}

        <div className="visior-actions">
          <Button content='Visitor Entry' icon='group' labelPosition='left'
            onClick={this.handleVisiotrForm} className="visitor-entry-btn"/>
          <Button content='Timout' icon='right arrow' labelPosition='right'
            onClick={this.handleVisitorLogout}/>
        </div>

        {contentLayout}

      </div>
    );
  }
}

ContentLayout.propTypes = {
  renderVisiotrForm: PropTypes.func.isRequired
};

export default ContentLayout;
