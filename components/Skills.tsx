import React from 'react'
import { m, motion } from "framer-motion";
import SkillCards from './SkillCards';

type Props = {}

const Skills = (props: Props) => {
    let skillsList = [
        {
            _id: "javascript",
            skill: "Javascript",
            url: "oie_1441129NsvBRCB.png",
            progress: "80"
        },
        {
            _id: "typescript",
            skill: "Typescript",
            url: "typescript.png",
            progress: "80"
        },
        {
            _id: "csharp",
            skill: "C#",
            url: "javascript.png",
            progress: "80"
        },
        {
            _id: "react",
            skill: "React",
            url: "javascript.png",
            progress: "80"
        },
        {
            _id: "azure",
            skill: "Azure",
            url: "javascript.png",
            progress: "80"
        },
        {
            _id: "sql",
            skill: "SQL",
            url: "mysql.png",
            progress: "80"
        },
    ];
  return (
    <motion.div 
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 1.5, }}
        className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Skills
        </h3>

        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
            {/* Hover over a skill for current proficiency */}
        </h3>


        <div className="grid grid-cols-4 gap-5">
            {
                skillsList?.slice(0, skillsList.length / 2).map(skill => (
                    <SkillCards key={skill._id} skill={skill}/>
                ))
            }
            {
                skillsList?.slice(skillsList.length / 2, skillsList.length).map(skill => (
                    <SkillCards key={skill._id} skill={skill} directionLeft />
                ))
            }
            {/* {skills?.slice(0, skills.length / 2).map(skill => (
                <Skill key={skill._id} skill={skill} />
            ))}
            {skills?.slice(skills.length / 2, skills.length).map(skill => (
                <Skill key={skill._id} skill={skill} directionLeft />
            ))} */}
        </div>

    </motion.div>
  )
}

export default Skills