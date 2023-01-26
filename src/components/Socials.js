import React from 'react';
import { socialData } from '../data';

const Socials = () => {
  return (
  <ul className="flex justify-center items-center gap-x-[30px]">
    {socialData.map((item, index) =>{
      return (
        <li key={index}>
          <a href={item.href}>{item.icon}</a>
        </li>
      )
    })}
  </ul>);
};

export default Socials;
