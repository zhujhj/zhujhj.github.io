'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cake, MapPin, Envelope, Student } from 'phosphor-react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Footer from './components/Footer';
import { useState } from 'react';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const [flipped, setFlipped] = useState(false);

  return (
    <div className="min-w-screen px-4 py-12 min-h-screen bg-cover">
      <Head>
        <title>Jason Zhu | Software Developer</title>
        <meta name="description" content="Personal portfolio of Jason Zhu - Software Developer and Computer Science Student at UBC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <motion.div 
        className="max-w-6xl mx-auto"
        initial="initial"
        animate="animate"
        variants={containerVariants}
      >
        <motion.header 
          className="mb-16 max-w-5xl mx-auto px-4 md:px-20 lg:px-32"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <div className="justify-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-left text-gray-200 pb-4"
              variants={fadeIn}
            >
              Jason Zhu
            </motion.h1>
            <motion.p 
              className='text-xl text-left text-gray-400'
              variants={fadeIn}
            >
              Undergraduate Computer Science Student at UBC
            </motion.p>
          </div>
          <div className='mt-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8'>
            <motion.section 
              className="md:flex-1"
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6 text-left text-gray-200">About Me</h2>
              <p className='text-lg text-left text-gray-400 leading-relaxed'>
                Hi there! My name is Jason Zhu, and I am a 4th year BSc Computer Science student at the University of British Columbia. 
                I'm passionate about coding and anything tech related. When I'm not working, I like to play sports such as basketball, hockey,
                and more. I also like to play guitar, ski, and explore the outdoors. I have recently tried to get into photography as well.
                On this website, you'll find information about my background, skills, projects, and more.
              </p>
            </motion.section>
            <motion.div 
              className="relative group border-2 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-gray-700 hover:border-blue-500 transition-colors duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              whileHover={{ scale: 1.05 }}
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", type: "spring", stiffness: 400, damping: 20 }}
              onClick={() => setFlipped(!flipped)}
            >
              <img 
                src="/images/9282F4AB-EBF7-44BA-BB5D-798AF45D4222_1_105_c.jpeg" 
                alt="Profile" 
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" 
              />
            </motion.div>
          </div>
        </motion.header>

        <motion.main 
          className='max-w-5xl mx-auto px-4 md:px-20 lg:px-32'
          variants={containerVariants}
        >
          <div className='flex flex-col md:flex-row justify-between gap-12 text-gray-400'>
            <motion.section 
              className="md:w-1/2"
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-200">Bio</h2>
              <div className="space-y-4">
                <motion.p 
                  className='flex items-center group hover:text-gray-200 transition-colors duration-200'
                  whileHover={{ x: 10 }}
                >
                  <Cake size={24} weight="fill" className='mr-4 text-blue-400 group-hover:text-blue-300'/> 
                  I was born on April 4, 2003.
                </motion.p>
                <motion.p 
                  className='flex items-center group hover:text-gray-200 transition-colors duration-200'
                  whileHover={{ x: 10 }}
                >
                  <MapPin size={24} weight="fill" className='mr-4 text-purple-400 group-hover:text-purple-300'/> 
                  I am from Scarborough, Toronto, Ontario.
                </motion.p> 
                <motion.p 
                  className='flex items-center group hover:text-gray-200 transition-colors duration-200'
                  whileHover={{ x: 10 }}
                >
                  <Student size={24} weight="fill" className='mr-4 text-green-400 group-hover:text-green-300'/> 
                  University of British Columbia
                </motion.p>
              </div>
            </motion.section>
            
            <motion.section 
              className="md:w-1/2"
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-200">Contact</h2>
              <div className="space-y-4">
                <motion.a 
                  href="mailto:zhujason4@gmail.com"
                  className='flex items-center group hover:text-gray-200 transition-colors duration-200'
                  whileHover={{ x: 10 }}
                >
                  <Envelope size={24} className='mr-4 text-amber-400 group-hover:text-amber-300'/> 
                  zhujason4@gmail.com
                </motion.a>
                <motion.a 
                  href="https://github.com/zhujhj"
                  target="_blank"
                  className='flex items-center group hover:text-gray-200 transition-colors duration-200'
                  whileHover={{ x: 10 }}
                >
                  <AiFillGithub size={24} className='mr-4 text-red-400 group-hover:text-red-300'/> 
                  @zhujhj
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/jason-zhu4"
                  target="_blank"
                  className='flex items-center group hover:text-gray-200 transition-colors duration-200'
                  whileHover={{ x: 10 }}
                >
                  <AiFillLinkedin size={24} className='mr-4 text-blue-400 group-hover:text-blue-300'/> 
                  @jason-zhu4
                </motion.a>
              </div>
            </motion.section>
          </div>
        </motion.main>
      </motion.div>
    </div>
  );
};

export default Home;