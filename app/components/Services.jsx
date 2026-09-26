import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react"

const Services = () => {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}

      id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      < motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo text-accent"> What I Offer
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-Ovo text-center text-5xl"> My Services
        <span className="block w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='max-w-2xl font-Ovo text-gray-600 dark:text-gray-300 mb-10 mx-auto mt-5 text-base sm:text-lg leading-relaxed text-center' >
        Hi, I'm a full-stack developer who builds complete web applications
        end to end — from the database and API up to the UI. I've shipped
        projects covering payments, authentication, and real-time features,
        and I enjoy turning ideas into clean, user-friendly products.
      </motion.p>

      < div
        className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] my-10 gap-8  ">
        {serviceData.map(({ icon, title, description, link }, index) => (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            whileHover={{ scale: 1.03 }}

            key={index}
            className="border border-gray-200 dark:border-white/10 rounded-xl px-6 py-8
              bg-white dark:bg-dark-hover/40
              hover:border-accent hover:shadow-md
              dark:hover:bg-dark-hover/60
              hover:-translate-y-1 duration-300 cursor-pointer">
            <Image src={icon} alt="" className="w-10 mb-4" />
            <h3 className="text-lg mb-2 text-gray-900 dark:text-gray-100 font-semibold">{title} </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {description}
            </p>
            <a href={link} className="flex gap-2 items-center text-sm mt-4 text-accent font-medium hover:gap-3 transition-all">Read More
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </motion.div>
        ))}


      </div>


    </motion.div>

  );
};
export default Services;