import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Skills1: React.FC<Props> = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      //className="flex flex-col items-center justify-center h-screen bg-gray-900"
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      
        <motion.ul
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          {skillsList.map((skill, index) => (
            <motion.li
              key={index}
              className="p-2 bg-blue-500 text-white rounded-md text-lg" // Adjust the font size here (e.g., text-lg, text-xl, etc.)
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {skill.skill}
            </motion.li>
          ))}
        </motion.ul>
    </motion.div>
  );
};

export default Skills1;