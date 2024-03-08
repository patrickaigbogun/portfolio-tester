import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '@/components/Hero';
import About from '../components/About'
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';

const Home: NextPage = () => {
	return (
		<div className=' bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
		overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ' >

			{/* head */}
			<Head>
				<title>Patrick portfolio</title>
			</Head>

			{/* Header */}
			<Header />

			{/* hero */}
			<section id="hero" className='snap-start' >
				<Hero />
			</section>

			{/* about */}
			<section id="about" className='snap-center mt-8 mb-8' >
				<About />
			</section>

			{/* experience */}
			<section id="experience" className='snap-center mt-8 mb-8' >
				<WorkExperience />
			</section>
			{/* skills */}
			<section id='skills' className='snap-start'>
				<Skills />

			</section>
			{/* projects */}
			<section id='projects' className='snap-start' >
				<Projects />
			</section>
			{/* contact me */}
			<section id='contact' className='snap-start'>
				<ContactMe />
			</section>
		</div>
	);
};

export default Home;
