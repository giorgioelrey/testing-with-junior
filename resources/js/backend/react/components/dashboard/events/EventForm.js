import React, { Fragment} from 'react';
import ReactQuill from 'react-quill';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import * as Yup from 'yup';
import moment from 'moment';


const EventForm = ({ event, initialValues, yupSchema, pagesAvailable, onSubmit }) => {


    const formStartingValues = event && event.id && {
          title: event.title || '',
          subtitle: event.subtitle || '',
          address: event.address || '',
          description: event.description || '',
          date: new Date(event.date) || '',
          id: event.id || ''
      } || initialValues;

      console.log(formStartingValues);

    return(

        <Fragment>
        <Formik
               initialValues={formStartingValues}
               validationSchema={Yup.object().shape(yupSchema)}
               onSubmit={ (fields) => {console.log('submit event'); onSubmit(fields)} }
               render={({ errors, status, touched }) => (
                   <Form className="cms-form login">

                      <Field type="hidden" className="form-control" name="id" ></Field>

                       <div className="form-group form-label-group">

                          <label htmlFor="title">Title</label>
                           <Field name="title" type="text" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')} placeholder="Type title"/>
                           <ErrorMessage name="title" component="div" className="invalid-feedback" />

                       </div>

                       <div className="form-group form-label-group">
                          <label htmlFor="subtitle">Subtitle</label>
                           <Field name="subtitle" type="text" className={'form-control' + (errors.subtitle && touched.subtitle ? ' is-invalid' : '')} placeholder="Type subtitle"/>

                           <ErrorMessage name="subtitle" component="div" className="invalid-feedback" />
                       </div>

                       <div className="form-group form-label-group">
                          <label htmlFor="address">Address</label>
                           <Field name="address" type="text" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} placeholder="Type address"/>

                           <ErrorMessage name="address" component="div" className="invalid-feedback" />
                       </div>

                       <div className="form-group form-label-group">
                          <label htmlFor="date">Date</label>

                          <Field name="date">
                          {(props) => {

                            const handleChange = (date) => {
                              props.form.setFieldValue(props.field.name, date)
                            }

                            return (
                              <DatePicker
                                selected={props.field.value}
                                onChange={handleChange}
                                minDate={moment()}
                                isClearable={true}
                              />
                            )
                          }}
                          </Field>
                          <div className={'invalid-feedback ' + (errors.date ? 'd-block' : '')}>{errors.date}</div>

                       </div>




                       <div className="form-group form-label-group">
                          <label htmlFor="description">Description</label>

                          <Field name="description">
                          {({ field, errors }) =>
                          {
                            //console.log(field, errors);
                            return <ReactQuill value={field.value} onChange={field.onChange(field.name)} />
                          }}
                          </Field>
                          <div className={'invalid-feedback ' + (errors.description ? 'd-block' : '')}>{errors.description}</div>

                       </div>




                       <div className="form-group">
                           <button type="submit" className="btn btn-primary mr-2">Submit new event</button>
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
      title: '',
      subtitle: '',
      description: '',
      address: '',
      date: '',
      id: ''
  },
  yupSchema: {
      title: Yup.string()
         .min(6, 'Title must be at least 6 characters')
          .required('Title is required'),
      subtitle: Yup.string()
          .min(6, 'Subtitle must be at least 6 characters')
          .required('Subtitle is required'),
      description:  Yup.string()
         .min(30, 'Description must be at least 30 characters')
          .required('Description is required'),
      date: Yup.date()
        .min(new Date(moment()), 'Select a date starting from today')
        .required('Event date is required')
        .typeError("Event date required"),
  },
  pagesAvailable: [],
}
