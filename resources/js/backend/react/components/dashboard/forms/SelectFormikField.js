import React from 'react';
import { Field, ErrorMessage } from 'formik';


const SelectFormikField = ({ errors, touched, selectOptions, optionsTitle, label, name }) => (
  <div className="form-group form-label-group">
   <label htmlFor={name}>{label}</label>
    <Field name={name} component="select" className={'form-control ' + (errors[name] && touched[name] ? ' is-invalid' : '')}>
      <option value="">{optionsTitle}</option>
       {
         selectOptions.map((option, idx) =>
         ( <option key={idx} value={option.id} >{option.name_it}</option>))
       }
     </Field>
      <ErrorMessage name={name} component="div" className="invalid-feedback" />
  </div>

)

export default SelectFormikField;
