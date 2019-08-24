import React from 'react';
import { Field, ErrorMessage } from 'formik';

const TextInputFormikField = ({ errors, touched, name, label}) => (

  <div className="form-group form-label-group">
     <label htmlFor={name}>{label}</label>
      <Field name={name} type="text" className={'form-control' + (errors[name] && touched[name] ? ' is-invalid' : '')} placeholder={'Digita ' + name}/>
      <ErrorMessage name={name} component="div" className="invalid-feedback" />
  </div>

)

export default TextInputFormikField;
