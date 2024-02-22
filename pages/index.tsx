import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '@/components/Hero';
import About from '../components/About'
import Experience from '@/components/Experience';

const Home: NextPage = () => {
  return (
    <div className=' bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0' >
      
      {/* head */}
        <Head>
          <title>Patrick's portfolio</title>
        </Head>

      {/* Header */}
        <Header />

      {/* hero */}
      <section id="hero" className='snap-start' >
        <Hero/>
      </section>

      {/* about */}
      <section id="about" className='snap-center' >
        <About/>
      </section>

      {/* experience */}
      <section id="experience" className='snap-center' >
        <Experience/>
      </section>
      {/* skills */}
      {/* projects */}
      {/* contact me */}
    </div>
  );
};

export default Home;
