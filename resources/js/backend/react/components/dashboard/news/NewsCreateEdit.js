import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import NewsForm from './NewsForm';
import {Link} from 'react-router-dom';
import ErrorsAlert from './../../ErrorsAlert';
import ImageUploader from './ImageUploader';
import PostConnector from './../../../HOCs/PostConnector';

const NewsCreateEdit =  ({post, categories, updatePost, submitPost, history, pagesAvailable, postId, section }) => {

  console.log('NewsCreateEdit', post);
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

                <ImageUploader />
                <NewsForm
                onSubmit={postSubmit}
                pagesAvailable={pagesAvailable}
                post={post}
                categories={categories}
                />

      </div>
    </Fragment>
  );

}

export default withRouter(PostConnector(NewsCreateEdit));
