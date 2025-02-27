'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import { Envelope, Phone, MapPin } from 'phosphor-react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Contact = () => {
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

  return (
    <motion.div 
      className="container mx-auto px-4 py-12 min-h-screen max-w-6xl"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <Head>
        <title>Contact | Jason Zhu</title>
        <meta name="description" content="Get in touch with Jason Zhu - Software Developer and Computer Science Student at UBC" />
      </Head>
      
      <motion.header 
        className="text-center mb-16"
        variants={fadeIn}
      >
        <h1 className="text-5xl font-bold text-gray-200 mb-4">Contact Me</h1>
        <p className="text-gray-400 text-lg">Let's connect and create something amazing together</p>
      </motion.header>

      <motion.main 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-2 gap-12">
          <motion.section 
            className="space-y-8"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-200 mb-6">Get in Touch</h2>
            <motion.a 
              href="mailto:zhujason4@gmail.com"
              className="flex items-center group p-4 border-2 border-gray-700 rounded-xl bg-gray-900/50 backdrop-blur-sm hover:border-blue-500 transition-all duration-300 text-gray-400 hover:text-gray-200 hover:shadow-lg hover:shadow-blue-500/10"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <Envelope size={24} className="mr-4 text-blue-400 group-hover:text-blue-300"/> 
              zhujason4@gmail.com
            </motion.a>
            <motion.a 
              href="https://github.com/zhujhj"
              target="_blank"
              className="flex items-center group p-4 border-2 border-gray-700 rounded-xl bg-gray-900/50 backdrop-blur-sm hover:border-purple-500 transition-all duration-300 text-gray-400 hover:text-gray-200 hover:shadow-lg hover:shadow-purple-500/10"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <AiFillGithub size={24} className="mr-4 text-purple-400 group-hover:text-purple-300"/> 
              @zhujhj
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/jason-zhu4"
              target="_blank"
              className="flex items-center group p-4 border-2 border-gray-700 rounded-xl bg-gray-900/50 backdrop-blur-sm hover:border-green-500 transition-all duration-300 text-gray-400 hover:text-gray-200 hover:shadow-lg hover:shadow-green-500/10"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <AiFillLinkedin size={24} className="mr-4 text-green-400 group-hover:text-green-300"/> 
              @jason-zhu4
            </motion.a>
          </motion.section>

          <motion.section 
            className="space-y-8"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-200 mb-6">Location</h2>
            <motion.div 
              className="p-4 border-2 border-gray-700 rounded-xl bg-gray-900/50 backdrop-blur-sm text-gray-400"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <MapPin size={24} className="mr-4 text-amber-400"/> 
                <span>Vancouver, British Columbia</span>
              </div>
              <p className="text-gray-400">
                Currently based in Vancouver, studying at the University of British Columbia. 
                Open to opportunities worldwide.
              </p>
            </motion.div>
          </motion.section>
        </div>
      </motion.main>
    </motion.div>
  );
};

export default Contact;