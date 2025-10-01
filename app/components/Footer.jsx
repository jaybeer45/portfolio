import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Link from 'next/link'

const Footer = ({isDarkMode, setIsDarkMode}) => {
  return (
    <div className='mt-20 '>
      <div className='text-center ' >
        <Image src={isDarkMode ?assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />
     <div className='flex gap-2  items-center w-max mx-auto'>
        <Image src={ isDarkMode ? assets.mail_icon_dark  : assets.mail_icon} alt='' className='w-6 ' />
        jaykandwal92@gmail.com
     </div>
      </div>

      <div className='mx-[10%] mt-12 py-6 sm:flex justify-between items-center border-t
      text-center border-gray-400 '>
        <p> &copy; 2025 Jaybeer Singh. All rights reserved. </p>
        <ul className='flex justify-center items-center gap-10 mt-4 sm:mt-0'> 
          <li>
            <a href="https://github.com/jaybeer45" target='_blank'>Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jaybeer-kandwal-2178552b8" target='_blank'>Linkedin</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jaybeer-kandwal-2178552b8" target='_blank'>Linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
