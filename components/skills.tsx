"use client";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiPython,
  SiMongodb,
  SiMysql,
  SiMariadb,
  SiPrisma,
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { JSX } from "react";
import ParticleBackground from "./particle-background";

const SkillSection = ({
  title,
  skills,
}: {
  title: string;
  skills: { icon: JSX.Element; name: string }[];
}) => (
  <div className="bg-[#0d1117] rounded-2xl p-6 shadow-md border border-[#1f2937] w-full md:w-[30%]">
    <h3 className="text-xl font-semibold text-white text-center mb-6">{title}</h3>
    <div className="grid grid-cols-3 gap-6 place-items-center">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center space-y-1">
          <div className="text-3xl">{skill.icon}</div>
          <span className="text-sm text-gray-300 text-center">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const frontend = [
    { icon: <FaReact className="text-cyan-400" />, name: "ReactJS" },
    { icon: <SiNextdotjs className="text-gray-400" />, name: "Next.js" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript (ES6+)" },
    { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
    { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <SiCss3 className="text-blue-400" />, name: "CSS3" },
    { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },
  ];

  const backend = [
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
    { icon: <SiPython className="text-blue-400" />, name: "Python" },
    { icon: <FaJava className="text-orange-400" />, name: "Java" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    { icon: <SiPrisma className="text-cyan-300" />, name: "Prisma" },
    { icon: <SiMysql className="text-cyan-400" />, name: "MySQL" },
  ];

  const tools = [
    { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
    { icon: <MdApi className="text-gray-300" />, name: "RESTful APIs" },
    { icon: <FaLaptopCode className="text-rose-400" />, name: "Responsive Design" },
    { icon: <FaFigma className="text-orange-400" />, name: "Figma" },
    { icon: <FaDocker className="text-sky-400" />, name: "Docker" },
  ];

  return (
    <section className="py-20 w-full bg-muted/30" id="skills">
       <ParticleBackground />
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          My Skills
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 rounded-full"></div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 flex-wrap">
          <SkillSection title="Frontend Development" skills={frontend} />
          <SkillSection title="Backend & Database" skills={backend} />
          <SkillSection title="Tools & Methodologies" skills={tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
