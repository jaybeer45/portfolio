import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion, spring } from "motion/react"
import { Mogra } from 'next/font/google'

const Header = () => {
  return (
    <div className='flex items-center flex-col gap-3 justify-center w-11/12 mx-w-3xl mx-auto h-screen'>
      <motion.div
       initial={{scale:0}}
       whileInView={{scale: 1}}
       transition={{duration: 0.8 , type : 'spring', stiffness : 100 }}
      className='mt-4' >
        <Image src={assets.profile_img} alt='' className='w-25 h-25 rounded-full object-fill  '/>
      </motion.div>
        <motion.h3
        initial={{y: -20, opacity: 0 }}
        whileInView={{y : 0 , opacity : 1}}
        transition={{duration : 0.6 , delay:0.3  }}
        
        className='flex gap-2 items-end text-xl md:text-2xl mb-3 font-Ovo ' >
            Hi ! I'm Jaybeer Singh <Image src={assets.hand_icon} alt='' className='w-6'/> 
         </motion.h3>

         <motion.h1
          initial={{y: -30, opacity: 0 }}
        whileInView={{y : 0 , opacity : 1}}
        transition={{duration : 0.8 , delay:0.5 }}
         className='text-3xl sm:text-6xl md:text-[55px] fond-Ovo'>
            Frontend web devloper based in India </motion.h1>

            <motion.p
             initial={{ opacity: 0 }}
        whileInView={{ opacity : 1}}
        transition={{duration : 0.6 , delay:0.6  }}
             className='mx-auto max-w-2xl fond-Ovo '>I am an aspiring full-stack developer with a strong focus on frontend technologies like
             React and Next.js. I enjoy creating responsive, user-friendly applications and am currently
             expanding my skills in the MERN stack to prepare for real-world projects and opportunities.
             </motion.p>

             <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
             <motion.a 
              initial={{y: 20, opacity: 0 }}
              whileInView={{y : 0 , opacity : 1}}
              transition={{duration : 0.5 , delay:1  }}
             href="#contact" 
             className='px-10 py-3  border border-white rounded-full bg-[#000] text-white flex
              items-center gap-2  '>
             contact me <Image src={ assets.right_arrow_white} alt=''
              className='w-4'/> </motion.a>

             <motion.a
             initial={{y: 20, opacity: 0 }}
              whileInView={{y : 0 , opacity : 1}}
              transition={{duration : 0.5 , delay:1  }}
             href="/sample-resume.pdf" download
              className='px-10 py-3 border border-gray-500 rounded-full flex items gap-3 bg-white dark:text-black'>
              my resume <Image src={assets.download_icon} alt='' className='w-4'/> 
              </motion.a>
             </div>


             <div>

             </div>
    </div>
  )
}

export default Header











