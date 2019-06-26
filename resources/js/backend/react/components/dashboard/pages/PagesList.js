import React, { Fragment} from 'react';
import PageCard from './PageCard';
import PageConnector from './../../../HOCs/PageConnector';

const PagesList  = ({pages}) => (

  <Fragment>

      <div className="d-flex justify-content-between align-items-center mb-3 w-75 flex-wrap">
        <h1>Here's area all the pages available</h1>
      </div>

      <div className="row">
          {pages.length > 0 &&
            pages.map((page, idx) =>
            (<PageCard key={idx} page={page} />)) ||
                        (<h2>No pages to show</h2>)}
      </div>


  </Fragment>

);


export default PageConnector(PagesList);
