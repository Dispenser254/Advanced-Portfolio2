/* eslint-disable react/prop-types */
// import React from 'react'

import Card from "./Card"
import CardCover from "./CardCover"
import { FaCode } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const Project = ({ project: {img, demo,code, description, style = {shadow: "shadow-gray-500", cover: "from-gray-500"}}}) => {
  return (
    <Card style={style}>
      <div className="group relative rounded-md cursor-pointer">
        <img
          src={img}
          alt="Project Image"
          width="auto"
          height="auto"
          loading="lazy"
          title="Project"
          className="rounded-t-md"
        />
        <CardCover style={style} text={description} />
      </div>
      <div className="flex items-center justify-center rounded-b-md">
        <ProjectsLinks
          name="Code"
          style={"rounded-bl-md" + style.cover}
          link={code}
        />
        <ProjectsLinks
          name="Demo"
          style={"rounded-br-md" + style.cover}
          link={demo}
        />
      </div>
    </Card>
  );
}

const ProjectsLinks = ({name, link, style}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={` w-1/2 py-3 text-center  text-xl bg-black hover:bg-gradient-to-t cursor-pointer ${style} to-black duration-500 flex justify-center items-center text-white`}>
            {name === "Code" ?<FaCode /> : <FaLink /> }
            <span className="pl-2">{name}</span>
        </a>
    )
}

export default Project