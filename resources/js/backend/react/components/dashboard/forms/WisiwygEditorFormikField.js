import React from 'react';
import { Field, ErrorMessage } from 'formik';
import ReactQuill from 'react-quill';

const WisiwygEditorFormikField = ({ errors, name, label, withPhoto}) => (
  <div className="form-group form-label-group">
     <label htmlFor={name}>{label}</label>

     <Field name={name}>
     {({ field, errors }) =>
     {
         var formats = [
             'header', 'font', 'size',
             'bold', 'italic', 'underline', 'strike', 'blockquote',
             'list', 'bullet', 'indent',
             'link',
         ];
         var toolbarMedia =  ['link'];
         if(withPhoto === true){
             formats.push('image');
             toolbarMedia.push('image');
         }

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
                toolbarMedia,
                ['clean']
              ]
            }}
            formats={ formats}
/>
     }}
     </Field>
     <div className={'invalid-feedback ' + (errors[name] ? 'd-block' : '')}>{errors[name]}</div>

  </div>
)

export default WisiwygEditorFormikField;
