// import React from 'react'

import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa6"
import { Link } from "react-scroll"

const BackToTop = () => {
    const [btnVisibility, setBtnVisibility] = useState(false)
    const handleScroll = () => {
        window.scrollTo({top:0, behavior:'smooth'})
    }

    useEffect(() => {
        const toggleVisibility = () => {
            window.pageYOffset > 250 ? setBtnVisibility(true) : setBtnVisibility(false)
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

  return (
    <Link onClick={handleScroll} to="Home" smooth duration={500}>
        <div className={`-translate-y-[100vh] transition-all delay-100 ${btnVisibility && "translate-y-0"} z-[49] fixed bottom-2 right-2 xs:bottom-[1.3rem] xs:right-[1.3rem] md:bottom-4 md:right-4 w-8 h-8 flex justify-center items-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 cursor-pointer hover:scale-[1.08] duration-500 text-white`}>
            <FaArrowUp />
        </div>
    </Link>
  )
}

export default BackToTop