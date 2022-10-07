import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, the name's Shritej`,
      "Web-Developer-At-Heart.tsx",
      "<LovesToCode />",
      "{ Gamer-At-Night }",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <div className="text-center p-10 py-10">
        {/* <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Shritej Reddy
        </h2> */}
        <h2 className="text-6xl uppercase text-teal-600 pb-2 tracking-[15px]">
            Shritej Reddy
        </h2>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Developer and UI/ UX Designer.
        </h2>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96">
          <Image src={deved} layout="fill" objectFit="cover" />
        </div>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 text-gray-800 dark:text-gray-200 py-4">
          {/* <span className="">{text}</span> */}
          {text}
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          Full Stack Engineer with an extensive skillset. Keen in making
          appealing designs and workflows. Feel free to get in touch, really
          love an engaging conversation.
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a href="https://github.com/Shritej-Reddy">
            <div>
              {" "}
              <AiFillGithub />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/shritej-reddy-587910126/">
            <div>
              <AiFillLinkedin />
            </div>
          </a>
        </div>
      </div>
      <div className="z-20">
        
      </div>
    </div>
  );
};

export default Hero;
