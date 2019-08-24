import React from 'react';
import { Link } from 'react-router-dom';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';

const PostCard = ({ post }) => {

  return (
    <div className="col-md-6 col-xl-4 px-2 mb-5">
      <div className="card">
        <div className="card-img-top text-center">
        <img src={post.image_url || placeholder_post_image}  alt="...where is the image" style={{maxHeight: '250px', maxWidth: '100%'}}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title_it || 'Sample title'}</h5>
         {/* <p className="card-text">{post.postbody_it || 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}</p>*/}
            <Link to={`/admin/dashboard/news/show/${post.id}`} className="btn btn-primary btn-lg">Apri Post</Link>
            <Link to={`/admin/dashboard/news/edit/${post.id}`} className="btn btn-warning btn-lg ml-3">Modifica post</Link>
        </div>
      </div>
    </div>
  )

};

export default PostCard;
