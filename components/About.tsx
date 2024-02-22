import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial= {{
        opacity: 0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration: 1.3,
    }}
     className='flex flex-col relative mid:text-left mid:flex-row h-screen max-w-7xl px-10 justify-evenly
    mx-auto items-center '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
            About
        </h3>
        <motion.img
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            opacity: 1,
            x: 0
        }}
        viewport={{
            once: true
        }}
        src='https://media.gettyimages.com/id/1065402040/photo/close-up-portrait-of-confident-young-businessman.jpg?s=612x612&w=0&k=20&c=OccCikjHtcdJt42oR8SDb5budda3URCqu1nffljWbtA='
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 
            xl:w-[500px] xl:h-[600px]'
        alt='placeholderimage for now..'
        />
        <div className='space-y-10 px-0 md:px-10 content-center'>
            <h4 className='text-4xl font-semibold justify-center items-center'>Here is a {''} 
                <span className='underline decoration-[#F7AB0A]/50'>little</span>{''} background 
            </h4>
            <p className='text-base' >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.               
            </p>
        </div>
    </motion.div>
  )
}