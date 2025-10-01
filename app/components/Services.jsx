import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import {motion} from "motion/react"

const Services = ({}) => {
  return (
  
      <motion.div
      initial={{opacity : 0}}
      whileInView={{opacity : 1}}
      transition={{duration : 1}}
      
      id="services" className="w-full px-[12%] py-10 scroll-mt-20">
        < motion.h4
        initial={{opacity : 0, y : -20}}
      whileInView={{opacity : 1, y : 0}}
      transition={{duration : 0.3 , delay:0.5}}
        className="text-center mb-2 text-lg font-Ovo"> What I Offer 
        </motion.h4>

        <motion.h2
         initial={{opacity : 0, y : -20}}
      whileInView={{opacity : 1, y : 0}}
      transition={{duration : 0.5 , delay:0.5}}
        className="font-Ovo text-center text-5xl"> My Services
         </motion.h2>

        <motion.p
         initial={{opacity : 0}}
      whileInView={{opacity : 1}}
      transition={{duration : 0.5 , delay:0.7}}
        className='max-w-3xl font-Ovo mb-10 mx-auto mt-5  text-center ' >
          Hi, I'm a frontend developer who loves building websites and web apps.
          I've created projects like my own portfolio, an e-commerce website,
          and some full stack applications using the MERN stack. I enjoy turning
          ideas into clean, user-friendly designs and I'm always excited to
          learn more.
        </motion.p>

        < motion.div
         whileHover={{scale : 1.05}}
        className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] my-10 gap-8  ">
          {serviceData.map(({icon, title , description, link},index)=>(

            <motion.div
             initial={{opacity : 0, y : -20}}
            whileInView={{opacity : 1, y : 0}}
            transition={{duration : 0.3 , delay:0.5}}

            key={index}
            className="border border-gray-400 rounded-lg px-4 py-8 hover:shadow-[4px_4px_0_#000]
              hover:-translate-y-1 duration-500 cursor-pointer hover:bg-[#f3edf5] 
               dark:hover:bg-[#11001F] dark:hover:shadow-white ">
              <Image src={icon} alt="" className="w-10" />
               <h3 className="text-lg my-4 text-gray-600 font-semibold   " >{title} </h3>
               <p className="text-sm text-gray-600 leading-5 ">
                {description}
                </p>
                <a href={link} className="flex gap-2 text-center  text-sm mt-3">Read More
                 <Image src={assets.right_arrow} alt="" className="w-4" />
                </a>
            </motion.div>
          ))}


        </motion.div>


      </motion.div>
    
  );
};
export default Services;
