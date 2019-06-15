import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import NewsForm from './NewsForm';
import {Link} from 'react-router-dom';
import ErrorsAlert from './../../ErrorsAlert';

//Helpers
import * as pagesHelper from './../../../helpers/pagesHelper';
import PostConnector from './../../../helpers/postHelper';

class NewsEdit extends Component {

  constructor(props){

    super(props);

    this.state = { serverErrors: [], pagesAvailable: ['Travel', 'Blog', 'Hotels'], apiError: null, isLoading: true, post: {}};

    this.onNewsEditSubmit = this.onNewsEditSubmit.bind(this);

  }


  componentDidMount(){
    /*
    postHelper.getPost(this.props.postId,
      ({data}) => {

        console.log('success', data);

        this.setState({ post: data, isLoading: false });
      },
      (error) => {

        console.log('error submit', error)
        this.setState({ serverErrors: [error] , isLoading: false });

      }
    );

    */
  }


  async onNewsEditSubmit(fields) {
        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 3));

         postHelper.updatePost(fields,
             ({data}) => {

               console.log('success', data);

               this.props.history.push('/admin/dashboard/news');

             },
             (error) => {

               console.log('error submit', error);

               this.setState({errors: error});

             }
         )
    }

  render() {

    let serverErrors = this.state.serverErrors.length > 0 && (<ErrorsAlert errors={this.state.serverErrors} />) || null;

    return (
      <Fragment>
        <div className="container" id="create-news-page">

                <h1>Edit your post</h1>
                {this.state.apiError }
                {serverErrors}
                {!this.state.isLoading && (
                  <NewsForm
                  onSubmit={this.onNewsEditSubmit}
                  pagesAvailable={this.state.pagesAvailable}
                  post={this.state.post}
                  />
                )}


        </div>
      </Fragment>
    );
  }

}

export default withRouter(NewsEdit);
