import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostConnector from './../../../HOCs/PostConnector';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';


const NewsShow = ({post, deletePost, history}) => {

  const deleteSingleNews = (id) => {

    //axios call for deletion
    deletePost(id)
      .then(({data}) => {

        history.push('/admin/dashboard/news');

      })
      .catch((error) => {

      })

  }

    return (
      <Fragment>
        <div className="show-card card mb-3 border-dark">
          <img src={post && post.image_url || placeholder_post_image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Titolo:<br/>{post.title_it}</h5>
              <hr/>
            <p className="card-text" dangerouslySetInnerHTML={{ __html:'<h5>Descrizione Superiore IT</h5><br>' + post.postbodytop_it}}></p>
              <hr/>
            <p className="card-text"><small className="text-muted">{post.created_at}</small></p>
              <div className="d-flex justify-content-around flex-sm-none">
              <Link to={`/admin/dashboard/news/edit/${post.id}`} className="btn btn-warning  mr-3">Modifica questo post</Link>
            <a onClick={deleteSingleNews.bind(this, post.id)} className="btn btn-danger  text-white">Elimina il  post</a>
              </div>

          </div>
        </div>
      </Fragment>
    );


}

export default withRouter(PostConnector(NewsShow));
