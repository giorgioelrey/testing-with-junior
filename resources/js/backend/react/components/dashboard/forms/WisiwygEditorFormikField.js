import React from 'react';
import { Field, ErrorMessage } from 'formik';
import ReactQuill from 'react-quill';

const WisiwygEditorFormikField = ({ errors, name, label}) => (
  <div className="form-group form-label-group">
     <label htmlFor={name}>{label}</label>

     <Field name={name}>
     {({ field, errors }) =>
     {
       console.log('wisiwyg field', field,  'errors', errors);
       return <ReactQuill value={field.value} onChange={field.onChange(field.name)} />
     }}
     </Field>
     <div className={'invalid-feedback ' + (errors[name] ? 'd-block' : '')}>{errors[name]}</div>

  </div>
)

export default WisiwygEditorFormikField;
