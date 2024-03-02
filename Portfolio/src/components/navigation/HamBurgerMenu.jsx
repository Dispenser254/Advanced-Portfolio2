/* eslint-disable react/prop-types */
// import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";

const HamBurgerMenu = ({ handleClick, navOpen}) => {
  return (
    <div
      onClick={handleClick}
      className="group md:hidden z-50 cursor-pointer text-gray-500 hover:scale-110 hover:text-gray-300 ease-in-out transition-all duration-300"
    >
      {navOpen && (
        <div className="group">
          <span className="group-hover:hidden">
            <FaXmark color="#6B7280" />
          </span>
          <span className="hidden group-hover:block">
            <FaXmark color="EF4444" />
          </span>
        </div>
      )}
      {!navOpen && (
        <div>
          <span className="group-hover:hidden">
            <MdMenu />
          </span>
          <span className="transition-all hidden delay-75 group-hover:block">
            <GiHamburgerMenu />
          </span>
        </div>
      )}
    </div>
  );
}

export default HamBurgerMenu