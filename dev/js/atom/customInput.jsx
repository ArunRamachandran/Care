import React, {Component} from 'react';
import { Select, Input, Icon, Dropdown, Label } from 'semantic-ui-react'

const CustomInput = (props) => (
    <div>
      {props.customPlaceHolder && <span> {props.customPlaceHolder} </span>}
      {/* <Icon name='users'/> */}
      <Input
        type={props.type}
        disabled={props.isDisabled}
        className={ `${props.className} ${props.isExtraMargin ? 'extra-margin-left' : ''}`}
        label={{ icon: 'asterisk' }} labelPosition='left corner'
        placeholder={props.placeholder}
        focus
        action={props.action} iconPosition='left'>
          { props.isSelectEnabled &&
              <Select compact
                onChange={props.handleOnSelect}
                options={props.options}
                defaultValue={props.defaultValue}/>
          }
          <input
            value={props.value}
            className={`${props.isDisabled ? 'disabled-field' : ''} ${props.enableWarning ? 'warning' : ''}`}
            onBlur={props.handleOnBlur}/>

      </Input>
    </div>
);

export default CustomInput;
