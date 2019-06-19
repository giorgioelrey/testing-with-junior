import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostConnector from './../../../helpers/postHelper';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';


const NewsShow = ({post, deletePost, history}) => {

  const deleteSingleNews = (id) => {

    //axios call for deletion
    deletePost(id)
      .then(({data}) => {

        console.log('success', data);
        history.push('/admin/dashboard/news');

      })
      .catch((error) => {

        console.log('error submit', error);

      })

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

export default withRouter(PostConnector(NewsShow));
