import React from 'react';
import { Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import { parseISO, format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment';

const TimePickerFormikField = ({ name, label, errors }) => (
  <div className="form-group form-label-group">
     <label htmlFor={name}>{label}</label>

     <Field name={name}>
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
           timeCaption="Ora"
           isClearable={true}
         />
       )
     }}
     </Field>
     <div className={'invalid-feedback ' + (errors[name] ? 'd-block' : '')}>{errors[name]}</div>

  </div>

);

export default TimePickerFormikField;
