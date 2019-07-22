import React, { Fragment} from 'react';
import { Formik, Form } from 'formik';
import PageFields from './PageFields';
import * as Yup from 'yup';
import PageFormConnector from './../../../HOCs/PageFormConnector';

const PagesForm = ({ page, pageFormData, onSubmit }) => {

  console.log('form data ', pageFormData);

    return(

        <Fragment>
          <Formik
               initialValues={pageFormData.formStartingValues}
               validationSchema={Yup.object().shape(pageFormData.yupValSchema)}
               onSubmit={ (fields) => {onSubmit(page.id, fields)} }
               render={({ errors, status, touched, setFieldValue, values }) => {

                 return (
                    <Form className="cms-form login">
                      <PageFields errors={errors} status={status} touched={touched} fieldsData={pageFormData.fieldsData}
                      setFieldValue={setFieldValue} values={values}/>
                      <div className="form-group">
                          <button type="submit" className="btn btn-primary mr-2">Update Page</button>
                      </div>
                    </Form>
                 )
               }}
           />

        </Fragment>
    );

}


export default PageFormConnector(PagesForm);
