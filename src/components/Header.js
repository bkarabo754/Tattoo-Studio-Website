import React, { useState, useEffect } from 'react';
import {headerData} from '../data'
import Nav from './Nav'
import NavMobile from './NavMobile'
import Socials from './Socials'
import { TiThMenuOutline } from 'react-icons/ti'


const Header = () => {
  const {logo} = headerData;

  const [isActive, setIsActive] = useState(false)

  const [navMobile, setNavMobile] = useState(false)

  //scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? 'h-[100px] lg:h-[110px] shadow-lg' : 'h-[120px] lg:h-[150px]'} fixed left-0 right-0 top-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}>
    <div className='flex justify-between items-center h-full pl-[50px] pr-[60px]'>
        <a href="/">
          <img className="w-[188px] h-[90px]" src={logo} alt="" />
        </a>
        <div className="hidden xl:flex">
            <Nav />
        </div>

        <div className='xl:hidden basolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer'>
          <TiThMenuOutline className="text-3xl"/>
        </div>
        <div className="fixed bg-red-500 w-full h-full left-0 -z-10 transition-all duration-300">
          <NavMobile />
        </div>
    </div>
    </header>

  )
};

export default Header;


