import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PagesForm from './PagesForm';
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

  let submitErrors = submissionErrors.length > 0 && (<ErrorsAlert errors={submissionErrors} />) || null;

  return (
    <Fragment>
      <div className="container" id="create-edit-news-page">

              <h1>Edit your page</h1>
              {submitErrors}

              <PagesForm
                page={page}
                setSubmissionErrors={setSubmissionErrors}
                updatePage={updatePage}
                history={history}
                />

      </div>
    </Fragment>
  );

}

export default withRouter(PageConnector(PageEdit));
