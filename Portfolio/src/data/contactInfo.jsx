// import React from 'react'
import { FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import ResumeLink from "../assets/resume.pdf";
import { MdEditDocument, MdEmail } from "react-icons/md";

const contactInfo = [
  { id: 1, title: "LinkedIn", link: "#", icon: <FaLinkedinIn /> },
  { id: 2, title: "Github", link: "#", icon: <FaGithub /> },
  { id: 3, title: "Mail", link: "#", icon: <MdEmail /> },
  { id: 4, title: "Telegram", link: "#", icon: <FaTelegram /> },
  {
    id: 5,
    title: "Resume",
    link: ResumeLink,
    icon: <MdEditDocument />,
    download: true,
  },
];

export default contactInfo;
