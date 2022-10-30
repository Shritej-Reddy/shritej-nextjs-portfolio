import React from 'react'
import { motion } from "framer-motion";
import { DiJsBadge, DiPostgresql } from 'react-icons/di';

type Props = {
  skill: any,
  directionLeft?: boolean;
}

const SkillCards = (props: Props) => {
  console.log(props.skill);
  return (
    <div className="group relative flex cursor-pointer">
        {
          props.skill && (
            <>
              <motion.div 
                initial={{
                    x: props.directionLeft ? -200: 200,
                    opacity: 0
                }}
                transition={{ duration: 1, }}
                whileInView={{ opacity: 1, x: 0, }}
                className="rounded-full border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-400 ease-in-out"
              >
              <DiJsBadge size={70} />
              <DiPostgresql size={70} />
              </motion.div>
            </>
          )
        }
    </div>
  )
}

export default SkillCards