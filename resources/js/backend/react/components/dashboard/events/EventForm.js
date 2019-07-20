import React, { Fragment} from 'react';
import ReactQuill from 'react-quill';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import { parseISO, format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css'
import * as Yup from 'yup';
import moment from 'moment';
import DatePickerFormikField from './../forms/DatePickerFormikField';
import TimePickerFormikField from './../forms/TimePickerFormikField';
import TextInputFormikField from './../forms/TextInputFormikField';
import WisiwygEditorFormikField from './../forms/WisiwygEditorFormikField';
import SelectFormikField from './../forms/SelectFormikField';
import FileUploadInputFormikField from './../forms/FileUploadInputFormikField';


const EventForm = ({ event, section, initialValues, yupSchema, pagesAvailable, onSubmit }) => {

    console.log('convert new',new Date(event.time));

    const FILE_SIZE = 160 * 2000;
    const SUPPORTED_FORMATS = [
     "image/jpg",
     "image/jpeg",
     "image/gif",
     "image/png"
   ];

    const formStartingValues = event && event.id && {
          image_url: null,
          metadescription_it: event.metadescription_it || '',
          metadescription_en: event.metadescription_en || '',
          title_it: event.title_it || '',
          title_en: event.title_en || '',
          address: event.address || '',
          description_it: event.description_it || '',
          description_en: event.description_en || '',
          date: new Date(event.date) || '',
          time: new Date(event.time)|| '',
          id: event.id || ''
      } || initialValues;

      console.log(formStartingValues);

    return(

        <Fragment>
        <Formik
               initialValues={formStartingValues}
               validationSchema={Yup.object().shape(yupSchema)}
               onSubmit={ (fields) => {console.log('submit event'); onSubmit(fields)} }
               render={({ errors, status, touched , values, setFieldValue}) => (
                   <Form className="cms-form login">

                      <Field type="hidden" className="form-control" name="id" ></Field>

                      <hr/>

                      <div className="my-5">

                        <h2 >IT Contents</h2>

                        <TextInputFormikField name={"metadescription_it"} label="Meta Description IT" touched={touched} errors={errors} />

                        <TextInputFormikField name={"title_it"} label="Title IT" touched={touched} errors={errors} />

                        <WisiwygEditorFormikField name={"description_it"} label="Description IT" errors={errors} />

                      </div>
                      <hr/>

                      <div className="my-5">

                        <h2 >EN Contents</h2>

                        <TextInputFormikField name={"metadescription_en"} label="Meta Description EN" touched={touched} errors={errors} />

                        <TextInputFormikField name={"title_en"} label="Title EN" touched={touched} errors={errors} />

                        <WisiwygEditorFormikField name={"description_en"} label="Description EN" errors={errors} />

                      </div>

                      <hr/>

                      <div>

                        <h2>Campi per entrambe le lingue</h2>

                        <TextInputFormikField name={"address"} label="Indirizzo" touched={touched} errors={errors} />

                        <DatePickerFormikField name="date" label="Data" errors={errors} />

                        <TimePickerFormikField name="time" label="Ora" errors={errors}/>

                        <FileUploadInputFormikField setFieldValue={setFieldValue} label={'Post Image'} name={'image_url'} values={values} errors={errors} touched={touched}/>

                      </div>

                       <div className="form-group">
                           <button type="submit" className="btn btn-primary mr-2">{section == 'create' ? 'Submit new event' : 'Submit your changes'}</button>
                           <button type="reset" className="btn btn-info text- mr-2">Reset</button>
                       </div>
                   </Form>
               )}
           />

        </Fragment>
    );

}


export default EventForm;

EventForm.defaultProps = {
  initialValues: {
      image_url: null,
      metadescription_it: '',
      metadescription_en: '',
      title_it: '',
      title_en: '',
      description_it: '',
      description_en: '',
      address: '',
      date: '',
      time: '',
      id: ''
  },
  yupSchema: {
      metadescription_it: Yup.string()
         .min(6, 'Meta Description must be at least 6 characters')
          .required('Meta Description is required'),
      metadescription_en: Yup.string()
         .min(6, 'Meta Description must be at least 6 characters')
          .required('Meta Description is required'),
      title_it: Yup.string()
         .min(6, 'Title must be at least 6 characters')
          .required('Title is required'),
      title_en: Yup.string()
         .min(6, 'Title must be at least 6 characters')
          .required('Title is required'),
      description_it:  Yup.string()
         .min(30, 'Description must be at least 30 characters')
          .required('Description is required'),
      description_en:  Yup.string()
         .min(30, 'Description must be at least 30 characters')
          .required('Description is required'),
      date: Yup.date()
        .min(new Date(moment()), 'Select a date starting from today')
        .required('Event date is required')
        .typeError("Event date required"),
      time: Yup.date()
        .required('Event time is required')
        .typeError("Event time required"),
  },
  pagesAvailable: [],
}
