import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as postHelper from './../../../helpers/postHelper';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';


const NewsShow = (props) => {

  const [ post, setPost ] = useState({});
  const [ isLoading, setIsLoading ] =  useState(false);
  const [ apiError, setApiError ] = useState(null);

  useEffect(() => {

    console.log('post loading id', props.postId);

    setIsLoading(true);

    postHelper.getPost(props.postId,
      ({data}) => {

        console.log('success', data);

        setPost(data);
        setIsLoading(false);
      },
      (error) => {

        console.log('error submit', error)
        setApiError(error);
        setIsLoading(false);
      }
    );

  }, []);

  const deleteSingleNews = (id) => {

    //axios call for deletion
    postHelper.deletePost(id,
      ({data}) => {

        console.log('success', data);
        props.history.push('/admin/dashboard/news');

      },
      (error) => {

        console.log('error submit', error);
        setApiError(error);
        setIsLoading(false);
      }
    );

  }

    return (
      <Fragment>
        <div className="card mb-3">
          <img src={post && post.image || placeholder_post_image} className="card-img-top" alt="..." style={{maxWidth: '100%'}}/>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.post_body}</p>
            <p className="card-text"><small className="text-muted">{post.created_at}</small></p>

              <Link to={`/admin/dashboard/news/edit/${post.id}`} className="btn btn-warning btn-lg mr-3">Edit this post</Link>
            <a onClick={deleteSingleNews.bind(this, post.id)} className="btn btn-danger btn-lg text-white">Delete this post</a>


          </div>
        </div>
      </Fragment>
    );


}

export default withRouter(NewsShow);
