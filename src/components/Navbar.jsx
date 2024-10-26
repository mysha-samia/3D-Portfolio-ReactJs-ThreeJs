import React, { useEffect, useState } from 'react';
//link is used to navigate things from our react DOM
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import {mysha, logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" // meaning top of the page
          className="flex items-center gap-2" onClick={() => { //special react domlink
            setActive(""); //it will take trace up where we are on the page
            window.scrollTo(0, 0);//this will scroll to on the top of the page
          }}>
          {/* within that link we ant to add a self closing image */}
          <img src={mysha} alt='logo-anika' className='w-9 h-9 object-conatin rounded-full'></img>
          <p className="text-white text-[18px] font-bold cursor pointer flex ">Mysha &nbsp;
            <span className={`${styles.mediaQuery}sm:ml-2 sm:mt-0 mt-2 hidden sm:inline-block`}>| Portfolio</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            //here in the arrow function we have to return each li item properly that is why we have to use first brcaket
            <li key={Link.id}
              className={`${active === Link.title ? "text-white" : "text-secondary"} 
            hover:text-white text-[18px] font-medium cursor-ponter`}
              onClick={() => {
                setActive(Link.title);// with this about e click korle woute #about show korbe
              }}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex felx-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object conatin cursor pointer" onClick={() => {
            setToggle(!toggle)
          }} >
          </img>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-5">
              {navLinks.map((Link) => (
                //here in the arrow function we have to return each li item properly that is why we have to use first brcaket
                <li key={Link.id}
                  className={`${active === Link.title ? "text-white" : "text-secondary"} 
            hover:text-white text-[18px] font-popins font-medium cursor-ponter`}
                  onClick={() => {
                    setToggle(!toggle);//after clicking any of the menu .the menubar will be automatically closed
                    setActive(Link.title);// with this about e click korle woute #about show korbe
                  }}>
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav> //dynamic class paddingx
  )
}

export default Navbar