import React from 'react';
import { Field, ErrorMessage } from 'formik';

const TextInputPageField = ({idx, errors, touched, name}) => (

  <div className="form-group form-label-group">
     <label htmlFor={name}>{name}</label>
      <Field name={name} type="text" className={'form-control' + (errors[name] && touched[name] ? ' is-invalid' : '')} placeholder={'Type ' + name}/>
      <ErrorMessage name={name} component="div" className="invalid-feedback" />
  </div>

)

export default TextInputPageField;
