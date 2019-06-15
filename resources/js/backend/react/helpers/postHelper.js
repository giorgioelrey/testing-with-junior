import axios from 'axios';
import React, { Component } from "react";
import ErrorsAlert from './../components/ErrorsAlert';

 export function getAllPosts(token){

   console.log('sto per fare la chiamata dal hoc')

  return axios({
    url: `/api/admin/post/all`,
    method: 'get',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization' : 'Bearer ' + token},
    responseType: 'json',
  })


}

 export function getPost(postId, success, fail){

  axios.get(`/api/admin/post/${postId}`)
    .then(res => {

      success(res.data);

    })
    .catch(error => {

      fail(error.response.data);

    })


}


 export function submitPost(newPost, success, fail){

  axios.post('/api/admin/post/store', newPost)
    .then(res => {

      success(res.data);

    })
    .catch(error => {

      fail(error.response.data);

    })


}

 export function updatePost(updatedPost, success, fail){

  axios.post('/api/admin/post/update', updatedPost)
    .then(res => {

      success(res.data);

    })
    .catch(error => {

      fail(error.response.data);

    })


}
 export function deletePost(postId, success, fail){

  axios.delete(`/api/admin/post/destroy/${postId}`)
    .then(res => {

      success(res.data);

    })
    .catch(error => {

      fail(error.response.data);

    })


}



const PostConnector = ((WrappedComponent) => {


    return class PostLoader extends Component {

        constructor(props){

          super(props);


          this.state = {
            isLoading: true,
            posts: [],
            api_errors: []
          }

        }

        componentDidMount(){

          console.log('hoc props', this.props)


          getAllPosts(this.props.user.token)
            .then(res => {

              this.setState({posts: res.data.posts, isLoading: false})

            })
            .catch(error => {

             console.log('hocs error call',error.response.data); this.setState({ api_errors: [error.response.data.message]})

            })

        }


        render(){

          if (this.state.api_errors.length > 0)  return (<ErrorsAlert errors={this.state.api_errors} />)

          //if (!this.state.isLoading && this.state.posts.length === 0 ) return <ErrorsAlert errors={['No posts found']} />

          return this.state.isLoading ? (<div>Loading data...</div>): <WrappedComponent {...this.state} {...this.props}/>

        }

    }
  })

export default PostConnector;
