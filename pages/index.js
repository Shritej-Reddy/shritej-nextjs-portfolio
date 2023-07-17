import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills1 from "../components/Skills1";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  //cursor code
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0
  // });
  // useEffect(() => {
  //   const mouseMove = e => {
  //     console.log(e)
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   }
  //   window.addEventListener("mousemove", mouseMove)
  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   }
  // }, [])
  // const cursorVariants = {
  //   default: {
  //     x: mousePosition.x - 48,
  //     y: mousePosition.y - 48
  //   }
  // }

  const downloadBtn = () => {
    const element = document.createElement("a");
    // const file = new Blob([document.getElementById("input").value], {
    //   type: "text/plain;charset=utf-8}",
    // });
    element.href = "shritej.pdf";
    //element.download = "shritej_resume.pdf";
    //element.click();
  };

  return (
    // <div className={darkMode ? "dark" : ""}>
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      {/* cursor code */}
      {/* <motion.div
        className="cursor bg-white h-4 w-4 rounded fixed top-10 left-10"
        variants={cursorVariants}
        animate="default"
      ></motion.div> */}
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Shritej&apos;s Portfolio</title>
        </Head>

        <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <section className="min-h-screen snap-start">
            <nav className="py-10 flex justify-between dark:text-white">
              <h1 className="font-burtons text-xl">DEVELOPEDBYREDDY</h1>
              <ul className="flex items-center">
                {/* <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                </li> */}
                <li>
                  <a
                    className="font-burtons text-xl bg-gradient-to-r from-teal-600 text- to-teal-600 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="../Shritej.pdf"
                    target="_blank"
                  >
                    <button onClick={downloadBtn}>Resume</button>
                  </a>
                </li>
              </ul>
            </nav>
            <Hero />
          </section>

          <section id="about" className="snap-center">
            <About />
          </section>

          <section id="experience" className="snap-center">
            <WorkExperience />
          </section>

          <section id="skills" className="snap-start">
            <Skills1 />
          </section>

          {/* <section id="projects" className="snap-start">
            <Projects />
          </section>

          <section id="contactMe" className="snap-start">
            <ContactMe />
          </section> */}
        </main>
      </div>
    </motion.div>
  );
}
