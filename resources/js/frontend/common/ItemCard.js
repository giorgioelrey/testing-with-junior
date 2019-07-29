import React from 'react';

const ItemCard = ({type, item, userLanguage }) => {

  const itemTypeLoc = {
    archivio: {
      it: 'archivio-storico',
      en: 'heritage-archive'
    },
    press: {
      it: 'press',
      en: 'press'
    },
    eventi: {
      it: 'eventi',
      en: 'event'
    }

  };

  const link = `/${userLanguage}/${itemTypeLoc[type][userLanguage]}/${item['slug_'+userLanguage]}`;

  const bodyElement = type == 'eventi' ?
      (<p>{item.address}</p>)
      :
      (<p dangerouslySetInnerHTML={{__html: item['postbodytop_' +  userLanguage]}}/>);


    return (

        <div className='col-md-4 carta'>
              <div className='box'>
            <img className="img-box" src={item.image_url} alt="no image" />
            </div>
            <div className='corpo-post'>

            <a href={link}>
              <h1>{item['title_'+userLanguage]} </h1>
            </a>

            {bodyElement}


          </div>
        </div>

      );

}

export default ItemCard;
