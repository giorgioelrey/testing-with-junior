import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import PostCard from './PostCard';
import PostConnector from './../../../HOCs/PostConnector';

const NewsList  = ({posts}) => (

  <React.Fragment>

      <div className="mb-3">
        <h1>Ecco tutti i post</h1>
        <Link to="/admin/dashboard/news/create" className="btn btn-primary ">Aggiungi un nuovo post</Link>
      </div>

      <div className="row">
          {posts.length > 0 && posts.map((post, idx) => (<PostCard key={idx} post={post} />)) ||
                        (<h2>Nessun post da mostrare</h2>)}
      </div>


  </React.Fragment>

);


export default PostConnector(NewsList);
