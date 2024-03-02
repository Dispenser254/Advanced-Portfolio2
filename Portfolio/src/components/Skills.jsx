// import React from 'react'

import skills from "../data/skills";
import GridLayout from "./GridLayout";
import SectionHeading from "./SectionHeading";
import Skill from "./Skill";

const SkillsPage = () => {
  return (
    <div
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-gray-800 to-black"
      name="Skills"
    >
      <div className="section">
        <SectionHeading
          heading="Skills"
          secondHeading="These are the Technologies I've worked with"
        />
        <div className="py-2 xs:p-4 rounded-lg bg-gray-900">
          <GridLayout style="grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {skills.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </GridLayout>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
