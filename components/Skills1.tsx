import React from "react";
import { motion } from "framer-motion";
import SkillCards from "./SkillCards";

type Props = {};

const Skills1 = (props: Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  let skillsList = [
    {
      _id: "javascript",
      skill: "Javascript",
      url: "oie_1441129NsvBRCB.png",
      progress: "80",
    },
    {
      _id: "typescript",
      skill: "Typescript",
      url: "typescript.png",
      progress: "80",
    },
    {
      _id: "csharp",
      skill: "C#",
      url: "javascript.png",
      progress: "80",
    },
    {
      _id: "react",
      skill: "React",
      url: "javascript.png",
      progress: "80",
    },
    {
      _id: "azure",
      skill: "Azure",
      url: "javascript.png",
      progress: "80",
    },
    {
      _id: "sql",
      skill: "SQL",
      url: "mysql.png",
      progress: "80",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div>
        <motion.ul
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {skillsList.map((skill, index) => (
            <motion.li
              key={index}
              className="p-2 bg-blue-500 text-white rounded-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={itemVariants}
            >
              {skill.skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default Skills1;

// return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
//     >
//       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
//         Skills
//       </h3>

//       <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
//         {/* Hover over a skill for current proficiency */}
//       </h3>

//       <div className="grid grid-cols-4 gap-5">
//       <ul className="flex flex-wrap justify-center gap-4">
//         {
//           skillsList.map(skill => (
//                     <li className="p-2 bg-blue-500 text-white rounded-md" key={skill._id}>{skill.skill}</li>
//                 ))
//           }
//             </ul>
//       </div>
//     </motion.div>
//   );
