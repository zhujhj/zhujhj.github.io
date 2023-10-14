'use client';

import Link from 'next/link';
import { LinkedinLogo } from "phosphor-react";
import { GithubLogo } from "phosphor-react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <nav className="bg-gray-800 opacity-100"> {/* bg-gradient-to-b from-gray-700 via-gray-400 to-transparent*/}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.h1 
            className="text-white font-bold text-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>JASON ZHU</motion.h1>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/photogallery">
                <h1 className="text-gray-300 hover:text-white">Photo Gallery</h1>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <h1 className="text-gray-300 hover:text-white">Projects & Skills</h1>
              </Link>
            </li>
            <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="https://www.linkedin.com/in/jason-zhu4" target="_blank">
                {/* <h1 className="text-gray-300 hover:text-white">Contact</h1> */}
                <AiFillLinkedin size={26} className='text-white'/>
              </Link>
            </motion.li>
            <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="https://github.com/zhujhj" target="_blank">
                {/* <GithubLogo size={26} className='text-white'/> */}
                <AiFillGithub size={26} className='text-white'/>
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;