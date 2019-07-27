import React, { Fragment} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextInputFormikField from './../forms/TextInputFormikField';
import WisiwygEditorFormikField from './../forms/WisiwygEditorFormikField';
import SelectFormikField from './../forms/SelectFormikField';
import GmapsPlacesAutocompleteFormikField from './../forms/GmapsPlacesAutocompleteFormikField';
import FileUploadInputFormikField from './../forms/FileUploadInputFormikField';

const LocationForm = ({ location, categories = [], initialValues, yupSchema, onSubmit, section}) => {

    console.log('newform cats', categories)
    console.log('location', location)

    const FILE_SIZE = 160 * 2000;
    const SUPPORTED_FORMATS = [
     "image/jpg",
     "image/jpeg",
     "image/gif",
     "image/png"
   ];

    const formStartingValues = location && {

          metadescription_it: location.metadescription_it || '',
          metadescription_en: location.metadescription_en || '',
          image_url: null,
          name_it: location.name_it || '',
          name_en: location.name_en || '',
          phonenumber: location.phonenumber || '',
          address: location.address || '',
          email: location.email || '',
          description_it: location.description_it || '',
          description_en: location.description_en || '',
          category_id: location.category_id || '',
          id: location.id || ''
      } || initialValues;

    console.log('formStartingValues', formStartingValues)

    return(

        <Fragment>
        <Formik
               initialValues={formStartingValues}
               validationSchema={Yup.object().shape(yupSchema)}
               onSubmit={ (fields) => {onSubmit(fields)} }
               render={({  errors, status, touched, values, setFieldValue }) => (
                   <Form className="cms-form login">

                      <Field type="hidden" className="form-control" name="id" ></Field>

                      {categories.length > 0 &&
                       (<SelectFormikField name={"category_id"} label="Where do you want to publish this location at" touched={touched} optionsTitle="Select category" errors={errors} selectOptions={categories}
                          />) || null}
                      <hr/>
                      <div className="my-3">

                        <h2 >IT Contents</h2>

                        <TextInputFormikField name={"metadescription_it"} label="MetaDescription IT" touched={touched} errors={errors} />

                        <TextInputFormikField name={"name_it"} label="Name IT" touched={touched} errors={errors} />

                        <WisiwygEditorFormikField name={"description_it"} label="Description IT" errors={errors} />

                      </div>
                      <hr/>
                      <div className="my-3">
                        <h2 className="mt-3">EN Contents</h2>

                        <TextInputFormikField name={"metadescription_en"} label="MetaDescription EN" touched={touched} errors={errors} />

                        <TextInputFormikField name={"name_en"} label="Name EN" touched={touched} errors={errors} />

                        <WisiwygEditorFormikField name={"description_en"} label="Description EN" errors={errors} />

                      </div>
                      <hr/>
                      <div className="my-3">
                        <h2 className="mt-3">Other Fields</h2>

                        <Field
                            name="address"
                            label="Address"
                            value={ location.address || ''}
                            component={GmapsPlacesAutocompleteFormikField}
                            options={{}}
                          />

                        <TextInputFormikField name={"phonenumber"} label="Phone Number" touched={touched} errors={errors} />

                        <TextInputFormikField name={"email"} label="Email" touched={touched} errors={errors} />

                        <FileUploadInputFormikField setFieldValue={setFieldValue} label={'Location Image'} name={'image_url'} values={values} errors={errors} touched={touched}/>

                      </div>
                       <div className="form-group">
                           <button type="submit" className="btn btn-primary mr-2">{section === 'create' ? 'Create' : 'Edit'} location</button>
                           <button type="reset" className="btn btn-info text- mr-2">Reset</button>
                       </div>
                   </Form>
               )}
           />

        </Fragment>
    );

}


export default LocationForm;

LocationForm.defaultProps = {
  initialValues: {
      metadescription_it: '',
      metadescription_en: '',
      image_url: null,
      name_it: '',
      name_en: '',
      address: '',
      phonenumber: '',
      email: '',
      description_it: '',
      description_en: '',
      category_id: '',
      id: ''
  },
  yupSchema: {
      metadescription_it: Yup.string()
        .min(6, 'Meta Description must be at least 6 characters')
         .required('Meta Description is required'),
      metadescription_en: Yup.string()
        .min(6, 'Meta Description must be at least 6 characters')
         .required('Meta Description is required'),
      name_it: Yup.string()
         .min(6, 'Name IT must be at least 6 characters')
          .required('Name IT is required'),
      name_en: Yup.string()
         .min(6, 'Name EN must be at least 6 characters')
          .required('Name EN is required'),
      address: Yup.string()
         .min(15, 'Address must be at least 15 characters')
          .required('Address is required'),
      phonenumber: Yup.string()
         .min(8, 'Phone Number must be at least 8 characters')
          .required('Phone Number is required'),
      email: Yup.string()
         .min(15, 'Email must be at least 8 characters')
          .required('Email is required'),
      description_it:  Yup.string()
         .min(30, 'Description IT must be at least 30 characters')
          .required('Description IT is required'),
      description_en:  Yup.string()
         .min(30, 'Description EN must be at least 30 characters')
          .required('Description EN is required'),
       category_id: Yup.string().
          required('Please select wich category you want to publish this location at')
  },
  pagesAvailable: [],
}
