'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';

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
        <h1 className="text-4xl font-bold">Projects & Skills</h1>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
          <div className='flex justify-between border-2 border-black rounded-lg p-3 m-3'>
            <div>
                <h3 className='text-xl font-bold'>Calorie Tracker</h3>
                <p className='italic'>
                    Technologies: Java, Java Swing
                </p>
                <li>Designed a GUI-based program that helps users balance workout and diet plans on a daily basis</li>
                <li>Implemented a registration/log-in system, navigable calendar,  as well as data retention using text files</li>
                <li>Developed 30+ unit tests to fix bugs and validate the functionality of the program</li>
                <li>Worked with a client to perform a user acceptance test (UAT) to make sure the program meets the client's needs</li>
            </div>
            <img src="/images/calorietracker.png" 
            className="object-cover w-[300px] justify-right border-2 border-black rounded-lg" 
            // onClick={() => openModal("/images/calorietracker.png")}
            />
          </div>
          <div className='flex justify-between border-2 border-black rounded-lg p-3 m-3'>
            <div>
                <a className='text-xl font-bold' href="https://github.com/leowang801/produhacks-team1-2023" target="_blank">Course4You</a>
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
            className="object-cover w-[300px] justify-right border-2 border-black rounded-lg" 
            // onClick={() => openModal("/images/course4you.png")}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
          {/* <ul className="list-disc ml-8">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            <li>...</li>
          </ul> */}
          <div className='flex justify-center text-center'>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-purple-300'>Java</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-purple-300'>R</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-purple-300'>Jupyter Notebook</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-purple-300'>C++</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-purple-300'>Python</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-purple-300'>HTML</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-purple-300'>CSS</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-purple-300'>JavaScript</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-purple-300'>React.js</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-purple-300'>Next.js</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-purple-300'>Git</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-purple-300'>Visual Studio Code</p>
            <p className='border-2 border-black rounded-lg p-2 mx-2 bg-purple-300'>IntelliJ</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Relevant Courses</h2>
          {/* <ul className="list-disc ml-8">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            <li>...</li>
          </ul> */}
          <div className='flex justify-center text-center'>
            <table className='border-2 border-black rounded-lg p-2 mx-2'>
              <tr className='border-2 border-black bg-purple-300'>
                <th className='w-[100px]'>Class Code</th>
                <th className='w-[400px]'>Class Title</th>
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
              {/* <tr>
                <td>DSCI 100</td>
                <td>Introduction to Data Science</td>
              </tr> */}
              {/* <tr>
                <td>STAT 201</td>
                <td>Statistical Inference for Data Science</td>
              </tr>
              <tr>
                <td>STAT 302</td>
                <td>Introduction to Probability</td>
              </tr> */}
              {/* <tr>
                <td>MATH 100</td>
                <td>Calculus I</td>
              </tr> */}
              {/* <tr>
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
              </tr> */}
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