import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import PagesList from './PagesList';
import PageEdit from './PageEdit';

const PagesManagementPage = (props) => {

  let contentArea;

  switch(props.section) {

    case 'list':
      contentArea = (<PagesList {...props} />)
      break;
    case 'edit':
        contentArea = (<PageEdit {...props} pageId={props.match.params.id}/>)
        break;
  default:
    contentArea = (<div>non scelto</div>)
  }

    return (
        <Fragment>
            {contentArea}
        </Fragment>
    );

}

export default withRouter(PagesManagementPage);
