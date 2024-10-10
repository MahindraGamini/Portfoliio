// pages/about.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import r from '../../public/utils/react.png';
import j from '../../public/utils/javascript.png';
import n from '../../public/utils/next.png';
import b from '../../public/utils/nodejs.png';
import ja from '../../public/utils/java.png';
import py from '../../public/utils/Python.png';
import cp from '../../public/utils/C++.png';
import sol from '../../public/utils/Christmas Ethereum Coin.png';
import eth from '../../public/utils/Ethereum Blockchain.png';





interface Skill {
  name: string;
  img: string;
}

interface Internship {
  role: string;
  company: string;
  description: string;
}

const Page: React.FC = () => {
  const skills: Skill[] = [
    { name: 'ReactJS', img: r },
    { name: 'NextJS', img: n },
    { name: 'ReduxJS', img: j },
    { name: 'Ethereum', img: eth },
    { name: 'Solidity', img: sol },
    { name: 'React Native', img: r },
    { name: 'Express', img: b },
    { name: 'Node.js', img: b },
    { name: 'MongoDB', img: j },
    { name: 'C++', img: cp },
    { name: 'Python', img: py },
    { name: 'Java', img: ja },
  ];

  const internships: Internship[] = [
    {
      role: 'FrontEnd Intern',
      company: 'ACQUX',
      description:
        'Developed responsive frontend interfaces using React and Tailwind CSS. Collaborated with backend teams for seamless user experience.',
    },
    {
      role: 'FrontEnd Intern',
      company: 'HoosHub',
      description:
        'Built complex frontend components using Next.js and React, optimized performance for better user interaction.',
    },
    {
      role:'Open Source Lead',
      company:'GDSC VITB',
      description:
      'Open Sourcce Lead at GDSC club in VITB'
    }
  ];

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Floating animation for images
  const floatingAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [0, -10, 0],
      transition: {
        repeat: Infinity,
        duration: 3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

      <div className="py-10 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-4">About Me</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
  Hey there! I&apos;m Mahindra, a passionate Full Stack Developer with expertise in blockchain and frontend technologies.
  I love turning ideas into reality through clean and efficient code.
</p>

        </div>

        {/* Skills Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Skills</h2>
          <motion.ul
            className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg text-gray-600 dark:text-gray-300"
            initial="hidden"
            animate="visible"
            variants={listVariants}
          >
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg text-center flex flex-col items-center transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                variants={listVariants}
              >
                {/* Skill Image */}
                <motion.div
                  className="w-16 h-16 mb-2"
                  initial="hidden"
                  animate="visible"
                  variants={floatingAnimation}
                >
                  <Image src={skill.img} alt={skill.name} className="w-full h-full " />
                </motion.div>
                {/* Skill Name */}
                <span className="text-gray-800 dark:text-gray-300">{skill.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>


        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Experience</h2>
          <div className="relative border-l-4 border-purple-600 dark:border-purple-300 space-y-8">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg relative transition-colors duration-300"
                initial="hidden"
                animate="visible"
                variants={listVariants}
                whileHover={{ scale: 1.02 }}
              >
         
                <div className="absolute left-[-13px] top-6 w-6 h-6 bg-purple-600 dark:bg-purple-300 rounded-full"></div>

                <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-300 mb-2">
                  {internship.role} - {internship.company}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{internship.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
