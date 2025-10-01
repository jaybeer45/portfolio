import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e8314681-a6d6-42e5-b096-35136dd711d4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
   <motion.div
   initial={{opacity : 0}}
   whileInView={{opacity : 1}}
   transition={{duration:1}}
   
   
   id='contact' className="w-full px-[12%]  scroll-mt-20 bg-[url('/footer-bg-color.png')]
   bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none ">
        <motion.h4
        initial={{opacity : 0 , y: -20}}
       whileInView={{opacity : 1 , y:1}}
       transition={{duration:0.5, delay:0.4}}  
        className="text-center mb-2 text-lg font-Ovo">Connect with me 
         </motion.h4>

        <motion.h2 
        initial={{opacity : 0 , y: -20}}
       whileInView={{opacity : 1 , y:1}}
       transition={{duration:0.6, delay:0.6}}
        
        className="font-Ovo text-center text-5xl"> Get me touch  </motion.h2>

        <motion.p
        initial={{opacity : 0 }}
       whileInView={{opacity : 1 }}
       transition={{duration:1, }}
        
        className='max-w-3xl font-Ovo mb-10 mx-auto mt-5 text-lg text-center ' >
        I'd love to hear from you! If you have any questions, comments, or feedback, 
        please use the form below. </motion.p>

        < motion.form
        initial={{opacity : 0 }}
       whileInView={{opacity : 1 }}
       transition={{duration:1.3}}
        
        onSubmit={onSubmit} className='max-w-2xl mx-auto ' >

            <div className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]
             gap-6 mt-10 mb-4 ' >

                <motion.input
                initial={{opacity : 0 , x: -50}}
               whileInView={{opacity : 1, x:0}}
               transition={{duration:0.7, delay:0.8}}
                
                type="text" placeholder='Enter your name' required 
                className='flex-1 p-3 outline-none border-[0.5px]
                 border-gray-400 rounded-md bg-white text-black' name='name'/>

                <motion.input
                initial={{opacity : 0 , x: 50}}
               whileInView={{opacity : 1, x:0}}
               transition={{duration:0.7, delay:0.8}}  
                type="email" placeholder='Enter your email' required
                className='flex-1 p-3 outline-none border-[0.5px]
                 border-gray-400 rounded-md bg-white text-black  ' name='email' />

            </div>

            <motion.textarea
            initial={{opacity : 0 }}
               whileInView={{opacity : 1}}
               transition={{duration:0.7, delay:0.8}}
            
            rows='6' placeholder='Enter your message' required
            className='w-full outline-none p-4 mb-6 bg-white border-gray-400 rounded-md border-[0.5px] dark:text-black'
            name='message'>
          </motion.textarea>
            <motion.button
            whileHover={{scale:0.5}}
             transition={{duration:0.3}}            
            type='submit'
             className='py-3 px-8 rounded-full mx-auto text-white bg-black/80 w-max gap-2 
             hover:bg-black duration-500 flex justify-between items-center dark:bg-blue-900'> 
            Submit now
            <Image src={assets.right_arrow_white} alt='' className='w-4' />
             </motion.button>

             <p className='mt-4'>{result}</p>

        </motion.form>

    </motion.div>
  )
}

export default Contact
