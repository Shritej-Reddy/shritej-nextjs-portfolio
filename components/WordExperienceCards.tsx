import React from "react";
import { motion } from "framer-motion";

type Props = {
  workIndex: any;
  work: any;
};

const WordExperienceCards = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log("Work: ", props.workIndex, props.work[props.workIndex-1].company);
  return (
    <div>
      {props.work && (
        <motion.div
          className="card font-burtons"
          onClick={() => setIsOpen(!isOpen)}
          layout
          transition={{ layout: { duration: 1, type: "spring" } }}
          style={{
            borderRadius: "2rem",
            boxShadow: "0px 10px 30px #80F807",
            // color: "rgb(107, 114, 128, 1)"
            color: "black"
          }}
        >
          <motion.div layout>{props.work[props.workIndex-1].company}</motion.div>
          {isOpen && (
            <motion.div
              className="expand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p>{props.work[props.workIndex-1].position}</p>
              <p>{props.work[props.workIndex-1].description}</p>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default WordExperienceCards;
