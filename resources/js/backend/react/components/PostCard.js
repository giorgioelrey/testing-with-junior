import React from 'react';

const PostCard = (props) => (

  <div key={props.key} class="card" style="width: 18rem;">
    <img src={props.imgSrc} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{props.title || 'Sample title'}</h5>
      <p class="card-text">{props.text || 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
);

export default PostCard;
