import React from 'react'
import { motion } from "framer-motion";
import deved from "../public/dev-ed-wave.png";

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 1.5, }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'
        >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-teal-600 text-6xl">About</h3>

        <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{ duration: 1.2, }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            src="./shritej1.png"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className="text-2xl underline decoration-[#FF0000]">little</span> background</h4>
            {/* <p className="text-base">
              B S Shritej Reddy is a passionate Full Stack Web Developer with 2 years of experience  encompassing a wide range of skill sets, roles and industry verticals including Web Development, Game Development, Virtual and Augmented Reality experience working in multiple functions as: Development of APIs in serverless architecture, design workflows and interactions for mobile and desktop platforms. He has been involved in multiple project developments that exhibit his passion and skill. His breadth of experience includes Javascript, NodeJs, PostgreSQL, Python, web frameworks like React, user interfaces, testing, debugging. He is working on getting certified in Microsoft Certified: Azure Developer Associate and AWS Certified Solutions Architect – Associate and has received extensive training in ReactJs and Azure cloud. Published a paper in Springer.
            </p> */}
            <div className="flex flex-col text-xl">
              <li>Full Stack Web Developer with 2 years of experience in various roles and industry verticals</li>
              <li>Proficient in Web Development, Game Development, and Virtual/Augmented Reality</li>
              <li>Skilled in developing APIs using serverless architecture</li>
              <li>Experienced in designing workflows and interactions for mobile and desktop platforms</li>
              <li>Proficient in JavaScript, Node.js, PostgreSQL, and Python</li>
              <li>Familiar with web frameworks like React and proficient in user interface development</li>
              <li>Strong skills in testing and debugging</li>
              <li>Certified in Azure Fundamentals and currently pursuing certifications in Microsoft Certified: Azure Developer Associate</li>
              <li>Published a paper in Springer on a relevant topic in the field.</li>
            </div>
        </div>
    </motion.div>
  )
}

export default About