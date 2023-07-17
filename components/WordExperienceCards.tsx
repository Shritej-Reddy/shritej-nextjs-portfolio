import React from "react";
import { motion } from "framer-motion";

type Props = {
  workIndex: any;
  work: any;
};

const WordExperienceCards = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  // console.log("Work: ", props.workIndex, props.work[props.workIndex-1].company);
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
            boxShadow: "0px 5px 10px #0D7E94",
            // color: "rgb(107, 114, 128, 1)"
            color: "black"
          }}
        >
          <motion.div className="text-black" layout>{props.work[props.workIndex-1].company}</motion.div>
          {isOpen && (
            <motion.div
              className="expand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p>{props.work[props.workIndex-1].position}</p>
              <ul  className="list-disc text-black">
                <li>{props.work[props.workIndex-1].description1}</li>
                <li>{props.work[props.workIndex-1].description2}</li>
                <li>{props.work[props.workIndex-1].description3}</li>
              </ul>
              {/* <p>{props.work[props.workIndex-1].description1}</p>
              <p>{props.work[props.workIndex-1].description2}</p>
              <p>{props.work[props.workIndex-1].description3}</p> */}
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default WordExperienceCards;
