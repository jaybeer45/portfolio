import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-accent"
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-Ovo text-center text-5xl"
      >
        My latest work
        <span className="block w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="max-w-2xl font-Ovo text-gray-600 dark:text-gray-300 mb-10 mx-auto mt-5 text-base sm:text-lg leading-relaxed text-center"
      >
        Welcome to my portfolio! Explore a collection of full-stack projects
        showcasing real-world features like payments, auth, and live data.
      </motion.p>

      {/* Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] my-10 gap-8"
      >
        {workData.map((project, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-300 dark:border-white/20 overflow-hidden
              hover:-translate-y-1 hover:shadow-lg duration-300
              bg-white dark:bg-dark-hover"
          >
            {/* Project Image */}
            <div
              className="w-full aspect-video bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${project.bgImage})`,
              }}
            />

            {/* Project Content */}
            <div className="p-5">
              <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full
                      bg-accent-soft text-accent
                      dark:bg-dark-hover dark:text-gray-200
                      border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">

                <a href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm py-2 rounded-full
                    bg-accent text-white hover:bg-accent/90
                    transition-colors"
                >
                  View Project
                </a>


                <a href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm py-2 rounded-full
                    border border-gray-400 hover:border-accent
                    hover:text-accent transition-colors"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* GitHub Button */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        href="https://github.com/jaybeer45"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-max gap-2 justify-center items-center
          border-[0.5px] text-gray-700 border-gray-700 dark:border-gray-500 rounded-full
          px-10 py-3 my-16 mx-auto
          hover:bg-accent-soft hover:border-accent
          hover:text-accent duration-300
          dark:text-gray-400"
      >
        More on GitHub

        <Image
          src={
            isDarkMode
              ? assets.right_arrow_bold_dark
              : assets.right_arrow_bold
          }
          alt=""
          className="w-8"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;