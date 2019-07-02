import React, { Fragment} from 'react';
import ReactQuill from 'react-quill';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import { parseISO, format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css'
import * as Yup from 'yup';
import moment from 'moment';


const EventForm = ({ event, section, initialValues, yupSchema, pagesAvailable, onSubmit }) => {

    console.log('convert new',new Date(event.time));

    const formStartingValues = event && event.id && {
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
               render={({ errors, status, touched }) => (
                   <Form className="cms-form login">

                      <Field type="hidden" className="form-control" name="id" ></Field>

                       <div className="form-group form-label-group">

                          <label htmlFor="title_it">Title IT</label>
                           <Field name="title_it" type="text" className={'form-control' + (errors.title_it && touched.title_it ? ' is-invalid' : '')} placeholder="Type title_it"/>
                           <ErrorMessage name="title_it" component="div" className="invalid-feedback" />

                       </div>
                       <div className="form-group form-label-group">

                          <label htmlFor="title_en">Title EN</label>
                           <Field name="title_en" type="text" className={'form-control' + (errors.title_en && touched.title_en ? ' is-invalid' : '')} placeholder="Type title_en"/>
                           <ErrorMessage name="title_en" component="div" className="invalid-feedback" />

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
                          <label htmlFor="time">Time</label>

                          <Field name="time">
                          {(props) => {

                            const handleChange = (time) => {
                              props.form.setFieldValue(props.field.name, time)
                            }

                            return (
                              <DatePicker
                                selected={props.field.value}
                                onChange={handleChange}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                dateFormat="h:mm a"
                                timeCaption="Time"
                                isClearable={true}
                              />
                            )
                          }}
                          </Field>
                          <div className={'invalid-feedback ' + (errors.time ? 'd-block' : '')}>{errors.time}</div>

                       </div>




                       <div className="form-group form-label-group">
                          <label htmlFor="description_it">Description IT</label>

                          <Field name="description_it">
                          {({ field, errors }) =>
                          {
                            //console.log(field, errors);
                            return <ReactQuill value={field.value} onChange={field.onChange(field.name)} />
                          }}
                          </Field>
                          <div className={'invalid-feedback ' + (errors.description_it ? 'd-block' : '')}>{errors.description_it}</div>

                       </div>
                       <div className="form-group form-label-group">
                          <label htmlFor="description_en">Description EN</label>

                          <Field name="description_en">
                          {({ field, errors }) =>
                          {
                            //console.log(field, errors);
                            return <ReactQuill value={field.value} onChange={field.onChange(field.name)} />
                          }}
                          </Field>
                          <div className={'invalid-feedback ' + (errors.description_en ? 'd-block' : '')}>{errors.description_en}</div>

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
