'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cake, MapPin, Envelope, Student } from 'phosphor-react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Footer from './components/Footer';

const Home = () => {

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className="min-w-screen px-4 py-8 min-h-screen bg-cover">
      <Head>
        <title>My Personal Profile</title>
        <meta name="description" content="Welcome to my personal profile!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <motion.header 
        className="text-center mb-8 max-w-5xl mx-auto px-4 md:px-20 lg:px-32"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 1.5 }}>
        <div className="justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-left text-gray-300">
            Jason Zhu
          </h1>
          <p className='text-left text-gray-400'>Undergraduate Computer Science Student at UBC</p>
        </div>
        <div className='mt-8 flex flex-col md:flex-row justify-center items-center md:items-start'>
          <section className="mb-8 md:flex-1">
            <h2 className="text-2xl font-bold mb-4 text-left text-gray-300">About Me</h2>
            <p className='text-lg text-left text-gray-400 md:w-4/5'>
              Hi there! My name is Jason Zhu, and I am a 4th year BSc Computer Science student at the University of British Columbia. 
              I'm passionate about coding and anything tech related. When I'm not working, I like to play sports such as basketball, hockey,
              and more. I also like to play guitar, ski, and explore the outdoors. I have recently tried to get into photography as well.
              On this website, you'll find information about my background, skills, projects, and more.
            </p>
          </section>
          <div className="border-2 border-black w-48 h-48 md:w-48 md:h-48 rounded-full overflow-hidden m-4 md:m-10 border-2 border-gray-400">
            <img src="/images/9282F4AB-EBF7-44BA-BB5D-798AF45D4222_1_105_c.jpeg" alt="Profile" className="object-cover w-full h-full" />
          </div>
        </div>
      </motion.header>

      <motion.main 
        className='max-w-5xl mx-auto px-4 md:px-20 lg:px-32'
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 2 }}>
        <div className='flex flex-col md:flex-row justify-between text-gray-400'>
          <section className="mb-8 md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">Bio</h2>
            <p className='flex items-center mb-2'>
              <Cake size={24} weight="fill" className='pr-2'/> I was born on April 4, 2003.
            </p>
            <p className='flex items-center mb-2'>
              <MapPin size={24} weight="fill" className='pr-2'/> I am from Scarborough, Toronto, Ontario.
            </p> 
            <p className='flex items-center'>
              <Student size={24} weight="fill" className='pr-2'/> University of British Columbia
            </p>
          </section>
          <section className="mb-8 md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">Contact</h2>
            <p className='flex items-center mb-2'>
              <Envelope size={24} className='pr-2'/> zhujason4@gmail.com
            </p>
            <p className='flex items-center mb-2'>
              <AiFillGithub size={24} className='pr-2'/> @zhujhj
            </p>
            <p className='flex items-center'>
              <AiFillLinkedin size={24} className='pr-2'/> @jason-zhu4
            </p>
          </section>
        </div>
      </motion.main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;