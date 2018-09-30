import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react'

import '../../scss/fluid-card.scss';

const FluidCard = (props) => {

  return (
    <Card.Group itemsPerRow={2}>
      <Card color='red' />
      <Card color='orange' />
    </Card.Group>
  );
}

export default FluidCard;
