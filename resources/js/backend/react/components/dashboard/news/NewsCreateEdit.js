import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import NewsForm from './NewsForm';
import {Link} from 'react-router-dom';
import ErrorsAlert from './../../ErrorsAlert';

//Helpers
import PostConnector from './../../../helpers/postHelper';

const NewsCreateEdit =  ({post, updatePost, submitPost, history, pagesAvailable, postId, section }) => {


  const [submissionErrors, setSubmissionErrors] = useState([]);

  const postSubmit = async (fields) => {

    try {

      const {data} = await (section === 'create' ?   submitPost(fields) : updatePost(fields));

      console.log('success', data);

      history.push('/admin/dashboard/news');

    } catch(error){

      console.log('error submit', error);

      setSubmissionErrors([error.response.data.message]);

    }

  }

  let submitErrors = submissionErrors.length > 0 && (<ErrorsAlert errors={submissionErrors} />) || null;

  return (
    <Fragment>
      <div className="container" id="create-edit-news-page">

              <h1>{section === 'create' ? 'Create' : 'Edit'} your post</h1>
              {submitErrors}

                <NewsForm
                onSubmit={postSubmit}
                pagesAvailable={pagesAvailable}
                post={post}
                />

      </div>
    </Fragment>
  );

}

export default withRouter(PostConnector(NewsCreateEdit));
