// import React from 'react'
import { FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import ResumeLink from "../assets/StephenKibe.pdf";
import { MdEditDocument, MdEmail } from "react-icons/md";

const contactInfo = [
  {
    id: 1,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/stephen-kibe/",
    icon: <FaLinkedinIn />,
  },
  {
    id: 2,
    title: "Github",
    link: "https://github.com/Dispenser254",
    icon: <FaGithub />,
  },
  {
    id: 3,
    title: "Mail",
    link: "mailto:stephenkibe8155@gmail.com",
    icon: <MdEmail />,
  },
  {
    id: 4,
    title: "Telegram",
    link: "https://t.me/Kibe_Stevie",
    icon: <FaTelegram />,
  },
  {
    id: 5,
    title: "Resume",
    link: ResumeLink,
    icon: <MdEditDocument />,
    download: true,
  },
];

export default contactInfo;
