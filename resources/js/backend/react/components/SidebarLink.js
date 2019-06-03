import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

const SidebarLink = ({ linkEndpoint, linkName, svgClass, innerSvg, width, height, options }) => {

  let optionsList = options &&  (<ul className="flex-column">
                                  {options.map((option, idx) => (<Link className="d-block" key={idx}>{option}</Link>))}
                                </ul>) || null

  return(
      <li className="nav-item">
        <Link className="nav-link d-flex align-items-center" to={`/admin/dashboard/${linkEndpoint}`}>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 24}
            height={height || 24}
            viewBox={`0 0 ${width || 24} ${height || 24}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`feather ${svgClass} mr-3`}>
            {innerSvg}
          </svg>
          {linkName}
        </Link>
        {optionsList}
      </li>
    );
}

export default SidebarLink;
