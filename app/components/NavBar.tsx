"use client";
import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
   
        <div className="text-2xl font-bold heading font-roboto text-primary dark:text-purple-300">
          <Link href={'/'}>Mahindra Gamini</Link>
        </div>

        <div className="lg:hidden flex items-center space-x-4">

  <button onClick={toggleTheme} className="focus:outline-none" aria-label="Toggle Theme">
    {theme === 'light' ? (
      <MoonIcon className="w-6 h-6 text-primary" />
    ) : (
      <SunIcon className="w-6 h-6 text-yellow-400" />
    )}
  </button>

  <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle Menu">
    <svg
      className="w-6 h-6 text-primary dark:text-purple-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>
</div>

        <div
  className={`${
    isOpen ? 'flex flex-col items-center space-y-4 py-4' : 'hidden'
  } lg:flex lg:flex-row lg:items-center lg:space-x-6 flex-1 justify-center heading font-semibold text-lg`}
>
  <Link href="/" className="hover:text-primary dark:hover:text-purple-300 py-2 lg:py-0 active:underline">Home</Link>
  <Link href="/about" className="hover:text-primary dark:hover:text-purple-300 py-2 lg:py-0 active:underline">About</Link>
  <Link href="/projects" className="hover:text-primary dark:hover:text-purple-300 py-2 lg:py-0 active:underline">Projects</Link>
</div>

        <div className="ml-4 lg:ml-auto lg:w-fit heading flex items-center space-x-4">
          <button onClick={toggleTheme} className="hidden lg:block focus:outline-none" aria-label="Toggle Theme">
            {theme === 'light' ? (
              <MoonIcon className="w-6 h-6 text-primary" />
            ) : (
              <SunIcon className="w-6 h-6 text-yellow-400" />
            )}
          </button>
          <Link href="/contact"
            className="border-2 primary dark:border-purple-300 px-4 py-2 rounded-md hover:bg-primary dark:hover:bg-purple-300 btn-prim hover:text-blue-500 dark:hover:text-gray-800 transition-colors duration-300"
          >
            Contact Me
          </Link>
        </div>
      </nav>

    
    </div>
  );
};

export default NavBar;
