import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="work" className="w-full px-[12%] py-10 scroll-mt-20">

      <motion.h4
      initial={{y : -20 , opacity : 0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.5, delay:0.3}}
      className="text-center mb-2 text-lg font-Ovo"> My portfolio 
      </motion.h4>

      <motion.h2
      initial={{y : -20 , opacity : 0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.5, delay:0.5}}
      className="font-Ovo text-center text-5xl"> My latest work 
      </motion.h2>

      <motion.p
      initial={{ opacity : 0}}
      whileInView={{ opacity:1}}
      transition={{duration:0.5, delay:0.7}}
      className="max-w-3xl font-Ovo mb-10 mx-auto mt-5 text-lg text-center ">
        Welcome to my web devlopment portfolio! Explore a collection of projects
        showcasing my expertise in front-end devlopment
      </motion.p>

      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6 , delay:0.9}}

      className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5 dark:text-black">
        {workData.map((project, index) => (
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg relative group cursor-pointer :"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 
                  py-3 px-3 flex items-center justify-between duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-bold ">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.description}</p>
             <div className="flex gap-4  ">
                  <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px]"
                >
                  View Project
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] "
                >
                  View Code
                </a>
              </div>
              
              </div>
              <div
                className="border border-black rounded-full flex
                     justify-center items-center aspect-square shadow-[2px_2px_0_#000] w-9 group-hover:bg-lime-300 transition"
              >
                <Image src={assets.send_icon} alt="" className="w-6" />
              </div>
              
            </div>
            
          </div>
        ))}
      </motion.div>

      <motion.a
       initial={{opacity : 0}}
       whileInView={{opacity : 1}}
       transition={{duration:0.6, delay:1.1}}

        href=""
        className="flex w-max gap-2  justify-center items-center border-[0.5px] text-gray-700 
          border-gray-700 rounded-full px-10 py-3 my-16 mx-auto hover:bg-purple-200 duration-500
          dark:text-gray-400  "
      >
        Show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt=""
          className="w-8"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
