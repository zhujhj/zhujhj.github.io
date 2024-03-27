'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cake } from "phosphor-react";
import { MapPin } from "phosphor-react";
import { Envelope } from "phosphor-react";
import { Student } from "phosphor-react";
import Footer from './components/Footer';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Home = () => {

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className="min-w-screen px-4 py-8 min-h-screen bg-cover" 
    // style={{
    //   backgroundImage: 'url(/images/mistymountain.jpeg)'
    // }}
    >
      <Head>
        <title>My Personal Profile</title>
        <meta name="description" content="Welcome to my personal profile!" />
      </Head>
      
      <motion.header 
        className="text-center mb-8 px-[300px]"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 1.5 }}>
        <div>
        <div className="justify-center">
          <h1 className="text-6xl font-bold text-left text-gray-300">
            Jason Zhu
          </h1>
          <p className='text-left text-gray-400'>Undergraduate Computer Science Student at UBC</p>
        </div>
        <div className='mt-8 justify-center items-stretch flex'>
          <section className="mb-8 flex-auto">
          {/* border-2 border-black rounded-lg text-white p-3 bg-black opacity-75 */}
            <h2 className="text-2xl font-bold mb-4 text-left  text-gray-300">About Me</h2>
            <p className='text-left text-gray-400'>
              Hi there! My name is Jason Zhu, and I am a 3rd year BSc Computer Science student at the University of British Columbia. 
              I'm passionate about coding and anything tech related. When I'm not working, I like to play sports such as basketball, hockey,
              and more. I also like to play guitar, ski, and explore the outdoors. I have recently tried to get into photography as well.
              On this website, you'll find information about my background, skills, projects, and more.
            </p>
          </section>
          <div className="border-2 border-black w-[200px] h-[200px] rounded-full overflow-hidden flex-none">
            <img src="/images/9282F4AB-EBF7-44BA-BB5D-798AF45D4222_1_105_c.jpeg" alt="Profile" className="object-cover w-full h-full" />
          </div>
        </div>
        </div>
      </motion.header>

      <motion.main 
        className='px-[300px]'
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 2 }}>
        {/* here  */}
        <div className='flex justify-between text-gray-400'>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">Bio</h2>
            <p className='flex justify-start'>
            <Cake size={32} weight="fill" className='pr-2 -mt-1'/> I was born on April 4, 2003.
            </p>
            <p className='flex justify-start'>
            <MapPin size={32} weight="fill" className='pr-2 -mt-1'/> I am from Scarborough, Toronto, Ontario.
            </p> 
            <p className='flex justify-start'>
            <Student size={32} weight="fill" className='pr-2 -mt-1'/> University of British Columbia
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">Contact</h2>
            <p className='flex justify-start'>
              <Envelope size={32} className='pr-2 -mt-1'/> zhujason4@gmail.com
            </p>
            <p className='flex justify-start'>
              <AiFillGithub size={32} className='pr-2 -mt-1'/> @zhujhj
            </p>
            <p className='flex justify-start'>
              <AiFillLinkedin size={32} className='pr-2 -mt-1'/> @jason-zhu4
            </p>
          </section>
        </div>
      </motion.main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;