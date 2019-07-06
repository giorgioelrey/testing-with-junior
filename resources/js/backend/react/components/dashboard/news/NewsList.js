import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import PostCard from './PostCard';
import PostConnector from './../../../HOCs/PostConnector';

const NewsList  = ({posts}) => (

  <React.Fragment>

      <div className="d-flex justify-content-between align-items-center mb-3 w-75 flex-wrap">
        <h1>Here's all your posts</h1>
        <Link to="/admin/dashboard/news/create" className="btn btn-primary btn-lg">Add a new Post</Link>
      </div>

      <div className="row">
          {posts.length > 0 && posts.map((post, idx) => (<PostCard key={idx} post={post} />)) ||
                        (<h2>No posts to show</h2>)}
      </div>


  </React.Fragment>

);


export default PostConnector(NewsList);
