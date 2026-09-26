import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='mt-20 '>
      <div className='text-center ' >
        <span className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900 dark:text-white">
          JAYBEER
        </span>
        <div className='flex gap-2 items-center justify-center w-max mx-auto mt-3 text-sm text-gray-600 dark:text-gray-300'>
          <a href="mailto:kandwaljaybeer@gmail.com" className="hover:text-accent transition-colors">
            kandwaljaybeer@gmail.com
          </a>
        </div>
      </div>

      <div className='mx-[10%] mt-12 py-6 sm:flex justify-between items-center border-t
      text-center border-gray-300 dark:border-white/20 '>
        <p className="text-gray-600 dark:text-gray-400"> &copy; {new Date().getFullYear()} Jaybeer Singh. All rights reserved. </p>
        <ul className='flex justify-center items-center gap-10 mt-4 sm:mt-0'>
          <li>
            <a href="https://github.com/jaybeer45" target='_blank' rel="noopener noreferrer" className="hover:text-accent transition-colors">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jaybeer-kandwal-2178552b8" target='_blank' rel="noopener noreferrer" className="hover:text-accent transition-colors">Linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer