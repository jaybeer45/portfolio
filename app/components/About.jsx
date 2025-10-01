import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"

const About = () => {
  return (
   
      <motion.div id="about" className="w-full px-[12%] py-10 scroll-mt-20"
       initial={{opacity:0}}
         whileInView={{opacity: 1}}
         transition={{duration: 1}} >
        <motion.h4
        initial={{y: -20 , opacity:0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration:0.5 , delay:0.3}}
        className="text-center mb-2 text-lg font-Ovo "> Introduction 
         </motion.h4>

        <motion.h2
        initial={{y: -20 , opacity:0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration:0.5 , delay:0.5}}
        className="font-Ovo text-center text-5xl"> About me 
        </motion.h2>

        <motion.div
        initial={{ opacity:0}}
        whileInView={{ opacity: 1}}
        transition={{duration:0.8}}
        className="flex flex-col lg:flex-row my-10 gap-20 items-center w-full  ">

          <motion.div
          initial={{opacity:0 , scale:0.9}}
          whileInView={{opacity:1 , scale: 1}}
          transition={{duration:0.6}}
          className="w-60 max-w-none  sm:w-80">
            <Image
              src={assets.user_image}
              alt="user"
              className="w-full rounded-4xl border"
            />
          </motion.div>

          <motion.div
          initial={{ opacity:0}}
        whileInView={{ opacity: 1}}
        transition={{duration:0.6 , delay:0.8}}
          
          className="flex-1 ">
            <p className="mb-8  max-w-2xl font-Ovo ">
              Hi, I am a Full Stack Developer with good knowledge of the MERN
              stack (MongoDB, Express, React, Node.js). I enjoy building both
              the frontend and backend of web apps, making them clean,
              responsive, and user-friendly. I am excited to start my first job,
              grow my skills, and work with a team on real-world projects.
            </p>
             
             <motion.ul
             initial={{ opacity:0}}
              whileInView={{ opacity: 1}}
              transition={{duration:0.6 , delay:1}}
             
             className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2x " >
              {infoList.map(({icon, iconDark, title , description},
               index)=>(
                    < motion.li
                    whileHover={{scale:1.05}}
                    className="border-[0.5px] rounded-xl border-gray-400 p-6 cursor-pointer hover:bg-[#fcf4ff]
                    hover:translate-y-1 duration-500 hover:shadow-[4px_4px_0px_#000] " 
                     key={index}>
                      <Image src={icon} alt={title} className="w-6 mt-3" />
                      <h3 className="my-4 font-semibold text-gray-600 "> {title} </h3>
                      <p className="text-gray-6
                      00 text-sm"> {description} </p>
                    </motion.li>
              ))}
             </motion.ul >

             <motion.h4
             initial={{y: 20 , opacity:0}}
              whileInView={{y:0, opacity: 1}}
              transition={{duration:1.3 , delay:0.5}}
             className="my-4 text-gray-700 font-Ovo dark:text-white">Tools I Use
             </motion.h4>
             
             <motion.ul
             initial={{opacity:0}}
             whileInView={{opacity:1}}
             transition={{duration:0.5, delay : 1.5}}

             className="flex items-center gap-3 sm:gap-5">
              {toolsData.map((tool, index)=>(
                <motion.li
                whileHover={{scale:1.1}}
                
                className="flex justify-center items-center w-12 sm:w-12 hover:translate-y-1 duration-500
                aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-[#dfd6db]  "
                 key={index}> 
                 <Image src={tool} alt="tool" className="w-5 sm:w-7"/> </motion.li>
              ))}
             </motion.ul>

          </motion.div>
        </motion.div>
      </motion.div>

  );
};

export default About;
