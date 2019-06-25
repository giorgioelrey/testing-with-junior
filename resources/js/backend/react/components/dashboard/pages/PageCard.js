import React from 'react';
import { Link } from 'react-router-dom';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';

const PageCard = ({ page }) => {

  return (
    <div className="col-md-6 col-xl-4 px-2 mb-5">

      <div className="card">
        <img src={page && page.main_image_url || placeholder_post_image} className="card-img-top" alt="...where is the image"/>
        <div className="card-body">
          <h2 className="card-title">{page.name || 'Sample title'}</h2>
          <h5>Last update: {page.updated_at}</h5>
            <Link to={`/admin/dashboard/pages/edit/${page.id}`} className="btn btn-warning btn-lg ml-3">Edit this page</Link>
        </div>
      </div>
    </div>
  )

};

export default PageCard;
