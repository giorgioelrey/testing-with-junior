import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import PagesList from './PagesList';
import PageCreateEdit from './PageCreateEdit';

const PagesManagementPage = (props) => {

  let contentArea;

  switch(props.section) {

    case 'list':
      contentArea = (<PagesList {...props} />)
      break;
    case 'edit':
        contentArea = (<PageCreateEdit {...props} pageId={props.match.params.id}/>)
        break;
  default:
    contentArea = (<div>not chosen</div>)
  }

    return (
        <Fragment>
            {contentArea}
        </Fragment>
    );

}

export default withRouter(PagesManagementPage);
