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

    return (
        <motion.div 
            className="container mx-auto px-4 py-12 min-h-screen max-w-6xl"
            initial="initial"
            animate="animate"
            variants={containerVariants}
        >
            <Head>
                <title>Projects & Skills | Jason Zhu</title>
                <meta name="description" content="Explore Jason Zhu's projects, technical skills, and academic background" />
            </Head>
            
            <motion.header 
                className="text-center mb-16"
                variants={fadeIn}
            >
                <h1 className="text-5xl font-bold text-gray-200 mb-4">Projects & Skills</h1>
                <p className="text-gray-400 text-lg">A showcase of my technical work and capabilities</p>
            </motion.header>

            <main>
                <motion.section 
                    className="mb-16"
                    variants={containerVariants}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-200">Projects</h2>
                    
                    <motion.div 
                        className='group hover:border-blue-500 transition-all duration-300 flex flex-col md:flex-row items-center justify-between border-2 border-gray-700 rounded-xl p-6 m-3 mb-8 text-gray-400 bg-gray-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10'
                        variants={fadeIn}
                    >
                        <div className="space-y-4 md:pr-8">
                            <a className='text-2xl font-bold text-gray-100 flex items-center group-hover:text-blue-400 transition-colors duration-200' 
                               href="https://github.com/zhujhj/bizchina" 
                               target="_blank"
                            >
                                UBC BizChina Internal Task Application
                                <FaExternalLinkAlt size={16} className='ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'/> 
                            </a>
                            <p className='text-blue-400 font-medium'>
                                ReactJS • NodeJS • Firebase
                            </p>
                            <ul className="space-y-3 list-disc list-inside">
                                <li className="hover:text-gray-200 transition-colors duration-200">Developed an internal task management tool for 50+ people at UBC BizChina using ReactJS, NodeJS, and Firebase</li>
                                <li className="hover:text-gray-200 transition-colors duration-200">Implemented robust user authentication with Firebase that allows users to log-in using their Google account</li>
                                <li className="hover:text-gray-200 transition-colors duration-200">Created a drag and drop Kanban board and interactive calendar that saves information to Firestore Database using CRUD operations, as well as a real-time chat feature using ChatEngine allowing for efficient communication</li>
                                <li className="hover:text-gray-200 transition-colors duration-200">Deployed the platform to the club and reached 100% positive feedback from club members</li>
                            </ul>
                        </div>
                        <motion.img 
                            src="/images/bizchina_app.png" 
                            className="object-cover w-[300px] rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" 
                            whileHover={{ scale: 1.05 }}
                        />
                    </motion.div>

                    <motion.div 
                        className='group hover:border-purple-500 transition-all duration-300 flex flex-col md:flex-row items-center justify-between border-2 border-gray-700 rounded-xl p-6 m-3 mb-8 text-gray-400 bg-gray-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10'
                        variants={fadeIn}
                    >
                        <div className="space-y-4 md:pr-8">
                            <a className='text-2xl font-bold text-gray-100 flex items-center group-hover:text-purple-400 transition-colors duration-200' 
                               href="https://www.youtube.com/watch?v=A8YGxr8qbaQ" 
                               target="_blank"
                            >
                                insightUBC Course Finder
                                <FaExternalLinkAlt size={16} className='ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'/> 
                            </a>
                            <p className='text-purple-400 font-medium'>
                                TypeScript • NodeJS • ExpressJS • ReactJS
                            </p>
                            <ul className="space-y-3 list-disc list-inside">
                                <li className="hover:text-gray-200 transition-colors duration-200">Collaborated with a partner to develop a full-stack application that enables effective querying of historical data regarding the sections and rooms of UBC using TypeScript, NodeJS, ExpressJS, and ReactJS</li>
                                <li className="hover:text-gray-200 transition-colors duration-200">Unzipped, parsed, and extracted information to query from zipped JSON and HTML files using JSZip and parse5</li>
                                <li className="hover:text-gray-200 transition-colors duration-200">Used REST API endpoints to make HTTP requests and seamlessly connect the front and back end of the application</li>
                                <li className="hover:text-gray-200 transition-colors duration-200">Wrote an exhaustive set of 100+ tests using Chai and Mocha to ensure the program is functioning as expected</li>
                            </ul>
                        </div>
                        <motion.img 
                            src="/images/insightubc.png" 
                            className="object-cover w-[300px] rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" 
                            whileHover={{ scale: 1.05 }}
                        />
                    </motion.div>

                    <motion.div 
                        className='group hover:border-green-500 transition-all duration-300 flex flex-col md:flex-row items-center justify-between border-2 border-gray-700 rounded-xl p-6 m-3 mb-8 text-gray-400 bg-gray-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/10'
                        variants={fadeIn}
                    >
                        <div className="space-y-4 md:pr-8">
                            <a className='text-2xl font-bold text-gray-100 flex items-center group-hover:text-green-400 transition-colors duration-200' 
                               href="https://github.com/zhujhj/Calorie-Tracker" 
                               target="_blank"
                            >
                                Calorie Tracker
                                <FaExternalLinkAlt size={16} className='ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'/> 
                            </a>
                            <p className='text-green-400 font-medium'>
                                Java • Java Swing
                            </p>
                            <ul className="space-y-3 list-disc list-inside">
                                <li className="hover:text-gray-200 transition-colors duration-200">Designed a GUI-based program that helps users balance workout and diet plans on a daily basis</li>
                                <li className="hover:text-gray-200 transition-colors duration-200">Implemented a registration/log-in system, navigable calendar, as well as data retention using text files</li>
                                <li className="hover:text-gray-200 transition-colors duration-200">Developed 30+ unit tests to fix bugs and validate the functionality of the program</li>
                                <li className="hover:text-gray-200 transition-colors duration-200">Worked with a client to perform a user acceptance test (UAT) to make sure the program meets the client's needs</li>
                            </ul>
                        </div>
                        <motion.img 
                            src="/images/calorietracker.png" 
                            className="object-cover w-[300px] rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" 
                            whileHover={{ scale: 1.05 }}
                        />
                    </motion.div>

                    <motion.div 
                        className='group hover:border-amber-500 transition-all duration-300 flex flex-col md:flex-row items-center justify-between border-2 border-gray-700 rounded-xl p-6 m-3 mb-8 text-gray-400 bg-gray-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-amber-500/10'
                        variants={fadeIn}
                    >
                        <div className="space-y-4 md:pr-8">
                            <a className='text-2xl font-bold text-gray-100 flex items-center group-hover:text-amber-400 transition-colors duration-200' 
                               href="https://github.com/leowang801/produhacks-team1-2023" 
                               target="_blank"
                            >
                                Course4You
                                <FaExternalLinkAlt size={16} className='ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'/> 
                            </a>
                            <p className='text-amber-400 font-medium'>
                                MongoDB • ExpressJS • ReactJS • NodeJS
                            </p>
                            <ul className="space-y-3 list-disc list-inside">
                                <li className="hover:text-gray-200 transition-colors duration-200">Developed a course rating system prototype for university students with multiple group members at ProduHacks by UBC Biztech using MongoDB, ExpressJS, ReactJS, and NodeJS (MERN stack)</li>
                                <li className="hover:text-gray-200 transition-colors duration-200">Used Figma to design the user interface and efficiently convert it into code (HTML, CSS)</li>
                                <li className="hover:text-gray-200 transition-colors duration-200">Presented a business pitch of the product to judges analysing the feasibility, monetization, tech stack, and more</li>
                            </ul>
                        </div>
                        <motion.img 
                            src="/images/course4you.png" 
                            className="object-cover w-[300px] rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" 
                            whileHover={{ scale: 1.05 }}
                        />
                    </motion.div>
                </motion.section>

                <motion.section 
                    className="mb-16"
                    variants={containerVariants}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-200">Skills</h2>
                    <motion.div 
                        className="flex flex-wrap justify-center gap-3 my-6"
                        variants={containerVariants}
                    >
                        {[
                            "Java", "R", "Jupyter Notebook", "C++", "Python", "HTML", "CSS", "JavaScript",
                            "React.js", "Next.js", "Git", "Visual Studio Code", "IntelliJ", "TypeScript",
                            "SQL", "Firebase", "C", "Oracle Database", "REST API", "MongoDB"
                        ].map((skill, index) => (
                            <motion.div
                                key={skill}
                                className='group border-2 border-gray-700 hover:border-blue-500 rounded-lg px-4 py-2 bg-gray-900/50 backdrop-blur-sm text-gray-400 hover:text-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10'
                                variants={fadeIn}
                                whileHover={{ scale: 1.05, y: -2 }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                <motion.section 
                    className="mb-16"
                    variants={containerVariants}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-200">Relevant Courses</h2>
                    <motion.div 
                        className='flex justify-center text-center'
                        variants={fadeIn}
                    >
                        <table className='w-full max-w-4xl border-2 border-gray-700 rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur-sm'>
                            <thead>
                                <tr className='bg-gray-800 text-gray-200'>
                                    <th className='py-3 px-4 border-b-2 border-gray-700 w-1/3'>Class Code</th>
                                    <th className='py-3 px-4 border-b-2 border-gray-700 w-2/3'>Class Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["CPSC 110", "Computation, Programs, and Programming"],
                                    ["CPSC 121", "Models of Computation"],
                                    ["CPSC 210", "Software Construction"],
                                    ["CPSC 221", "Basic Data Structures and Algorithms"],
                                    ["CPSC 213", "Introduction to Computer Systems"],
                                    ["CPSC 310", "Introduction to Software Engineering"],
                                    ["CPSC 304", "Introduction to Relational Databases"],
                                    ["CPSC 320", "Intermediate Algorithm Design and Analysis"],
                                    ["CPSC 317", "Internet Computing"],
                                    ["CPSC 340", "Machine Learning and Data Mining"],
                                    ["DSCI 100", "Introduction to Data Science"],
                                    ["STAT 201", "Statistical Inference for Data Science"],
                                    ["STAT 302", "Introduction to Probability"],
                                    ["MATH 100", "Calculus I"],
                                    ["MATH 101", "Calculus II"],
                                    ["MATH 200", "Calculus III"],
                                    ["MATH 221", "Matrix Algebra"],
                                ].map(([code, title], index) => (
                                    <motion.tr 
                                        key={code}
                                        className='hover:bg-gray-800/50 transition-colors duration-200 text-gray-400 hover:text-gray-200'
                                        variants={fadeIn}
                                        custom={index}
                                    >
                                        <td className='py-3 px-4 border-t border-gray-700'>{code}</td>
                                        <td className='py-3 px-4 border-t border-gray-700 text-left'>{title}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </motion.section>
            </main>
        </motion.div>
    );
};

export default Projects;