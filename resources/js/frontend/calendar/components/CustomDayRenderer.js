import React from 'react';

const CustomDayRenderer = ({ handleClick, date }) => {
  return (
    <a
      className="Day-inner"
      href={'#' + date.format('YYYY-MM-DD')}
      onClick={() => handleClick(date)}
    >
      {date.format('D')}
    </a>
  );
};

export default CustomDayRenderer;
