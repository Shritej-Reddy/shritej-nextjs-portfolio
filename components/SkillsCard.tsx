import React from "react";
import { motion } from "framer-motion";

interface SkillsList {
  _id: string;
  skill: string;
}

type Props = {
  skillsList: SkillsList[];
  skillCategory: string;
};

const SkillsCard = (props: Props) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="flex flex-row align-baseline" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <h3 className="flex uppercase tracking-[20px] text-gray-500 text-2md">
        {props.skillCategory}
      </h3>
      <motion.ul
        className="flex flex-row flex-wrap align-baseline gap-4"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        style={{ marginBottom: "2rem", justifyContent: "center" }} // Add margin-bottom here to create space between list items
      >
        {props.skillsList.map((skill, index) => (
          <motion.li
            key={index}
            className="p-2 bg-gray-200 rounded-md text-black text-md"
            whileHover={{
              scale: [1, 1.2, 1.2, 1, 1],
            }}
            whileTap={{ scale: 0.9 }}
            style={{
              boxShadow: "0px 5px 10px #0D7E94",
            }}
            // drag
            // dragConstraints={{
            //   top: -50,
            //   left: -50,
            //   right: 50,
            //   bottom: 50,
            // }}
          >
            {skill.skill}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SkillsCard;
