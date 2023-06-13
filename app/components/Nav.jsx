'use client';

import Link from 'next/link';
import { LinkedinLogo } from "phosphor-react";
import { GithubLogo } from "phosphor-react";

const Nav = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-white font-bold text-lg">JASON ZHU</h1>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/photogallery">
                <h1 className="text-gray-300 hover:text-white">Photo Gallery</h1>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <h1 className="text-gray-300 hover:text-white">Projects</h1>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/jason-zhu4" target="_blank">
                {/* <h1 className="text-gray-300 hover:text-white">Contact</h1> */}
                <LinkedinLogo size={26} className='text-white'/>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/zhujhj" target="_blank">
                <GithubLogo size={26} className='text-white'/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;