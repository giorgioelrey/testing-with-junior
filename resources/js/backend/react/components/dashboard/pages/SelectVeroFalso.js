import React from 'react';
import { Field, ErrorMessage } from 'formik';

const SelectVeroFalso = ({ errors, touched, selectOptions, optionsTitle, label, name }) => (
  <div className="form-group form-label-group">
   <label htmlFor={name}>{label}</label>
    <Field name={name} component="select" className={'form-control ' + (errors[name] && touched[name] ? ' is-invalid' : '')}>
      <option value="">{optionsTitle}</option>
        <option key={idx} value={true} >{'visibile'}</option>
        <option key={idx} value={false} >{'nascosto'}</option>
     </Field>
      <ErrorMessage name={name} component="div" className="invalid-feedback" />
  </div>

)

export default SelectVeroFalso;
