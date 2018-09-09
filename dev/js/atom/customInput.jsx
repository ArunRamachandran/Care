import React, {Component} from 'react';
import { Select, Input } from 'semantic-ui-react'

const CustomInput = (props) => (
    <div>
      {props.customPlaceHolder && <span> {props.customPlaceHolder} </span>}
      <Input
        type={props.type}
        disabled={props.isDisabled}
        className={props.className}
        label={{basic: true, content: 'date'}}
        labelPosition={props.labelPosition}
        placeholder={props.placeholder} focus
        action={props.action} iconPosition='left'>
          { props.isSelectEnabled && <Select compact options={props.options} defaultValue={props.defaultValue}/> }
          <input value={props.value}/>
      </Input>
    </div>
);

export default CustomInput;
