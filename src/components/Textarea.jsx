import React from 'react';
import {Field, ErrorMessage} from 'formik';
import "../App.css";
import TextError from './TextError';

function Textarea(props) {
  const {label, name, ...rest} = props;
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field as="textarea" id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Textarea