import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ErrorsAlert from './../../ErrorsAlert';
import PostCard from './PostCard';

import * as postHelper from './../../../helpers/postHelper';

class NewsList extends Component {

  constructor(props){
    super(props);

    this.state = { posts: [], api_errors: []}
  }

componentDidMount(){

  //getAllPosts(success, fail)
  postHelper.getAllPosts(
    ({data}) => { console.log(data); this.setState({posts: data}) },
    (errors) => { this.setState({ api_errors: errors}) }
)


}


  render() {


      return (
        <React.Fragment>

            <div>
            <Link to="/admin/dashboard/news/create" className="btn btn-primary btn-lg">Add a new Post</Link>
            </div>

            <h1>Here's all your posts</h1>

            <div className="">
              {this.state.posts.length > 0 &&
                this.state.posts.map((post, idx) => (<PostCard key={idx} post={post} />)) || (<h2>No posts to show</h2>)}
            </div>


        </React.Fragment>
      );


  }
}

export default NewsList;
