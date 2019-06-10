import React from 'react';
import {Link} from 'react-router-dom';

const NewsList = (props) => {


    return (
      <React.Fragment>

          <div>
          <Link to="/admin/dashboard/news/create" className="btn btn-primary btn-lg">Add a new Post</Link>
          </div>

          <h1>Here's all your posts</h1>

          <div className="">
            {props.posts && props.posts.map((post, idx) => (<PostCard key={idx} {...post} />)) || (<h2>No posts to show</h2>)}
          </div>


      </React.Fragment>
    );


}

export default NewsList;
