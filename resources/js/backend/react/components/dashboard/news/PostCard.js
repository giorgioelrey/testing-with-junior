import React from 'react';
import { Link } from 'react-router-dom';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';

const PostCard = ({ post }) => {

  return (
    <div className="col-md-6 col-xl-4 px-2 mb-5">
      <div className="card" style={{overflow: 'hidden'}}>
        <div className="card-img-top text-center" style={{overflow: 'hidden', height: '250px'}}>
        <img src={post.image_url || placeholder_post_image}  alt="...where is the image" style={{position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)',height: '250px', width: 'auto'}}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title_it || 'Sample title'}</h5>
            <Link to={`/admin/dashboard/news/show/${post.id}`} className="btn btn-primary ">Apri Post</Link>
            <Link to={`/admin/dashboard/news/edit/${post.id}`} className="btn btn-warning  ml-3">Modifica post</Link>
        </div>
      </div>
    </div>
  )

};

export default PostCard;
