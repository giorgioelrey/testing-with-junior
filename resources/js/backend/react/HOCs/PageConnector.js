import axios from 'axios';
import React, { Component } from "react";
import ErrorsAlert from './../components/ErrorsAlert';

const PageConnector = ((WrappedComponent) => {

    return class EventsManager extends Component {

        constructor(props){

          super(props);


          this.state = { isLoading: true, pages: [], page:{}, apiErrors: [] }

          this.getAllPages = this.getAllPages.bind(this);
          this.getPageById = this.getPageById.bind(this);
          this.updatePage = this.updatePage.bind(this);

        }

        async componentDidMount(){

          console.log('hoc props componentDidMount Page Connector', this.props)

          let apiResponse;

          try {

            switch(this.props.section){

              case 'list': apiResponse = await this.getAllPages();
                          console.log(apiResponse)
                           this.setState({ pages: apiResponse.data.pages, isLoading: false })
                           ; break;
              case 'show': case 'edit': apiResponse = await this.getPageById(this.props.pageId)
                          this.setState({ page: apiResponse.data.page, isLoading: false })
                          ; break;

              default: this.setState({ isLoading: false }); break;
            }

          } catch(error){

             console.log('hocs error call',error.response.data); this.setState({ apiErrors: [error.response.data.message]})
          }

        }

        getAllPages(){

          console.log('sto per fare la chiamata dal hoc, getAllPages')

         return axios({
           url: `/api/admin/pages/all`,
           method: 'get',
           headers: {
             'X-Requested-With': 'XMLHttpRequest',
             'Authorization' : 'Bearer ' + this.props.user.token},
           responseType: 'json',
         })


       }

        getPageById(pageId){
          
         return axios({
           url: `/api/admin/pages/show/id/${pageId}`,
           method: 'get',
           headers: {
             'X-Requested-With': 'XMLHttpRequest',
             'Authorization' : 'Bearer ' + this.props.user.token},
           responseType: 'json',
         })

       }

        updatePage(updatedPage){

          return axios({
            url: '/api/admin/pages/update',
            data: updatedPage,
            method: 'post',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization' : 'Bearer ' + this.props.user.token},
            responseType: 'json',
          })

       }


        render(){

          console.log('pagesConnector', this.props)

          if (this.state.apiErrors.length > 0)  return (<ErrorsAlert errors={this.state.apiErrors} />)

          return this.state.isLoading ? (<div>Loading data...</div>): <WrappedComponent {...this.state} {...this.props} updatePage={this.updatePage} pagesAvailable={this.state.pages}/>

        }

    }
  })

export default PageConnector;
