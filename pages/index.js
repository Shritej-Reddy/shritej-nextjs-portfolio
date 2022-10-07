import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    // <div className={darkMode ? "dark" : ""}>
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Shritej&apos;s Portfolio</title>
        </Head>

        <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <h1 className="font-burtons text-xl">DevelopedByShritej</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-teal-600 text- to-teal-600 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="#"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <Hero />
          </section>

          {/* <section id="skills" className="snap-start">
          <Skills />
        </section> */}
        </main>
      </div>
    </motion.div>
  );
}
