import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  return (

    <motion.div id="about" className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }} >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-accent"> Introduction
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-Ovo text-center text-5xl"> About me
        <span className="block w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row my-14 gap-20 items-center w-full  ">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-60 max-w-none  sm:w-80">
          <Image
            src={assets.user_image}
            alt="Jaybeer Singh"
            className="w-full rounded-4xl border dark:border-white/20 shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}

          className="flex-1 ">
          <p className="mb-10 max-w-2xl font-Ovo text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            Hi, I'm a Full Stack Developer working with the MERN stack
            (MongoDB, Express, React, Node.js). I've built and shipped a
            live event-booking and vendor-marketplace platform with
            <span className="text-gray-900 dark:text-white font-medium"> Razorpay payments, OTP and Google authentication, real-time
              chat, and a dispute-resolution system</span> — and I enjoy taking a
            messy set of requirements and turning them into a clean,
            working product.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}

            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl" >
            {infoList.map(({ icon, iconDark, title, description },
              index) => (
              < motion.li
                whileHover={{ scale: 1.03 }}
                className="border border-gray-200 dark:border-white/10 rounded-xl p-6 cursor-pointer
                       bg-white dark:bg-dark-hover/40 hover:bg-accent-soft dark:hover:bg-dark-hover/60 hover:border-accent
                        hover:-translate-y-1 hover:shadow-mdduration-300"
                key={index}>
                <Image src={isDarkMode ? (iconDark || icon) : icon} alt={title} className="w-7 mb-4" />
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100"> {title} </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> {description} </p>
              </motion.li>
            ))}
          </motion.ul >

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="mt-12 mb-4 text-gray-700 font-Ovo dark:text-white text-lg">Tools I Use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}

            className="flex items-center gap-3 sm:gap-4">
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                title={tool.name}
                className="flex justify-center items-center w-12 sm:w-14 hover:-translate-y-1 duration-300
                   aspect-square border border-gray-200 dark:border-white/10 rounded-xl cursor-pointer bg-white dark:bg-dark-hover/40
                 hover:bg-accent-soft dark:hover:bg-dark-hover/60 hover:border-accent hover:shadow-md"
                key={index}>
                <Image src={tool.icon} alt={tool.name} className="w-5 sm:w-6" /> </motion.li>
            ))}
          </motion.ul>

        </motion.div>
      </motion.div>
    </motion.div>

  );
};

export default About;