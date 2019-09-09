import React from 'react';
import { Field } from 'formik';
import ReactQuill from 'react-quill';

const WisiwygEditorPageField = ({idx, errors, field}) => (
  <div className="form-group form-label-group">
     <label htmlFor={field.name}>{field.name}</label>

     <Field name={field.name}>
     {({ field, errors }) =>
     {
       return <ReactQuill value={field.value} onChange={field.onChange(field.name)} />
     }}
     </Field>
     <div className={'invalid-feedback ' + (errors[field.name] ? 'd-block' : '')}>{errors[field.name]}</div>

  </div>
)

export default WisiwygEditorPageField;
