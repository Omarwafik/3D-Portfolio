import React, { useState } from 'react'
import logo from '../../assets/Logo-Images/Logo(1).png'
import {menu , close} from '../../assets'
import style  from './Navbr.module.css'
import { Link } from 'react-router-dom'
import { navLinks } from '../../info'
const Navbar = () => {
  let [active , setActive] =useState('')
  let [toggle , setToggle] =useState('False')
  return (
    <>
      <header className={`${style.header} w-full flex justify-between items-center fixed top-0 z-20 px-5 py-4 sm:px-18 lg:px-28 `} >
        <div className="logo flex items-center gap-4 cursor-pointer " onClick={()=>{setActive("");window.scrollTo(0,0)}}>
          <img src={logo} className=" rounded-[50%] w-[70px] " alt="" />
          <p className='text-xs md:text-base '>Omar Wafik <span>| <br className='sm:hidden '/> Front-End Dev.</span></p>
        </div>
         <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
            key={nav.id}
            className={`${
              active === nav.title ? "text-white" : "text-gray-400"
            } hover:text-white text-[12px] md:text-[15px] font-medium cursor-pointer transition duration-300`}
            onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

          <div className='sm:hidden  '>
            <img src={toggle?menu:close}className='w-[28px] cursor-pointer' onClick={()=>setToggle(!toggle)} alt="" />

            <div className={`${toggle? "hidden": "flex "} absolute top-22 right-2 min-w-[120px] z-10 rounded-xl ${style["black-gradient"]}`}>
                <ul className='list-none  flex flex-col gap-3  p-3'>
          {navLinks.map((nav) => (
            <li
            key={nav.id}
            className={`${
              active === nav.title ? "text-white" : "text-gray-400"
            } hover:text-white text-[14px] font-medium cursor-pointer transition duration-300`}
            onClick={() =>{ setActive(nav.title);setToggle(!toggle)}}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
            </div>
          </div>
        
      </header>
    </>
  )
}

export default Navbar
