'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {

    const fadeIn = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    };

    // const openModal = (photo) => {
    //   setSelectedPhoto(photo);
    // };
  
    // const closeModal = () => {
    //   setSelectedPhoto(null);
    // };

  return (
    <motion.div 
    className="container mx-auto px-4 py-8 min-h-screen"
    initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 1.5 }}
        >
      <Head>
        <title>My Personal Profile</title>
        <meta name="description" content="Welcome to my personal profile!" />
      </Head>
      
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-300">Experience</h1>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-300">Technical Experience</h2>
          {/* bizchina */}
          <div className='flex items-top justify-between border-2 border-gray-500 rounded-lg p-3 m-3 mb-5 text-gray-500'>
            <img src="/images/logobizchina.png" 
                className="mr-4 object-cover w-[150px] h-[150px] justify-right border-2 border-gray-500 rounded-lg" 
                // onClick={() => openModal("/images/course4you.png")}
            />
            <div>
                <h2 className='text-xl font-bold text-gray-100 flex justify-start'>Software Developer</h2>
                <p className='italic'>
                    UBC BizChina
                </p>
                <li>Developed an internal task management tool in a group of 7 developers, demonstrating excellent teamwork skills 
                    (more about the project can be found in the <a href='/projects' className='font-bold text-decoration-line: underline'>Projects & Skills</a> section)</li>
                <li>Participated in general meetings to present the project to the president and other members, ensuring client satisfaction with progress</li>
                <li>Fulfilled other club responsibilities such as participating in events, such as the 2023 Welcome Back Event</li>
            </div>
          </div>
          {/* insightubc */}
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-300">Work Experience</h2>
          {/* bizchina */}
          <div className='flex items-top justify-start border-2 border-gray-500 rounded-lg p-3 m-3 mb-5 text-gray-500'>
                <img src="/images/Gap_logo.svg.png" 
                    className="mr-4 object-cover w-[150px] justify-right border-2 border-gray-500 rounded-lg" 
                    // onClick={() => openModal("/images/course4you.png")}
                />
            <div>
                <h2 className='text-xl font-bold text-gray-100 flex justify-start'>Sales Associate</h2>
                <p className='italic'>
                    Gap Inc.
                </p>
                <li>Operated cash counter efficiently and accurately while providing excellent customer service during checkout</li>
                <li>Used product knowledge to provide customers information and advice about different items, boosting sales by 24%</li>
                <li>Maintained cleanliness and organization of the sales floor and fitting rooms, ensuring a pleasant shopping environment for clientele</li>
            </div>
          </div>
          {/* insightubc */}
        </section>
      </main>

      {/* <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer> */}
    </motion.div>
  );
};

export default Projects;