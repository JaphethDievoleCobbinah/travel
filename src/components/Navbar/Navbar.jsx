import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoImg from '../../assets/q1.jpg';
import { FaCaretDown } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { HiMenuAlt4 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu.jsx'

const dropdownLinks = [
  {
    name: "Our Services",
    link: '/#services'
  },
  {
    name: "Top Brands",
    link: '/#mobile_brands'
  },
  {
    name: "Location",
    link: '/#location'
  },
]

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
    <div className='fixed top-0 right-0 w-full bg-white text-black shadow-md z[99999]'>
      <div className='bg-gradient-to-r from-primary to-secondary text-white'>
      <div className='container py-[2px] sm:block hidden '>
           <div className="flex justify-between">
            <p>20% off on next booking</p>
            <p>Mobile No. 0123456789</p>
           </div>
      </div>
      </div>
      <div className="container py-3 sm:py-0">
        <div className='flex justify-between items-center'>
          {/* Logo Section */}
          <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={LogoImg} alt="" className='h-16' />
              </Link>
          </div>
          {/* Desktop Navlink Section */}
         <div className='hidden md:block'>
          <ul className='flex items-center gap-6'>
            <li className='py-4'>
             <NavLink to='/' activeClassname='active' onClick={() => window.scrollTo(0, 0)} >
              Home 
              </NavLink>
            </li>
            <li className='py-4'>
             <NavLink activeClassname='active' to='/blog' onClick={() => window.scrollTo(0, 0)} >
              Blogs
              </NavLink>
            </li>
            <li className='py-4'>
             <NavLink activeClassname='active' to='/places' onClick={() => window.scrollTo(0, 0)} >
              Best Places
              </NavLink>
            </li>
            <li className='py-4'>
             <NavLink activeClassname='active' to='/about' onClick={() => window.scrollTo(0, 0)} >
              About
              </NavLink>
            </li>

            {/* Dropdown Section */}
            <li className='py-4 relative group cursor-pointer'>
              <div className='dropdwon  flex items-center'>
                <span>
                  Quick Links
                </span>
                <span>
                <FaCaretDown className='transiton-all duration-200 group-hover:rotate-180' />
                </span>
              </div>
              <div className='absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px]
              bg-white p-2'>
                <ul>
                 {dropdownLinks.map((data) => {
                  return (
                    <li key={data.name}>
                    <a 
                    className='inline-block w-full rounded-md p-2 hover:bg-primary/20'
                    href={data.link}>
                    {data.name}
                    </a>
                  </li>
                  );
                 })}
                </ul>
              </div>
            </li>
          </ul>
         </div>

          {/* Book now button */}
         <div className='flex items-center gap-4 '>
           <button className='bg-gradient-to-r from-primary to-secondary hover:bg-[color-direction]-from-secondary 
           hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full'>Book Now</button>
           {/* Mobile Hamburger Menu */}
           <div className='md:hidden block'>
            {showMenu? (
                <HiMenu 
                onClick={toggleMenu}
                className=' cursor-pointer
                transition-all'
                size={30}
                />
            ):(
              <HiMenuAlt4 
              onClick={toggleMenu}
              className='cursor-pointer
              transition-all'
              size={30}
              />
            )}
           </div>
         </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
    </>
  );
};

export default Navbar
