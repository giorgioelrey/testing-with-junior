import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PagesForm from './PagesForm';
import {Link} from 'react-router-dom';
import ErrorsAlert from './../../ErrorsAlert';
import ImageUploader from './ImageUploader';

//Helpers
import PageConnector from './../../../HOCs/PageConnector';

const PageEdit =  ({page, updatePage, history, pageId, section, user }) => {

  console.log('PageEdit', page);

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
                user={user}
                />

      </div>
    </Fragment>
  );

}

export default withRouter(PageConnector(PageEdit));
