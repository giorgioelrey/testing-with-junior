import React, { Fragment} from 'react';
import { Formik, Form } from 'formik';
import PageFields from './PageFields';
import * as Yup from 'yup';
import PageFormConnector from './../../../HOCs/PageFormConnector';

const PagesForm = ({ page, pageFormData, onSubmit }) => {

    return(

        <Fragment>
          <Formik
               initialValues={pageFormData.formStartingValues}
               validationSchema={Yup.object().shape(pageFormData.yupValSchema)}
               onSubmit={ (fields) => {onSubmit(page.id, fields)} }
               render={({ errors, status, touched, setFieldValue, values }) => {

                 return (
                    <Form className="cms-form login">
                      <PageFields errors={errors} status={status} touched={touched} fieldsData={pageFormData.fieldsData} layout={page.be_form_layout}
                      setFieldValue={setFieldValue} values={values}/>
                      <div className="form-group">
                          <button type="submit" className="btn btn-primary mr-2">Conferma modifiche pagina</button>
                      </div>
                    </Form>
                 )
               }}
           />

        </Fragment>
    );

}


export default PageFormConnector(PagesForm);
