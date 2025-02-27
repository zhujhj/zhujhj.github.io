'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
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

    // const openModal = (photo) => {
    //   setSelectedPhoto(photo);
    // };
  
    // const closeModal = () => {
    //   setSelectedPhoto(null);
    // };

  return (
    <motion.div 
        className="container mx-auto px-4 py-12 min-h-screen max-w-6xl"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
    >
      <Head>
        <title>Experience | Jason Zhu</title>
        <meta name="description" content="Professional experience and work history of Jason Zhu" />
      </Head>
      
      <motion.header 
        className="text-center mb-16"
        variants={fadeIn}
      >
        <h1 className="text-5xl font-bold text-gray-200 mb-4">Experience</h1>
        <p className="text-gray-400 text-lg">My professional journey and achievements</p>
      </motion.header>

      <main>
        <motion.section 
            className="mb-16"
            variants={containerVariants}
        >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-200">Work Experience</h2>
            <motion.div 
                className='group hover:border-blue-500 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start justify-start border-2 border-gray-700 rounded-xl p-6 m-3 mb-8 text-gray-400 bg-gray-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10'
                variants={fadeIn}
            >
                <img 
                    src="/images/absolute.jpeg" 
                    className="mr-8 object-cover w-52 h-52 rounded-lg mb-6 md:mb-0 transition-transform duration-300 group-hover:scale-105 shadow-lg" 
                />
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h2 className='text-2xl font-bold text-gray-100'>Associate Software Developer in Test</h2>
                        <a className='inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200' 
                           href='https://www.absolute.com/' 
                           target='_blank'
                        >
                            Absolute Software
                            <FaExternalLinkAlt className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                    <ul className="space-y-3 list-disc list-inside">
                        <li className="hover:text-gray-200 transition-colors duration-200">Created an automated script using Python to enroll Windows and Mac devices using VMs on Absolute production accounts for testing, eliminating tedious manual work and reducing enrollment time by 75%</li>
                        <li className="hover:text-gray-200 transition-colors duration-200">Designed RESTful API endpoints to manipulate Virtual Machines for Mac Minis</li>
                        <li className="hover:text-gray-200 transition-colors duration-200">Developed automated end-to-end tests for multiple components in the Absolute console using Java and Selenium</li>
                        <li className="hover:text-gray-200 transition-colors duration-200">Optimized test suite runtime by removing and improving code, leading to test suites running 26% faster</li>
                        <li className="hover:text-gray-200 transition-colors duration-200">Implemented a performance script using Puppeteer and JavaScript to validate UI element loading speeds</li>
                    </ul>
                </div>
            </motion.div>

            <motion.div 
                className='group hover:border-purple-500 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start justify-start border-2 border-gray-700 rounded-xl p-6 m-3 mb-8 text-gray-400 bg-gray-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10'
                variants={fadeIn}
            >
                <img 
                    src="/images/ubcmedicine.png"
                    className="mr-8 object-cover w-52 h-52 rounded-lg mb-6 md:mb-0 transition-transform duration-300 group-hover:scale-105 shadow-lg" 
                />
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h2 className='text-2xl font-bold text-gray-100'>Digital Platform Assistant</h2>
                        <a className='inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200' 
                           href='https://tangdiabeteslab.com/' 
                           target='_blank'
                        >
                            UBC Department of Medicine - Tang Diabetes Lab
                            <FaExternalLinkAlt className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                    <ul className="space-y-3 list-disc list-inside">
                        <li className="hover:text-gray-200 transition-colors duration-200">Contributed in the development and application support of the Type 1 Diabetes Reachout/NEXGen mobile and web app, serving 100+ participants and 70+ peer supporters</li>
                        <li className="hover:text-gray-200 transition-colors duration-200">Conducted code reviews and identified bugs in both mobile and web versions of the application using TypeScript</li>
                        <li className="hover:text-gray-200 transition-colors duration-200">Collaborated in cross-functional meetings with the research team and software developers</li>
                        <li className="hover:text-gray-200 transition-colors duration-200">Provided onboarding assistance for app participants and peer supporters, ensuring a smooth integration process</li>
                    </ul>
                </div>
            </motion.div>

            <motion.div 
                className='group hover:border-green-500 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start justify-start border-2 border-gray-700 rounded-xl p-6 m-3 mb-8 text-gray-400 bg-gray-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/10'
                variants={fadeIn}
            >
                <img 
                    src="/images/Gap_logo.svg.png" 
                    className="mr-8 object-cover w-52 h-52 rounded-lg mb-6 md:mb-0 transition-transform duration-300 group-hover:scale-105 shadow-lg" 
                />
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h2 className='text-2xl font-bold text-gray-100'>Sales Associate</h2>
                        <a className='inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200' 
                           href='https://www.gapcanada.ca/' 
                           target='_blank'
                        >
                            Gap Inc.
                            <FaExternalLinkAlt className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                    <ul className="space-y-3 list-disc list-inside">
                        <li className="hover:text-gray-200 transition-colors duration-200">Operated cash counter efficiently and accurately while providing excellent customer service during checkout</li>
                        <li className="hover:text-gray-200 transition-colors duration-200">Used product knowledge to provide customers information and advice about different items, boosting sales by 24%</li>
                        <li className="hover:text-gray-200 transition-colors duration-200">Maintained cleanliness and organization of the sales floor and fitting rooms, ensuring a pleasant shopping environment for clientele</li>
                    </ul>
                </div>
            </motion.div>
        </motion.section>

        <motion.section 
            className="mb-16"
            variants={containerVariants}
        >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-200">Technical Experience</h2>
            <motion.div 
                className='group hover:border-amber-500 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start justify-start border-2 border-gray-700 rounded-xl p-6 m-3 mb-8 text-gray-400 bg-gray-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-amber-500/10'
                variants={fadeIn}
            >
                <img 
                    src="/images/logobizchina.png" 
                    className="mr-8 object-cover w-52 h-52 rounded-lg mb-6 md:mb-0 transition-transform duration-300 group-hover:scale-105 shadow-lg" 
                />
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h2 className='text-2xl font-bold text-gray-100'>Software Developer</h2>
                        <a className='inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-200' 
                           href='https://www.ubcchinaforum.com/' 
                           target='_blank'
                        >
                            UBC BizChina
                            <FaExternalLinkAlt className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                    <ul className="space-y-3 list-disc list-inside">
                        <li className="hover:text-gray-200 transition-colors duration-200">
                            Developed an internal task management tool in a group of 6 developers, demonstrating excellent teamwork skills 
                            (more about the project can be found in the <a href='/projects' className='font-bold text-amber-400 hover:text-amber-300 transition-colors duration-200'>Projects & Skills</a> section)
                        </li>
                        <li className="hover:text-gray-200 transition-colors duration-200">Participated in general meetings to present the project to the president and other members, ensuring client satisfaction with progress</li>
                        <li className="hover:text-gray-200 transition-colors duration-200">Fulfilled other club responsibilities such as participating in events, such as the 2023 Welcome Back Event</li>
                    </ul>
                </div>
            </motion.div>
        </motion.section>
      </main>

      {/* <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer> */}
    </motion.div>
  );
};

export default Projects;