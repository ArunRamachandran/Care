import React, {Component} from 'react';
import { Select, Input, Icon, Dropdown } from 'semantic-ui-react'

const CustomInput = (props) => (
    <div>
      {props.customPlaceHolder && <span> {props.customPlaceHolder} </span>}
      {/* <Icon name='users'/> */}
      <Input
        type={props.type}
        disabled={props.isDisabled}
        className={ `${props.className} ${props.isExtraMargin ? 'extra-margin-left' : ''}`}
        label={{basic: true, content: 'date'}}
        labelPosition={props.labelPosition}
        placeholder={props.placeholder}
        focus
        action={props.action} iconPosition='left'>
          { props.isSelectEnabled && <Select compact options={props.options} defaultValue={props.defaultValue}/> }
          <input
            value={props.value}
            className={props.isDisabled ? 'disabled-field' : ''}
            onBlur={props.updateVisitorName}/>
      </Input>
    </div>
);

export default CustomInput;
