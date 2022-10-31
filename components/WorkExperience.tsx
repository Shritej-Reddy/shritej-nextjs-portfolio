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
            description1: "Built an end to end serverless application based on client requirements that improved scalability, cost-effectiveness and also performance by 20% as opposed to prior application.",
            description2: "Created various website designs as per client needs using Figma, Adobe XD. Assessed UI and UX designs for technical feasibility.",
            description3: "Responsible for development of power apps solutions ranging from Canvas, Model Driven Apps to Dataverse, Custom Connectors, etc."
        },
        {
            workIndex: 2,
            company: "SmartVizX",
            position: "Full Stack Developer(Associate 2)",
            description1: "Collaborated with senior leaders to create Virtual/ Augmented Reality applications that port to Windows, iOS and Android",
            description2: "Create High Fidelity Designs for products which facilitate high quality development.",
            description3: "Developed various VR/AR prototypes which serve as foundation for technical feasibility on a large scale."
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
