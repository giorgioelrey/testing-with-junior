import React, {Component, Fragment} from 'react';
import PostCard from './PostCard';


class NewsPage extends Component {


  render() {

    return (
        <Fragment>

              <h1>Here's all your posts</h1>

              <div className="">
                {this.props.posts && this.props.posts.map((post, idx) => (<PostCard key={idx} {...post} />)) || (<h2>No posts to show</h2>)}
              </div>


        </Fragment>
    );
  }
}

export default NewsPage;
