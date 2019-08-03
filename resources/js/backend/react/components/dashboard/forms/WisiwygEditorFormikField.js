import React from 'react';
import { Field, ErrorMessage } from 'formik';
import ReactQuill from 'react-quill';

const WisiwygEditorFormikField = ({ errors, name, label}) => (
  <div className="form-group form-label-group">
     <label htmlFor={name}>{label}</label>

     <Field name={name}>
     {({ field, errors }) =>
     {
       //console.log('wisiwyg field', field,  'errors', errors);
       return <ReactQuill
         value={field.value}
        onChange={field.onChange(field.name)}
        modules = {{
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ]
}}
        formats ={ [
                      'header', 'font', 'size',
                      'bold', 'italic', 'underline', 'strike', 'blockquote',
                      'list', 'bullet', 'indent',
                      'link', 'image', 'video'
                    ]}
/>
     }}
     </Field>
     <div className={'invalid-feedback ' + (errors[name] ? 'd-block' : '')}>{errors[name]}</div>

  </div>
)

export default WisiwygEditorFormikField;
