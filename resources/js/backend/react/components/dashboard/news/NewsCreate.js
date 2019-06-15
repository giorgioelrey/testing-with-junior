import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import NewsForm from './NewsForm';
import {Link} from 'react-router-dom';
import ErrorsAlert from './../../ErrorsAlert';

//Helpers
import * as pagesHelper from './../../../helpers/pagesHelper';
import PostConnector from './../../../helpers/postHelper';

class NewsCreate extends Component {

  constructor(props){

    super(props);

    this.state = { serverValidationErrors: [], pagesAvailable: ['Travel', 'Blog', 'Hotels'], apiError: this.props.api_errors};

    this.onNewPostSubmit = this.onNewPostSubmit.bind(this);

  }

/*
  componentDidMount(){

    //getAllPagesAvailableForPublishing(success, fail)
    pagesHelper.getAllPages(
      ({data}) => { console.log('pages found', data); this.setState({pagesAvailable: data}) },
      (error) => {console.log(error); this.setState({ apiError: error}) }
    )

  }
*/

  async onNewPostSubmit(fields) {
        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 3));

        this.props.submitPost(fields)
          .then(({data}) => {

            console.log('success', data);

            this.props.history.push('/admin/dashboard/news');

          })
          .catch((error) => {

            console.log('error submit', error);

            this.setState({errors: error});

          })
    }

  render() {

    let serverErrors = this.state.serverValidationErrors.length > 0 && (<ErrorsAlert errors={this.state.serverValidationErrors} />) || null;

    return (
      <Fragment>
        <div className="container" id="create-news-page">

                <h1>Create a new post</h1>
                {this.state.apiError[0] }
                {serverErrors}

                <NewsForm
                onSubmit={this.onNewPostSubmit}
                pagesAvailable={this.state.pagesAvailable}
                />

        </div>
      </Fragment>
    );
  }

}

export default withRouter(PostConnector(NewsCreate));
