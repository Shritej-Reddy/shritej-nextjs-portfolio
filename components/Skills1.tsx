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
        style={{ marginBottom: "1.5rem" }} // Add margin-bottom here to create space between list items
      >
        {skillsList.map((skill, index) => (
          <motion.li
            key={index}
            className="p-2 bg-blue-500 text-white rounded-md text-lg"
            whileHover={{
              scale: [1, 1.5, 1.5, 1, 1],
            }}
            whileTap={{ scale: 0.9 }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            {skill.skill}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Skills1;