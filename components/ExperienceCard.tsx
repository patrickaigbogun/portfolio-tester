import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({ }: Props) {
	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
			<motion.img
				initial={{
					y: -100,
					opacity: 0
				}}
				transition={{
					duration: 1.2
				}}
				whileInView={{
					opacity: 1,
					y: 0
				}}
				viewport={{
					once: true
				}}
				className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
            object-cover object-center'
				src="https://media.gettyimages.com/id/515481284/photo/yoga-meditating-man-with-big-afro-hair.jpg?s=612x612&w=0&k=20&c=BYHe1wlnQ4zawN8PpO_Usc3hYMDTqYM3hXZq_VIIkxU="
				alt="this will be your logo"
			/>

			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>CEO of VOSEKDBA</h4>
				<p className='font-bold text-2xl mt-1'>VOSEKDBA</p>
				<div className='flex space-x-2 my-2'>
					<img className='h-10 w-10 rounded-full'
						src="../public/logo512.png" alt="technology usedtechnology used" />
					<img className='h-10 w-10 rounded-full'
						src="../public/logo512.png" alt="" />
					<img className='h-10 w-10 rounded-full'
						src="../public/logo512.png" alt="technology used" />
				</div>
				<p className='uppercase py-5 text-gray-300' >Started work .. - Ended..</p>

				<ul className='list-disc space-y-4 text-lg'>
					<li>Summary Points</li>
					<li>Summary Points</li>
					<li>Summary Points</li>
					<li>Summary Points</li>
					<li>Summary Points</li>
				</ul>
			</div>
		</article>



	)
}

export default ExperienceCard