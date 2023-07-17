import React from "react";
import { motion } from "framer-motion";
import SkillsCard from "./SkillsCard";

type Props = {};

const Skills1: React.FC<Props> = () => {
  let programmingSkillsList = [
    {
      _id: "javascript",
      skill: "Javascript",
    },
    {
      _id: "typescript",
      skill: "Typescript",
    },
    {
      _id: "csharp",
      skill: "C#",
    },
    {
      _id: "python",
      skill: "Python",
    },
    {
      _id: "c++",
      skill: "C++",
    }
  ];
  let framework_Library_SkillsList = [
    {
      _id: "react",
      skill: "React.js",
    },
    {
      _id: "typescript",
      skill: "Typescript",
    },
    {
      _id: "csharp",
      skill: "C#",
    },
    {
      _id: "python",
      skill: "Python",
    },
    {
      _id: "c++",
      skill: "C++",
    }
  ];
  let frontend_SkillsList = [
    {
      _id: "html",
      skill: "HTML",
    },
    {
      _id: "css",
      skill: "CSS",
    },
    {
      _id: "react",
      skill: "React.js",
    },
    {
      _id: "next",
      skill: "Next.js",
    },
    {
      _id: "vite",
      skill: "Vite.js",
    }
  ];
  let backend_SkillsList = [
    {
      _id: "node",
      skill: "Node.js",
    },
    {
      _id: ".net",
      skill: ".NET",
    },
    {
      _id: "Azure",
      skill: "Azure",
    },
    {
      _id: "postgresql",
      skill: "PostreSQL",
    },
  ];
  let cicd_SkillsList = [
    {
      _id: "git",
      skill: "GIT",
    },
    {
      _id: "docker",
      skill: "Docker",
    },
    {
      _id: "githubActions",
      skill: "Github Actions",
    },
  ];
  let azure_SkillsList = [
    {
      _id: "functionApps",
      skill: "Function Apps",
    },
    {
      _id: "appServices",
      skill: "App Services",
    },
    {
      _id: "storageAccounts",
      skill: "Storage Accounts",
    },
    {
      _id: "logicApps",
      skill: "Logic Apps",
    },
    {
      _id: "keyVault",
      skill: "Key Vault",
    },
    {
      _id: "activeDirectory",
      skill: "Active Directory",
    },
    {
      _id: "virtualMachines",
      skill: "Virtual Machines",
    },
    {
      _id: "eventGrid",
      skill: "Event Grid",
    },
  ];
  let databases_SkillsList = [
    {
      _id: "postgresql",
      skill: "PostgreSQL",
    },
  ];
  let uiux_SkillsList = [
    {
      _id: "adobeXD",
      skill: "Adobe XD",
    },
    {
      _id: "figma",
      skill: "Figma",
    },
  ];
  

  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-teal-600 text-6xl">
        Skills
      </h3>
        <div className="flex flex-col">
            <SkillsCard skillCategory="Programming Languages: " skillsList={programmingSkillsList}/>
            <SkillsCard skillCategory="Frameworks: " skillsList={framework_Library_SkillsList}/>
            <SkillsCard skillCategory="Front-end: " skillsList={frontend_SkillsList}/>
            <SkillsCard skillCategory="Back-end: " skillsList={backend_SkillsList}/>
            <SkillsCard skillCategory="CI/CD Tools: " skillsList={cicd_SkillsList}/>
            <SkillsCard skillCategory="Azure Cloud: " skillsList={azure_SkillsList}/>
            <SkillsCard skillCategory="Databases: " skillsList={databases_SkillsList}/>
            <SkillsCard skillCategory="UI/ UX Tools: " skillsList={uiux_SkillsList}/>
        </div>
    </motion.div>
  );
};

export default Skills1;
