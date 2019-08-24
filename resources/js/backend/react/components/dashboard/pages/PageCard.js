import React from 'react';
import { Link } from 'react-router-dom';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';

const PageCard = ({ page }) => {

  const pageThumbnail = ((page) => {
    //Get array from each field object in contents[ [fieldName, fieldObject ], [fieldName, fieldObject ]...]
    const pageImages = Object.entries(JSON.parse(page.contents))
    //filter it where fieldObject.type == image
                          .filter((field) => field[1].type == 'image');
    //return first position field imageLink if filtered array isnot empty or null
    return pageImages.length > 0 && ('/storage/' + pageImages[0][1].data.split('/')[1]) || null;

  })(page);

  return (
    <div className="col-md-6 col-xl-4 px-2 mb-5">

      <div className="card">
        <img src={pageThumbnail || placeholder_post_image} className="card-img-top" alt="...where is the image"/>
        <div className="card-body">
          <h2 className="card-title">{page.name || 'Sample title'}</h2>
          <h5>Data ultima modifica: {page.updated_at}</h5>
            <Link to={`/admin/dashboard/pages/edit/${page.id}`} className="btn btn-warning btn-lg ml-3">Modifica pagina</Link>
        </div>
      </div>

    </div>
  )

};

export default PageCard;
