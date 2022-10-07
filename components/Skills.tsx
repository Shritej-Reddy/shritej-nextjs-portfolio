import React from 'react'
import Skill from './Skill';

type Props = {}

const Skills = (props: Props) => {
    let skills = [
        {
            _id: 1,
            progress: 70,
            title: "Skill1"
        },
        {
            _id: 2,
            progress: 20,
            title: "Skill2"
        }
    ]
  return (
    <div>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Skills
        </h3>

        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
            Hover over a skill for currency proficiency
        </h3>

        <div className="grid grid-cols-4 gap-5">
            {skills?.slice(0, skills.length / 2).map(skill => (
                <Skill key={skill._id} skill={skill} />
            ))}
            {skills?.slice(skills.length / 2, skills.length).map(skill => (
                <Skill key={skill._id} skill={skill} directionLeft />
            ))}
        </div>
    </div>
  )
}

export default Skills