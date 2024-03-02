// import React from 'react'

import projects from "../data/projects";
import GridLayout from "./GridLayout";
import Project from "./Project";
import SectionHeading from "./SectionHeading";

const ProjectsPage = () => {
  return (
    <div
      name="projects"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="section">
        <SectionHeading
          heading="Projects"
          secondHeading="Check out some of my few projects"
        />
        <GridLayout style="sm:grid-cols-2 md:max-2-2xl mx-auto lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </GridLayout>
      </div>
    </div>
  );
};

export default ProjectsPage;
