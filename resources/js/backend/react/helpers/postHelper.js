import axios from 'axios';
import React, { Component } from "react";
import ErrorsAlert from './../components/ErrorsAlert';

const PostConnector = ((WrappedComponent) => {

    return class PostLoader extends Component {

        constructor(props){

          super(props);


          this.state = {
            isLoading: true,
            posts: [],
            post: {},
            apiErrors: [],
            categories: []
          }

          this.getAllPosts = this.getAllPosts.bind(this);
          this.getPost = this.getPost.bind(this);
          this.deletePost = this.deletePost.bind(this);
          this.submitPost = this.submitPost.bind(this);
          this.updatePost = this.updatePost.bind(this);
          this.getCategories = this.getCategories.bind(this);

        }

        async componentDidMount(){

          console.log('hoc props', this.props)

          let apiResponse;
          const categories = await this.getCategories();

          console.log('categorie', categories)

          try {

            switch(this.props.section){

              case 'list': apiResponse = await this.getAllPosts();
                          console.log(apiResponse)
                           this.setState({ posts: apiResponse.data.posts, isLoading: false })
                           ; break;
              case 'show': case 'edit': apiResponse = await this.getPost(this.props.postId)
                          this.setState({ post: apiResponse.data.post, isLoading: false, categories: categories.data.categories })
                          ; break;

              default: this.setState({ categories: categories.data.categories, isLoading: false });
            }

          } catch(error){

             console.log('hocs error call',error.response.data); this.setState({ apiErrors: [error.response.data.message]})
          }

        }

        getCategories(){
          return axios({
            url: `/api/admin/categories/entity/post`,
            method: 'get',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization' : 'Bearer ' + this.props.user.token},
            responseType: 'json',
          })
        }

        getAllPosts(){

          console.log('sto per fare la chiamata dal hoc')

         return axios({
           url: `/api/admin/post/all`,
           method: 'get',
           headers: {
             'X-Requested-With': 'XMLHttpRequest',
             'Authorization' : 'Bearer ' + this.props.user.token},
           responseType: 'json',
         })
       }

        getPost(postId){

         return axios({
           url: `/api/admin/post/${postId}`,
           method: 'get',
           headers: {
             'X-Requested-With': 'XMLHttpRequest',
             'Authorization' : 'Bearer ' + this.props.user.token},
           responseType: 'json',
         })

       }

        submitPost(newPost){

          return axios({
            url: '/api/admin/post/store',
            data: newPost,
            method: 'post',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization' : 'Bearer ' + this.props.user.token},
            responseType: 'json',
          })

       }

        updatePost(updatedPost){

          return axios({
            url: '/api/admin/post/update',
            data: updatedPost,
            method: 'post',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization' : 'Bearer ' + this.props.user.token},
            responseType: 'json',
          })

       }

        deletePost(postId) {

          return axios({
            url: `/api/admin/post/destroy/${postId}`,
            method: 'delete',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization' : 'Bearer ' + this.props.user.token},
            responseType: 'json',
          })

       }


        render(){

          if (this.state.apiErrors.length > 0)  return (<ErrorsAlert errors={this.state.apiErrors} />)

          //if (!this.state.isLoading && this.state.posts.length === 0 ) return <ErrorsAlert errors={['No posts found']} />

          return this.state.isLoading ? (<div>Loading data...</div>): <WrappedComponent {...this.state} {...this.props} deletePost={this.deletePost} updatePost={this.updatePost} submitPost={this.submitPost}  pagesAvailable={ ['Travel', 'Blog', 'Hotels']}/>

        }

    }
  })

export default PostConnector;
