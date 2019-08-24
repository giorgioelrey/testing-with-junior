import React from 'react';
import { Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import { parseISO, format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const DatePickerFormikField = ({ name, label, errors }) => (
  <div className="form-group form-label-group">
     <label htmlFor={name}>{label}</label>

     <Field name={name}>
     {(props) => {

       const handleChange = (date) => {
         props.form.setFieldValue(props.field.name, date)
       }

       return (
         <DatePicker
           selected={props.field.value}
           onChange={handleChange}
           isClearable={true}
         />
       )
     }}
     </Field>
     <div className={'invalid-feedback ' + (errors[name] ? 'd-block' : '')}>{errors[name]}</div>

  </div>

);

export default DatePickerFormikField;
