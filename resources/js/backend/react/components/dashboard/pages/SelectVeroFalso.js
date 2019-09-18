import React from 'react';
import { Field, ErrorMessage } from 'formik';

const SelectVeroFalso = ({ errors, touched, optionsTitle, label, name }) => (
  <div className="form-group form-label-group">
   <label htmlFor={name}>{label}</label>
    <Field name={name} component="select" className={'form-control ' + (errors[name] && touched[name] ? ' is-invalid' : '')}>
        <option key={0} value="">{optionsTitle}</option>
        <option key={1} value={'true'} >{'visibile'}</option>
        <option key={2} value={'false'} >{'nascosto'}</option>
     </Field>
      <ErrorMessage name={name} component="div" className="invalid-feedback" />
  </div>

)

export default SelectVeroFalso;
