import React, {Component} from 'react';
import { Form, TextArea } from 'semantic-ui-react'

const CustomTextArea = (props) => (
    <div>
      <Form className={props.className}>
        {props.customPlaceHolder && <span> {props.customPlaceHolder} </span>}
        <TextArea
          placeholder={props.placeholder}
          className={props.additionalStylingClass}
        />
      </Form>
    </div>
);

export default CustomTextArea;
