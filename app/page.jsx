// import Image from 'next/image'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">app/page.js</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cake } from "phosphor-react";
import { MapPin } from "phosphor-react";
import { Envelope } from "phosphor-react";
import { Student } from "phosphor-react";

const Home = () => {

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
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
        {/* <div>
          <h1 className="text-4xl font-bold">Jason Zhu</h1>
          <p>Computer Science Student at UBC</p>
        </div> */}
        <div>
        <div className="justify-center">
          <h1 className="text-6xl font-bold">
            Jason Zhu
          </h1>
          <p className=''>Undergraduate Computer Science Student at UBC</p>
        </div>
        <div className='mt-8 flex justify-center'>
          <div className="border-2 border-black w-[200px] h-[200px] rounded-full overflow-hidden">
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
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p>
            Hi there! My name is Jason Zhu, and I am a 3rd year BSc Computer Science student at the University of British Columbia. 
            I'm passionate about coding and anything tech related. When I'm not working, I like to play sports such as basketball, hockey,
            and more. I also like to play guitar, ski, and explore the outdoors. I have recently tried to get into photography as well.
            On this website, you'll find information about my background, skills, projects, and more.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Bio</h2>
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
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className='flex justify-start'>
            <Envelope size={32} className='pr-2 -mt-1'/> zhujason4@gmail.com
          </p>
        </section>
      </motion.main>
    </div>
  );
};

export default Home;