import React, {Component, Fragment} from 'react';

const PagesManagementPage = (props) => {

  let contentArea;

  switch(props.section) {

    case 'list':
      contentArea = (<PagesList {...props} />)
      break;
    case 'show':
      contentArea = (<PagesShow {...props} pageId={props.match.params.id}/>)
      break;
    case 'edit':
        contentArea = (<PagesCreateEdit {...props} pageId={props.match.params.id}/>)
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
