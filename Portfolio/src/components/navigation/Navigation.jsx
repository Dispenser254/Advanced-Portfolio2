/* eslint-disable react/prop-types */
// import React from 'react'
import { Link } from "react-scroll";

const Navigation = ({handleClick, ulClass, liClass}) => {
    const navLinks = [
      { id: 1, href: "Home" },
      { id: 2, href: "About" },
      { id: 3, href: "Projects" },
      { id: 4, href: "Skills" },
      { id: 5, href: "Contact" },
    ];
  return (
    <ul className={ulClass}>
        {navLinks.map((links, index) => (
            <li key={index} className={`mx-4 py-2 capitalize font-medium cursor-pointer text-gray-500 hover:scale-[1.15] border-b-2 border-transparent hover:border-b-gray-300 duration-500 hover:text-gray-300 ${liClass}`}>
                <Link onClick={handleClick} to={links.href} smooth duration={500}>{links.href}</Link>
            </li>
        ))}
    </ul>
  )
}

export default Navigation