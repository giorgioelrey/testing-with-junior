import React, { Fragment} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextInputFormikField from './../forms/TextInputFormikField';
import WisiwygEditorFormikField from './../forms/WisiwygEditorFormikField';
import SelectFormikField from './../forms/SelectFormikField';
//import GmapsPlacesAutocompleteFormikField from './../forms/GmapsPlacesAutocompleteFormikField';
import FileUploadInputFormikField from './../forms/FileUploadInputFormikField';

const LocationForm = ({ location, categories = [], streets = [], initialValues, yupSchema, onSubmit, section}) => {

    console.log('newform cats', categories);
    console.log('location', location);

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
          latitude: location.latitude || '',
          longitude: location.longitude || '',
          description_it: location.description_it || '',
          description_en: location.description_en || '',
          category_id: location.category_id || '',
          street_id: location.street_id || '',
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
                       (<SelectFormikField name={"category_id"} label="Scegli tipologia location" touched={touched} optionsTitle="Seleziona categoria" errors={errors} selectOptions={categories}
                          />) || null}

                      {streets.length > 0 &&
                       (<SelectFormikField name={"street_id"} label="Scegli la via della location" touched={touched} optionsTitle="Seleziona Via" errors={errors} selectOptions={streets}
                          />) || null}

                      <hr/>
                      <div className="my-3">

                        <h2 >Contenuti IT</h2>

                        <TextInputFormikField name={"metadescription_it"} label="MetaDescription IT" touched={touched} errors={errors} />

                        <TextInputFormikField name={"name_it"} label="Nome IT" touched={touched} errors={errors} />

                        <WisiwygEditorFormikField name={"description_it"} label="Descrizione IT" errors={errors} />

                      </div>
                      <hr/>
                      <div className="my-3">
                        <h2 className="mt-3">Contenuti EN</h2>

                        <TextInputFormikField name={"metadescription_en"} label="Meta Description EN" touched={touched} errors={errors} />

                        <TextInputFormikField name={"name_en"} label="Nome EN" touched={touched} errors={errors} />

                        <WisiwygEditorFormikField name={"description_en"} label="Descrizione EN" errors={errors} />

                      </div>
                      <hr/>
                      <div className="my-3">
                        <h2 className="mt-3">Campi per entrambe le lingue</h2>

                        {/*<Field
                            name="address"
                            label="Address"
                            value={ location.address || ''}
                            component={GmapsPlacesAutocompleteFormikField}
                            options={{}}
                          />*/}

                          <TextInputFormikField name={"address"} label="Indirizzo(Esempio:Via Montenapoleone 120, 20121, Milano, MI" touched={touched} errors={errors} />

                          <TextInputFormikField name={"latitude"} label="Latitudine" touched={touched} errors={errors} />

                          <TextInputFormikField name={"longitude"} label="Indirizzo" touched={touched} errors={errors} />

                        <TextInputFormikField name={"phonenumber"} label="Numero di telefono" touched={touched} errors={errors} />

                        <TextInputFormikField name={"email"} label="Email" touched={touched} errors={errors} />

                        <FileUploadInputFormikField setFieldValue={setFieldValue} label={'Immagine Location'} name={'image_url'} values={values} errors={errors} touched={touched} currentImage={location.image_url} />

                      </div>
                       <div className="form-group">
                           <button type="submit" className="btn btn-primary mr-2">{section === 'create' ? 'Salva nuova' : 'Salva modifiche'} location</button>
                           <button type="reset" className="btn btn-info text- mr-2">Resetta campi</button>
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
      longitude: '',
      latitude: '',
      description_it: '',
      description_en: '',
      category_id: '',
      street_id: '',
      id: ''
  },
  yupSchema: {
      metadescription_it: Yup.string()
        .min(6, 'Meta Description deve avere almeno 6 caratteri')
         .required('Meta Description richiesta'),
      metadescription_en: Yup.string()
        .min(6, 'Meta Description deve avere almeno 6 caratteri')
         .required('Meta Description richiesta'),
      name_it: Yup.string()
         .min(6, 'Name IT deve avere almeno 6 caratteri')
          .required('Nome IT richiesto'),
      name_en: Yup.string()
         .min(6, 'Name EN deve avere almeno 6 caratteri')
          .required('Nome EN richiesto'),
      address: Yup.string()
         .min(15, 'Indirizzo deve essere almeno di 15 caratteri')
          .required('Indirizzo è richiesto'),
      phonenumber: Yup.string()
         .min(8, 'Numero di telefono deve essere almeno di 8 caratteri')
          .required('Numero di telefono richiesto'),
      email: Yup.string()
         .min(15, 'Email deve essere almeno di 8 caratteri')
          .required('Email richiesta'),
      description_it:  Yup.string()
         .min(30, 'Descrizione IT deve essere almeno di 30 caratteri')
          .required('Descrizione IT è richiesta'),
      description_en:  Yup.string()
         .min(30, 'Descrizione EN deve essere almeno di 30 caratteri')
          .required('Description EN è richiesta'),
       category_id: Yup.string().
          required('Seleziona la categoria della location'),
       street_id: Yup.string().
          required('Seleziona la via della location')
  },
  pagesAvailable: [],
}
