// import React, { useEffect, useRef, useState } from 'react'
// import Image from 'next/image'
// import { assets } from '@/assets/assets'
// import Link from 'next/link'

// const Navbar = ({isDarkMode, setIsDarkMode}) => {

  
//   const[isScroll , setIsScroll] = useState(true)
//   const sideMenuRef = useRef();

//   const openMenu = () => {
//     sideMenuRef.current.style.transform = 'translateX(-16rem)'
//   }
//   const closeMenu = () => {
//     sideMenuRef.current.style.transform = 'translateX(16rem)'
//   }

//   useEffect(()=>{
//     window.addEventListener("scroll", ()=>{
//       if(scroll >  50){
//         setIsScroll(true);

//       }else{
//            setIsScroll(false);
//       }
//     })

//   },[])


//   return (

//     <> 
//     <div className='fixed top-0 right-0 w-11/12 z-10 translate-y-[-90%] dark:hidden'>
//       <Image src={assets.header_bg_color} alt='' className='w-full   ' />
//     </div>
//     <nav className={`w-full px-5 fixed  lg:px-8 xl:px-[8%] flex justify-between py-5 items-center z-50 
//        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-[#11001F] dark:shadow-white" : " "} `}>
//         <a href="#top">
//             <Image className='w-28 cursor-pointer mr-14 '   
//             src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' />
//         </a>

//         <ul className={` hidden md:flex items-center gap-6 lg:gap-8 rounded-full
//          py-3 px-12 
//          ${isScroll ? "" : "bg-opacity-50 backdrop-blur-lg shadow-sm bg-white dark:border dark:border-white/50 dark:bg-transparent  "}  `}>
//             <li> <a className='font-Ovo' href="#top"> Home </a> </li>
//             <li> <a className='font-Ovo' href="#about"> About </a> </li>
//             <li> <a className='font-Ovo' href="#services"> Services </a> </li>
//             <li> <a className='font-Ovo' href="#work"> My Work  </a> </li>
//             <li> <a className='font-Ovo' href="#contact"> Contact Me </a> </li>
         
//         </ul>

//         <div className='flex items-center gap-4 '>
//           <button onClick={()=>setIsDarkMode(prev => !prev)}>
//             <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6 cursor-pointer'/>
//           </button>
//             <a href="#contact" className='hidden lg:flex gap-3 items-center 
//             px-10 py-2.5 border border-gray-500 rounded-full ml-full  font-Ovo dark:border-white/50  '> contact
//              <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
//             className='w-3' alt=''/> </a>

//                 <button className='block md:hidden ml-3' onClick={openMenu}>
//             <Image src={ isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6 cursor-pointer'/>
//           </button>
//         </div>

//         { /* ......Menu mobile..........   */}

//         <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 
//         bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500  dark:text-white dark:bg-[#2a004a] '>
//           <div onClick={closeMenu} className='absolute right-6 top-6'> 
//             <Image src={ isDarkMode ?assets.close_white : assets.close_black} alt='' className='w-6 cursor-pointer '  />
//           </div>
//            <li> <a onClick={closeMenu} className='font-Ovo'  href="#top"> Home </a> </li>
//             <li> <a onClick={closeMenu} className='font-Ovo'  href="#about"> About </a> </li>
//             <li> <a onClick={closeMenu} className='font-Ovo'  href="#services"> Services </a> </li>
//             <li> <a onClick={closeMenu} className='font-Ovo'  href="#work"> My Work  </a> </li>
//             <li> <a onClick={closeMenu} className='font-Ovo'  href="#contact"> Contact Me </a> </li>

//         </ul>
      
//     </nav>
//     </>
//   )
// }

// export default Navbar






import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import Link from 'next/link';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(0)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(100%)';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 z-10 translate-y-[-90%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      <nav className={`w-full px-5 fixed lg:px-8 xl:px-[8%] flex justify-between py-5 items-center z-50
        ${isScroll
          ? (isDarkMode
              ? "bg-[#11001F] bg-opacity-80 shadow-white"
              : "bg-white bg-opacity-50 shadow-sm")
          : ""}`}>

        <a href="#top">
          <Image 
            className='w-28 cursor-pointer mr-14'   
            src={isDarkMode ? assets.logo_dark : assets.logo} 
            alt='logo' 
          />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full
          py-3 px-12
          ${isScroll ? "" : "bg-opacity-50 backdrop-blur-lg shadow-sm bg-white dark:border dark:border-white/50 dark:bg-transparent"}`}>
          
          <li><Link href="#top" className='font-Ovo'>Home</Link></li>
          <li><Link href="#about" className='font-Ovo'>About</Link></li>
          <li><Link href="#services" className='font-Ovo'>Services</Link></li>
          <li><Link href="#work" className='font-Ovo'>My Work</Link></li>
          <li><Link href="#contact" className='font-Ovo'>Contact Me</Link></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image 
              src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
              alt='' 
              className='w-6 cursor-pointer' 
            />
          </button>

          <a href="#contact" className='hidden lg:flex gap-3 items-center 
            px-10 py-2.5 border border-gray-500 rounded-full ml-full font-Ovo dark:border-white/50'>
            Contact
            <Image 
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className='w-3' 
              alt='' 
            />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image 
              src={isDarkMode ? assets.menu_white : assets.menu_black} 
              alt='' 
              className='w-6 cursor-pointer' 
            />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul ref={sideMenuRef} 
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 transform translate-x-full dark:text-white dark:bg-[#2a004a]'>
          
          <div onClick={closeMenu} className='absolute right-6 top-6'> 
            <Image 
              src={isDarkMode ? assets.close_white : assets.close_black} 
              alt='' 
              className='w-6 cursor-pointer'  
            />
          </div>

          <li><Link href="#top" onClick={closeMenu} className='font-Ovo'>Home</Link></li>
          <li><Link href="#about" onClick={closeMenu} className='font-Ovo'>About</Link></li>
          <li><Link href="#services" onClick={closeMenu} className='font-Ovo'>Services</Link></li>
          <li><Link href="#work" onClick={closeMenu} className='font-Ovo'>My Work</Link></li>
          <li><Link href="#contact" onClick={closeMenu} className='font-Ovo'>Contact Me</Link></li>
        </ul>

      </nav>
    </>
  );
};

export default Navbar;
