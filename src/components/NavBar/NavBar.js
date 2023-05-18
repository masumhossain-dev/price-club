import React, { useState } from 'react';
import NavItems from '../NavItems/NavItems';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
  const [click, setClick] = useState(false);
  const routes = [
    {id:1, name: 'Home', path: '/home'},
    {id:2, name: 'Products', path: '/prosucts'},
    {id:3, name: 'Order', path: '/order'},
    {id:4, name: 'Contact', path: '/contact'},
    {id:5, name: 'About', path: '/about'}
  ]
  return (
    <nav>
      <div className='md:hidden ms-7'>
      {
        click ?<XMarkIcon onClick={()=>setClick(!click)} className="h-12 w-12" /> :
        <Bars3Icon onClick={()=>setClick(!click)} className="h-12 w-12" />
      }
      </div>
      <ul className={`md:flex justify-center text-2xl absolute md:static sm:text-left ease-in duration-500 bg-gray-800 text-white ${click?'top-12': 'top-[-280px]'}`}>
        {
          routes.map(route=><NavItems
            key={route.id}
            route={route}
            ></NavItems>)
        }
      </ul>
    </nav>
  );
};

export default NavBar;