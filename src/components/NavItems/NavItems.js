import React from 'react';

const NavItems = ({route}) => {
  return (
      <li className='m-5'><a href={route.path}>{route.name}</a></li>
  );
};

export default NavItems;