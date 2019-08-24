import React, { Fragment} from 'react';
import ReactQuill from 'react-quill';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextInputFormikField from './../forms/TextInputFormikField';
import WisiwygEditorFormikField from './../forms/WisiwygEditorFormikField';
import SelectFormikField from './../forms/SelectFormikField';
import FileUploadInputFormikField from './../forms/FileUploadInputFormikField';

const NewsForm = ({ post, categories, initialValues, yupSchema, pagesAvailable, onSubmit, section }) => {

    console.log('newform cats', categories)
    console.log('post', post)

    const FILE_SIZE = 160 * 2000;
    const SUPPORTED_FORMATS = [
     "image/jpg",
     "image/jpeg",
     "image/gif",
     "image/png"
   ];

    const formStartingValues = post && {
          image_url: null,
          metadescription_it: post.metadescription_it || '',
          metadescription_en: post.metadescription_en || '',
          title_it: post.title_it || '',
          title_en: post.title_en || '',
          postbodytop_it: post.postbodytop_it || '',
          postbodytop_en: post.postbodytop_en || '',
          postbodybottom_it: post.postbodybottom_it || '',
          postbodybottom_en: post.postbodybottom_en || '',
          category_id: post.category_id || '',
          id: post.id || ''
      } || initialValues;

      console.log('formStartingValues', formStartingValues)

    return(

        <Fragment>
        <Formik
               initialValues={formStartingValues}
               validationSchema={Yup.object().shape(yupSchema)}
               onSubmit={ (fields) => {onSubmit(fields)} }
               render={({ errors, status, touched, values, setFieldValue }) => (
                   <Form className="cms-form login">

                      <Field type="hidden" className="form-control" name="id" ></Field>

                      {categories.length > 0 &&
                       (<SelectFormikField name={"category_id"} label="Seleziona categoria del post" touched={touched} optionsTitle="Seleziona categoria" errors={errors} selectOptions={categories}
                          />) || null}
                      <hr/>
                      <div className="my-3">

                        <h2 >IT Contents</h2>

                        <TextInputFormikField name={"metadescription_it"} label="MetaDescription IT" touched={touched} errors={errors} />

                        <TextInputFormikField name={"title_it"} label="Titolo IT" touched={touched} errors={errors} />

                        <WisiwygEditorFormikField name={"postbodytop_it"} label="Corpo del testo superiore IT" errors={errors} withPhoto={false} />

                        <WisiwygEditorFormikField name={"postbodybottom_it"} label="Corpo del testo inferiore IT" errors={errors} withPhoto={true}/>

                      </div>
                      <hr/>
                      <div className="my-3">
                        <h2 className="mt-3">EN Contents</h2>

                          <TextInputFormikField name={"metadescription_en"} label="MetaDescription EN" touched={touched} errors={errors} />

                        <TextInputFormikField name={"title_en"} label="Titolo EN" touched={touched} errors={errors} />

                        <WisiwygEditorFormikField name={"postbodytop_en"} label="Corpo del testo superiore EN" errors={errors} withPhoto={false}/>

                        <WisiwygEditorFormikField name={"postbodybottom_en"} label="Copro del testo inferiore EN" errors={errors} withPhoto={true} />

                        {/*<Field
                           name="image_url"
                           component={FileUploadInputFormikField}
                           label={'Post Image'}
                           setFieldValue={setFieldValue}
                           values={values}
                           errors={errors}
                           touched={touched}
                         />*/}
                        <FileUploadInputFormikField setFieldValue={setFieldValue} label={'Immagine Post'} name={'image_url'} values={values} errors={errors} touched={touched} currentImage={post.image_url}/>

                      </div>
                       <div className="form-group">
                           <button type="submit" className="btn btn-primary mr-2">{section === 'create' ? 'Salva nuovo' : 'Salva modifiche'} post</button>
                           <button type="reset" className="btn btn-info text- mr-2">Reset</button>
                       </div>
                   </Form>
               )}
           />

        </Fragment>
    );

}


export default NewsForm;

NewsForm.defaultProps = {
  initialValues: {
      image_url: null,
      metadescription_it: '',
      metadescription_en: '',
      title_it: '',
      title_en: '',
      postbodytop_it: '',
      postbodytop_en: '',
      postbodytop_it: '',
      postbodytop_en: '',
      category_id: '',
      id: ''
  },
  yupSchema: {
      /*image_url:Yup
        .mixed()
        .required("A file is required")
        .test(
          "fileSize",
          "File too large",
          value => value && value.size <= FILE_SIZE
        )
        .test(
          "fileFormat",
          "Unsupported Format",
          value => value && SUPPORTED_FORMATS.includes(value.type)
        ),*/
      metadescription_it: Yup.string()
         .min(6, 'Meta Description deve avere almeno 6 caratteri')
          .required('Meta Description è richiesta'),
      metadescription_en: Yup.string()
         .min(6, 'Meta Description deve avere almeno 6 caratteri')
          .required('Meta Description è richiesta'),
      title_it: Yup.string()
         .min(6, 'Titolo IT deve avere almeno 6 caratteri')
          .required('Title è richiesto'),
      title_en: Yup.string()
         .min(6, 'Titolo EN deve avere almeno 6 caratteri')
          .required('Title è richiesto'),
      postbodytop_it:  Yup.string()
         .min(30, 'Corpo del testo superiore IT deve avere almeno 30 caratteri')
          .required('Corpo del testo superiore IT è obbligatorio'),
      postbodytop_en:  Yup.string()
         .min(30, 'Corpo del testo inferiore IT deve avere almeno 30 caratteri')
          .required('Corpo del testo inferiore IT è obbligatorio'),
      postbodybottom_it:  Yup.string()
         .min(30, 'Corpo del testo superiore EN deve avere almeno 30 caratteri')
          .required('Corpo del testo superiore EN è obbligatorio'),
      postbodybottom_en:  Yup.string()
         .min(30, 'Corpo del testo inferiore EN deve avere almeno 30 caratteri')
          .required('Corpo del testo inferiore EN è obbligatorio'),
       category_id: Yup.string().
          required('La categoria del post è richiesta')
  },
  pagesAvailable: [],
}
