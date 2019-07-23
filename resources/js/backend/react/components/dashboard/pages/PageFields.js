import React, {Fragment} from 'react';
import { Field, ErrorMessage } from 'formik';
import TextInputPageField from './TextInputPageField';
import WisiwygEditorPageField from './WisiwygEditorPageField';
import FileUploadInputFormikField from './../forms/FileUploadInputFormikField';

const PageFields = ({ errors, status, touched, fieldsData, setFieldValue, values }) => {

  return (
    <Fragment>
    { Object
         .values(fieldsData)
         .map((field, idx) => {

          switch (field.type) {

            case 'string': return (<TextInputPageField key={idx} errors={errors} name={field.name} touched={touched} />);break;

            case 'wisiwyg': return (<WisiwygEditorPageField key={idx} errors={errors} field={field} />); break;

            case 'image': /*console.log('field image ', field.name);*/ return (<FileUploadInputFormikField key={idx} setFieldValue={setFieldValue} label={field.name} name={field.name} values={values} errors={errors} touched={touched}/>); break;

            default: break;
          }

          })
        }
    </Fragment>
  );
}

export default PageFields;
