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
          bodytop_it: event.bodytop_it || '',
          bodytop_en: event.bodytop_en || '',
          bodybottom_it: event.bodybottom_it || '',
          bodybottom_en: event.bodybottom_en || '',
          start_date: new Date(event.start_date) || '',
          start_time: new Date(event.start_time)|| '',
          end_date: new Date(event.end_date) || '',
          end_time: new Date(event.end_time)|| '',
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

                        <h2>Contenuti IT</h2>

                        <TextInputFormikField name={"metadescription_it"} label="Meta Description IT" touched={touched} errors={errors} />

                        <TextInputFormikField name={"title_it"} label="Titolo IT" touched={touched} errors={errors} />

                        <WisiwygEditorFormikField name={"bodytop_it"} label="Corpo del testo superiore IT" errors={errors} withPhoto={true} />

                        <WisiwygEditorFormikField name={"bodybottom_it"} label="Corpo del testo inferiore IT" errors={errors} withPhoto={true} />

                      </div>

                      <hr/>

                      <div className="my-5">

                        <h2>Contenuti EN</h2>

                        <TextInputFormikField name={"metadescription_en"} label="Meta Description EN" touched={touched} errors={errors} />

                        <TextInputFormikField name={"title_en"} label="Titolo EN" touched={touched} errors={errors} />

                        <WisiwygEditorFormikField name={"bodytop_en"} label="Corpo del testo superiore EN" errors={errors} withPhoto={true} />

                        <WisiwygEditorFormikField name={"bodybottom_en"} label="Corpo del testo inferiore EN" errors={errors} withPhoto={true} />

                      </div>

                      <hr/>

                      <div>

                        <h2>Campi per entrambe le lingue</h2>

                          <FileUploadInputFormikField setFieldValue={setFieldValue} label={'Immagine principale evento'} name={'image_url'} values={values} errors={errors} touched={touched} currentImage={event.image_url}/>

                        <TextInputFormikField name={"address"} label="Indirizzo" touched={touched} errors={errors} />

                          <p>Inserire data di inizio e data di fine identiche per evento di durata di un solo giorno</p>
                          <p>Specificare adeguati orari di inizio e di fine</p>

                        <DatePickerFormikField name="start_date" label="Data inizio" errors={errors} />

                        <TimePickerFormikField name="start_time" label="Ora di inizio" errors={errors}/>

                        <DatePickerFormikField name="end_date" label="Data fine evento" errors={errors} />

                        <TimePickerFormikField name="end_time" label="Ora di fine" errors={errors}/>



                      </div>

                       <div className="form-group">
                           <button type="submit" className="btn btn-primary mr-2">{section == 'create' ? 'Salva nuovo evento' : 'Salva modifiche ad evento'}</button>
                           <button type="reset" className="btn btn-info text- mr-2">Resetta Campi</button>
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
      bodytop_it: '',
      bodytop_en: '',
      bodybottom_it: '',
      bodybottom_en: '',
      address: '',
      start_date: '',
      start_time: '',
      end_date: '',
      end_time: '',
      id: ''
  },
  yupSchema: {
      metadescription_it: Yup.string()
         .min(6, 'Meta Description deve avere almeno 6 caratteri')
          .required('Meta Description è richiesta'),
      metadescription_en: Yup.string()
         .min(6, 'Meta Description deve avere almeno 6 caratteri')
          .required('Meta Description è richiesta'),
      title_it: Yup.string()
         .min(6, 'Titolo deve avere almeno 6 caratteri')
          .required('Titolo è richiesto'),
      title_en: Yup.string()
         .min(6, 'Titolo deve avere almeno 6 caratteri')
          .required('Titolo è richiesto'),
      bodytop_it:  Yup.string()
          .min(30, 'Corpo del testo superiore IT deve avere almeno 30 caratteri')
          .required('Corpo del testo superiore IT è obbligatorio'),
      bodytop_en:  Yup.string()
          .min(30, 'Corpo del testo inferiore IT deve avere almeno 30 caratteri')
          .required('Corpo del testo inferiore IT è obbligatorio'),
      bodybottom_it:  Yup.string()
          .min(30, 'Corpo del testo superiore EN deve avere almeno 30 caratteri')
          .required('Corpo del testo superiore EN è obbligatorio'),
      bodybottom_en:  Yup.string()
          .min(30, 'Corpo del testo inferiore EN deve avere almeno 30 caratteri')
          .required('Corpo del testo inferiore EN è obbligatorio'),
      start_date: Yup.date()
        .required('Data inizio evento richiesta')
        .typeError("Data inizio evento da correggere"),
      start_time: Yup.date()
        .required('Orario di inizio evento richiesta')
        .typeError("Orario di inizio evento da correggere"),
      end_date: Yup.date()
        .required('Data fine evento richiesta')
        .typeError("Data fine evento da correggere"),
      end_time: Yup.date()
        .required('Ora di fine evento richiesta')
        .typeError("Ora di fine orario da correggere"),
  },
  pagesAvailable: [],
}
