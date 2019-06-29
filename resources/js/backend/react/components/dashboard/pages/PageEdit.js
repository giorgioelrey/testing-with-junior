import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PageForm from './PageForm';
import {Link} from 'react-router-dom';
import ErrorsAlert from './../../ErrorsAlert';
import ImageUploader from './ImageUploader';

//Helpers
import PageConnector from './../../../HOCs/PageConnector';

const PageEdit =  ({page, updatePage, history, pageId, section }) => {

  console.log('PageEdit', page);

  //TODO: CONTROLLARE IL JSON PAGE E CREARE UN initialValues per il Form
  //HOC per creare i field dinamicamente ????

  const [submissionErrors, setSubmissionErrors] = useState([]);

  const pageUpdate = async (fields) => {

    try {

      const {data} = await updatePage(fields);

      console.log('success', data);

      history.push('/admin/dashboard/pages');

    } catch(error){

      console.log('error submit', error);

      setSubmissionErrors([error.response.data.message]);

    }

  }

  let submitErrors = submissionErrors.length > 0 && (<ErrorsAlert errors={submissionErrors} />) || null;

  return (
    <Fragment>
      <div className="container" id="create-edit-news-page">

              <h1>Edit your page</h1>
              {submitErrors}

                <PageForm
                onSubmit={pageUpdate}
                page={page}
                />

      </div>
    </Fragment>
  );

}

export default withRouter(PageConnector(PageEdit));
