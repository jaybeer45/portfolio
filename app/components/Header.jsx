import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='flex items-center  flex-col gap-3 justify-center w-11/12 max-w-3xl mt-10 mx-auto h-screen text-center'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className='mt-4' >
        <Image src={assets.profile_img} alt='Jaybeer Singh' className='w-28 h-28 rounded-full  object-cover' />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex gap-2 items-end text-xl md:text-2xl mb-3 font-Ovo ' >
        Hi ! I'm Jaybeer Singh <Image src={assets.hand_icon} alt='' className='w-6' />
      </motion.h3>

      <motion.h1 className='text-3xl sm:text-6xl md:text-[55px] font-Ovo'>
        Full-stack web developer building <span className="text-accent">real-world</span> MERN applications
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='mx-auto m-3 max-w-xl font-Ovo text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed'>
        I build complete web applications with the MERN stack — from payment
        integrations and authentication to real-time chat and admin dashboards — and I enjoy turning
        a messy set of requirements into a clean, working product.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          href="#contact"
          className='px-10 py-3 border border-accent rounded-full bg-accent text-white flex
              items-center gap-2 hover:bg-accent/90 transition-colors '>
          contact me <Image src={assets.right_arrow_white} alt=''
            className='w-4' /> </motion.a>

        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          href="/sample-resume.pdf" download
          className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-3 bg-white hover:border-accent hover:text-accent transition-colors dark:text-black'>
          my resume <Image src={assets.download_icon} alt='' className='w-4' />
        </motion.a>
      </div>
    </div >
  )
}

export default Header