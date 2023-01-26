import React from 'react';
import {navData} from '../data'
import Socials from './Socials';

const NavMobile = () => {
  const { items } = navData

  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        {items.map((item, index) => {
          return <li key={index}>
            <a className="text-2xl font-primary uppercase" href={item.href}>{item.name}</a>
          </li>
        })}
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
    );
};

export default NavMobile;
