import React from 'react';

const PostCard = ({ post}) => (

  <div className="card" style={{'width': '18rem'}}>
    <img src={post.imgSrc || null} className="card-img-top" alt="...where is the image"/>
    <div className="card-body">
      <h5 className="card-title">{post.title || 'Sample title'}</h5>
      <h3>{post.subtitle || 'Sample subtitle'}</h3>
      <p className="card-text">{post.post_body || 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}</p>
      <a href="#" className="btn btn-primary">Open</a>
    </div>
</div>
);

export default PostCard;
