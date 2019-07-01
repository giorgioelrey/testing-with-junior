import React, {Fragment} from 'react';
import { Field, ErrorMessage } from 'formik';
import TextInputPageField from './TextInputPageField';
import WisiwygEditorPageField from './WisiwygEditorPageField';

const PageFields = ({ errors, status, touched, fieldsData }) => {


  return (
    <Fragment>
    { Object
         .values(fieldsData)
         .map((field, idx) => {

          return (field.type == 'string') ?
           (<TextInputPageField key={idx} errors={errors} name={field.name} touched={touched} />)
              :
            (<WisiwygEditorPageField key={idx} errors={errors} field={field} />)

          })
        }
    </Fragment>
  );
}

export default PageFields;
