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
        <h1 className="text-4xl font-bold text-gray-300">Projects & Skills</h1>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-300">Projects</h2>
          {/* bizchina */}
          <div className='flex items-center justify-between border-2 border-gray-500 rounded-lg p-3 m-3 mb-5 text-gray-500'>
            <div>
                <a className='text-xl font-bold text-gray-100 flex justify-start' href="https://github.com/zhujhj/bizchina" target="_blank">
                  UBC BizChina Internal Task Application &nbsp; <FaExternalLinkAlt size={15} className='text-gray-100 mt-1.5'/> 
                </a>
                <p className='italic'>
                    Technologies: ReactJS, NodeJS, Firebase
                </p>
                <li>Developed an internal task management tool for 50+ people at UBC BizChina using ReactJS, NodeJS, and Firebase</li>
                <li>Implemented robust user authentication with Firebase that allows users to log-in using their Google account</li>
                <li>Created a drag and drop Kanban board and interactive calendar that saves information to Firestore Database 
                  using CRUD operations, as well as a real-time chat feature using ChatEngine allowing for efficient communication</li>
                <li>Deployed the platform to the club and reached 100% positive feedback from club members</li>
            </div>
            <img src="/images/bizchina_app.png" 
            className="object-cover w-[300px] justify-right border-2 border-gray-500 rounded-lg" 
            // onClick={() => openModal("/images/course4you.png")}
            />
          </div>
          {/* insightubc */}
          <div className='flex items-center justify-between border-2 border-gray-500 rounded-lg p-3 m-3 mb-5 text-gray-500'>
            <div>
                <a className='text-xl font-bold text-gray-100 flex justify-start' href="https://www.youtube.com/watch?v=A8YGxr8qbaQ" target="_blank">
                  insightUBC Course Finder &nbsp; <FaExternalLinkAlt size={15} className='text-gray-100 mt-1.5'/> 
                </a>
                <p className='italic'>
                  Technologies: TypeScript, NodeJS, ExpressJS, ReactJS
                </p>
                <li>Collaborated with a partner to develop a full-stack application that enables effective querying of historical data 
                regarding the sections and rooms of UBC using TypeScript, NodeJS, ExpressJS, and ReactJS</li>
                <li>Unzipped, parsed, and extracted information to query from zipped JSON and HTML files using JSZip and parse5</li>
                <li>Used REST API endpoints to make HTTP requests and seamlessly connect the front and back end of the application</li>
                <li>Wrote an exhaustive set of 100+ tests using Chai and Mocha to ensure the program is functioning as expected</li>
            </div>
            <img src="/images/insightubc.png" 
            className="object-cover w-[300px] justify-right border-2 border-gray-500 rounded-lg" 
            // onClick={() => openModal("/images/course4you.png")}
            />
          </div>
          {/* calorie tracker */}
          <div className='flex items-center justify-between border-2 border-gray-500 rounded-lg p-3 m-3 mb-5 text-gray-500'>
            <div>
                <a className='text-xl font-bold text-gray-100 flex justify-start' href="https://github.com/zhujhj/Calorie-Tracker" target="_blank">
                  Calorie Tracker &nbsp; <FaExternalLinkAlt size={15} className='text-gray-100 mt-1.5'/> 
                </a>
                <p className='italic'>
                    Technologies: Java, Java Swing
                </p>
                <li>Designed a GUI-based program that helps users balance workout and diet plans on a daily basis</li>
                <li>Implemented a registration/log-in system, navigable calendar,  as well as data retention using text files</li>
                <li>Developed 30+ unit tests to fix bugs and validate the functionality of the program</li>
                <li>Worked with a client to perform a user acceptance test (UAT) to make sure the program meets the client's needs</li>
            </div>
            <img src="/images/calorietracker.png" 
            className="object-cover w-[300px] justify-right border-2 border-gray-500 rounded-lg" 
            // onClick={() => openModal("/images/calorietracker.png")}
            />
          </div>
          {/* produhacks */}
          <div className='flex items-center justify-between border-2 border-gray-500 rounded-lg p-3 m-3 mb-5 text-gray-500'>
            <div>
                <a className='text-xl font-bold text-gray-100 flex justify-start' href="https://github.com/leowang801/produhacks-team1-2023" target="_blank">
                  Course4You &nbsp; <FaExternalLinkAlt size={15} className='text-gray-100 mt-1.5'/> 
                </a>
                {/* <p className=''>
                    Hi there! My name is [Your Name], and this is my personal profile. I'm passionate about [your interests/hobbies], and I love to [what you enjoy doing]. 
                    On this website, you'll find information about my background, skills, projects, and more.
                </p> */}
                <p className='italic'>
                    Technologies: MongoDB, ExpressJS, ReactJS, NodeJS
                </p>
                <li>Developed a course rating system prototype for university students with multiple group members at 
                    ProduHacks by UBC Biztech using MongoDB, ExpressJS, ReactJS, and NodeJS (MERN stack)</li>
                <li>Used Figma to design the user interface and efficiently convert it into code (HTML, CSS)</li>
                <li>Presented a business pitch of the product to judges analysing the feasibility, monetization, tech stack, and more</li>

            </div>
            <img src="/images/course4you.png" 
            className="object-cover w-[300px] justify-right border-2 border-gray-500 rounded-lg" 
            // onClick={() => openModal("/images/course4you.png")}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-100">Skills</h2>
          {/* <ul className="list-disc ml-8">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            <li>...</li>
          </ul> */}
          <div className='flex justify-center text-center my-3'>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>Java</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>R</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>Jupyter Notebook</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>C++</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>Python</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>HTML</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>CSS</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>JavaScript</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>React.js</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>Next.js</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>Git</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>Visual Studio Code</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>IntelliJ</p>
          </div>
          <div className='flex justify-center text-center'>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>TypeScript</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>SQL</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>Firebase</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>C</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>Oracle Database</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>REST API</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-gray-500'>MongoDB</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-100">Relevant Courses</h2>
          {/* <ul className="list-disc ml-8">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            <li>...</li>
          </ul> */}
          <div className='flex justify-center text-center text-gray-500'>
            <table className='border-2 border-gray-500 rounded-lg p-2 mx-2'>
              <tr className='border-2 border-gray-500 bg-gray-500'>
                <th className='w-[100px] text-black'>Class Code</th>
                <th className='w-[400px] text-black'>Class Title</th>
              </tr>
              <tr> 
                <td>CPSC 110</td>
                <td>Computation, Programs, and Programming</td>
              </tr>
              <tr>
                <td>CPSC 121</td>
                <td>Models of Computation</td>
              </tr>
              <tr>
                <td>CPSC 210</td>
                <td>Software Construction</td>
              </tr>
              <tr>
                <td>CPSC 221</td>
                <td>Basic Data Structures and Algorithms</td>
              </tr>
              <tr>
                <td>CPSC 213</td>
                <td>Introduction to Computer Systems</td>
              </tr>
              <tr>
                <td>CPSC 310</td>
                <td>Introduction to Software Engineering</td>
              </tr>
              <tr>
                <td>CPSC 304</td>
                <td>Introduction to Relational Databases</td>
              </tr>
              <tr>
                <td>CPSC 320</td>
                <td>Intermediate Algorithm Design and Analysis</td>
              </tr>
              <tr>
                <td>CPSC 317</td>
                <td>Internet Computing</td>
              </tr>
              <tr>
                <td>CPSC 340</td>
                <td>Machine Learning and Data Mining</td>
              </tr>
              <tr>
                <td>DSCI 100</td>
                <td>Introduction to Data Science</td>
              </tr>
              <tr>
                <td>STAT 201</td>
                <td>Statistical Inference for Data Science</td>
              </tr>
              <tr>
                <td>STAT 302</td>
                <td>Introduction to Probability</td>
              </tr>
              <tr>
                <td>MATH 100</td>
                <td>Calculus I</td>
              </tr>
              <tr>
                <td>MATH 101</td>
                <td>Calculus II</td>
              </tr>
              <tr>
                <td>MATH 200</td>
                <td>Calculus III</td>
              </tr>
              <tr>
                <td>MATH 221</td>
                <td>Matrix Algebra</td>
              </tr>
            </table>
          </div>
        </section>
      </main>

      {/* <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer> */}
    </motion.div>
  );
};

export default Projects;