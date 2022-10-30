import React from "react";
import { motion } from "framer-motion";
import WordExperienceCards from "./WordExperienceCards"

type Props = {};

const WorkExperience = (props: Props) => {
  
    let work = [
        {
            workIndex: 1,
            company: "PwC",
            position: "Full Stack Developer(Associate 2)",
            description: "built websites lsgvnjlsxfnvjlasdfjlv jlnasfjlnadjlsfvbnljas iansfvjklasnfkjk asfdvnjkasfnjkaednkbjvinasdujvbnasjkkjasfgvbjkasfjgvbnask jasdFBjkASFBNgjkabsfgkvhjk"
        },
        {
            workIndex: 2,
            company: "SmartVizX",
            position: "Full Stack Developer(Associate 2)",
            description: "built websites lsgvnjlsxfnvjlasdfjlv jlnasfjlnadjlsfvbnljas iansfvjklasnfkjk asfdvnjkasfnjkaednkbjvinasdujvbnasjkkjasfgvbjkasfjgvbnask jasdFBjkASFBNgjkabsfgkvhjk"
        }
    ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-teal-600 text-6xl">
        Work Experience
      </h3>

      <WordExperienceCards workIndex={1} work={work} />
      <WordExperienceCards workIndex={2} work={work} />
    </motion.div>
  );
};

export default WorkExperience;
