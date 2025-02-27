'use client';

import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between h-12">
          <Link href="/">
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h1 className="text-gray-200 font-bold text-lg tracking-tight group-hover:text-white transition-colors duration-200">
                JASON ZHU
              </h1>
              <motion.div 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
            </motion.div>
          </Link>

          <ul className="flex items-center space-x-6">
            <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="/photogallery">
                <div className="relative group">
                  <h1 className={`${isActive('/photogallery') ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors duration-200`}>
                    Gallery
                  </h1>
                  {isActive('/photogallery') && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                      layoutId="underline"
                    />
                  )}
                </div>
              </Link>
            </motion.li>
            
            <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="/projects">
                <div className="relative group">
                  <h1 className={`${isActive('/projects') ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors duration-200`}>
                    Projects
                  </h1>
                  {isActive('/projects') && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500"
                      layoutId="underline"
                    />
                  )}
                </div>
              </Link>
            </motion.li>

            <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="/experience">
                <div className="relative group">
                  <h1 className={`${isActive('/experience') ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors duration-200`}>
                    Experience
                  </h1>
                  {isActive('/experience') && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500"
                      layoutId="underline"
                    />
                  )}
                </div>
              </Link>
            </motion.li>

            <div className="flex items-center space-x-4 ml-4 border-l border-gray-700 pl-4">
              <motion.li whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="https://www.linkedin.com/in/jason-zhu4" target="_blank">
                  <AiFillLinkedin size={24} className='text-gray-400 hover:text-blue-400 transition-colors duration-200'/>
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="https://github.com/zhujhj" target="_blank">
                  <AiFillGithub size={24} className='text-gray-400 hover:text-purple-400 transition-colors duration-200'/>
                </Link>
              </motion.li>
            </div>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;