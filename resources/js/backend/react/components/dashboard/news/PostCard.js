import React from 'react';
import { Link } from 'react-router-dom';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';
import * as postHelper from './../../../helpers/postHelper';

const PostCard = ({ post }) => {

  return (
    <div className="col-md-6 col-xl-4 px-2 mb-5">

      <div className="card">
        <img src={post && post.image || placeholder_post_image} className="card-img-top" alt="...where is the image"/>
        <div className="card-body">
          <h5 className="card-title">{post.title || 'Sample title'}</h5>
          <h3>{post.subtitle || 'Sample subtitle'}</h3>
          <p className="card-text">{post.post_body || 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}</p>
            <Link to={`/admin/dashboard/news/show/${post.id}`} className="btn btn-primary">Open</Link>
        </div>
      </div>

    </div>
  )

};

export default PostCard;
