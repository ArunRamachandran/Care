import React, {Component} from 'react';

import { Button } from 'semantic-ui-react';

const CustomButton = (props) => (
  <div>
    <Button positive
      className={props.className}
      onClick={props.onClick}
      loading={props.loaderEnabled}>

      {props.label}

    </Button>
  </div>
);

export default CustomButton;
