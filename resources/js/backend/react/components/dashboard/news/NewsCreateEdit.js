import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import NewsForm from './NewsForm';
import ErrorsAlert from './../../ErrorsAlert';
import PostConnector from './../../../HOCs/PostConnector';

const NewsCreateEdit =  ({post, categories, updatePost, submitPost, history, pagesAvailable, postId, section }) => {

  const [submissionErrors, setSubmissionErrors] = useState([]);

  const postSubmit = async (fields) => {

    let formData = new FormData();
    for (var key in fields) {
      formData.append( key, fields[key] )
    }

    try {

      const {data} = await (section === 'create' ?   submitPost(formData) : updatePost(formData));

      history.push('/admin/dashboard/news');

    } catch(error){

      setSubmissionErrors([error.response.data.message]);

    }

  }

  let submitErrors = submissionErrors.length > 0 && (<ErrorsAlert errors={submissionErrors} />) || null;

  return (
    <Fragment>
      <div className="container" id="create-edit-news-page">

              <h1>{section === 'create' ? 'Crea nuovo' : 'Modifica'} post</h1>
              {submitErrors}

                <NewsForm
                onSubmit={postSubmit}
                pagesAvailable={pagesAvailable}
                post={post}
                categories={categories}
                section={section}
                />

      </div>
    </Fragment>
  );

}

export default withRouter(PostConnector(NewsCreateEdit));
