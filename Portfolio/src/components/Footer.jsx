// import React from 'react'
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';
import contactInfo from '../data/contactInfo'
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa6';

const FooterPage = () => {
    const year = new Date().getFullYear().toString()
    const navLinks = [
      { id: 1, href: "Home" },
      { id: 2, href: "About" },
      { id: 3, href: "Projects" },
      { id: 4, href: "Skills" },
      { id: 5, href: "Contact" },
    ];

  return (
    <div className="bg-gradient-to-t from-gray-500 via-black to-black w-full text-gray-300">
      <div className="section pb-5">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-3/5 lg:w-2/5 pr-2">
            <h3 className="text-white text-[1.75rem] font-bold pb-2">
              Stephen Kibe
            </h3>
            <p className="text-lg text-cyan-400 pb-5">Fullstack Developer</p>
            <p>Thank you for visiting my personal portfolio.</p>
            <p>Lets connect over socials.</p>
            <p>Open to any feedbacks.</p>
          </div>
          <div className="w-full xs:w-2/5 mt-8 sm:w-2/5 sm:mt-0 lg:w-[30%] sm:pl-20 lg:pl-12 justify-start">
            <h3 className="text-white text-[1.35rem] xs:text-2xl font-bold pb-4">
              Quick Links
            </h3>
            {navLinks.map(({ id, href }) => (
              <div key={id} className="group w-fit px-3">
                <Link to={href} smooth duration={500}>
                  <div className="flex items-center justify-between w-fit gap-2 font-semibold text-white cursor-pointer">
                    <FaArrowRight />
                    <span className="bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:text-transparent duration-500 group-hover:animate-pulse">
                      {href}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full mt-8 xs:w-3/5 sm:w-full lg:mt-0 lg:w-[30%] lg:pl-0">
            <h3 className="text-white text-2xl font-bold pb-4">Contact Info</h3>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-5 xs:gap-10 sm:gap-5 md:gap-10 justify-between">
              <div className="text-[0.9rem] font-semibold">
                <p className="flex items-center gap-3 mb-1">
                  <MdEmail /> stephenkibe8155@gmail.com
                </p>
                <p className="flex items-center gap-3 mb-1">
                  <MdLocalPhone /> +(254)-111-927170
                </p>
                <p className="flex items-center gap-3">
                  <MdLocationOn /> Nairobi, Kenya
                </p>
              </div>
              <ul className="flex items-center gap-5 md:gap-8 lg:gap-4 justify-start">
                {contactInfo.map(({ id, link, title, icon, download }) => (
                  <li
                    key={id}
                    className="group relative w-8 h-8 flex justify-center items-center rounded-full p-1 sm:grayscale cursor-pointer duration-[450ms] transition ease-in hover:grayscale-0 focus:scale-105 active:grayscale-0 active:scale-105"
                  >
                    <a
                      href={link}
                      download={download}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon}
                    </a>
                    <div className="flex scale-0 sm:group-hover:scale-100 group-focus:scale-100 transition ease-out duration-300 delay-100 origin-center justify-center items-center absolute -bottom-10 w-auto h-6 py-2 px-3 bg-gray-900 text-sm text-gray-300">
                      {title}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section py-2 text-black font-advanced">
        <div>
          <p className="text-sm text-gray-300 flex justify-center items-center">
            <span className="px-1 pb-[0.2rem]">&copy;</span>
            {year} frodenZlabs.com | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterPage