import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const navbarLinks = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "Blogs",
    link: "/blog"
  },
  {
    name: "Best Places",
    link: "/places"
  }
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div className="menu-container">
      <div
        className={`${
          showMenu ? "" : "hidden"
        } transition duration-200`}
      >
        <div className="menu-top">
          <div className="user-icon">
            <FaUserCircle size={50} className="text-primary" />
          </div>
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>
        <ul className="menu-links mt-12">
          {navbarLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                onClick={() => setShowMenu(false)}
                className="mb-3 inline-block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMenu;