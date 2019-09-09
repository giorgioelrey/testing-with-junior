import React, { Fragment} from 'react';
import SidebarLink from './SidebarLink';

 const Sidebar = (props) => {

    const {navItemsData} = props;

    const navItems = navItemsData.map((navItem, idx) => <SidebarLink key={idx} {...navItem} {...props} />)

    return (
      <nav className="bg-light sidebar">
        <div className="my-3 my-sm-5">
          <ul className="nav flex-row flex-sm-column">
              {navItems}
          </ul>
        </div>
      </nav>

    );

};

export default Sidebar;

//https://feathericons.com/
Sidebar.defaultProps = {
  navItemsData: [
    {
      linkEndpoint: 'pages',
      linkName: 'Pagine',
      svgClass : 'feather-book-open',
      innerSvg: (<Fragment><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></Fragment>)
    },
    {
      linkEndpoint: 'news',
      linkName: 'Press/Archivio',
      svgClass : 'feather-layers',
      innerSvg: (<Fragment><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></Fragment>),
      options: [
        { linkName: 'Crea nuovo', linkEndpoint: 'create' },
      ],
    },
    {
      linkEndpoint: 'events',
      linkName: 'Eventi',
      svgClass : 'feather-calendar',
      innerSvg: (<Fragment><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></Fragment>),
      options: [
        { linkName: 'Crea nuovo', linkEndpoint: 'create' },
      ],
    },
    {
      linkEndpoint: 'locations',
      linkName: 'Locations',
      svgClass : 'feather-map-pin',
      innerSvg: (<Fragment><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></Fragment>),
      options: [
        { linkName: 'Crea nuovo', linkEndpoint: 'create' },
      ],
    },
  ]
}

//disabled links
/*
{
  linkEndpoint: 'main'  ,
  linkName: 'Control Panel',
  svgClass : 'feather-home',
  innerSvg: (<Fragment><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></Fragment>),
},
{
  linkEndpoint: 'users'  ,
  linkName: 'Users',
  svgClass : 'feather-users',
  innerSvg: (<Fragment><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></Fragment>)
},

*/
