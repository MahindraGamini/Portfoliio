"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import im1 from '../public/utils/1.png';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Page = () => {
  const route = useRouter();
  const roles = [
    'Full Stack Developer',
    'Blockchain Developer',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Designer',
    'Competitive Programmer',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  
  useEffect(() => {
    let typingSpeed = isDeleting ? 100 : 150;

    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];

      if (isDeleting) {
        setDisplayedText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, roles, currentRoleIndex]);

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-10 py-10 lg:py-20 bg-color dark:bg-gray-900 h-screen gap-6">
      {/* Text Section */}
      <motion.div
        className="max-w-4xl mb-8 lg:mb-0 text-center lg:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={textVariants}
      >
        <p className="mb-2 font-bold text-lg md:text-xl dark:text-white">
          Hey, I am Mahindra
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
          I am a{' '}
          <motion.span
            key={currentRoleIndex}
            className="text-purple-600 dark:text-purple-400"
          >
            <br />
            {displayedText}
          </motion.span>
        </h1>
        <p className="text-gray-600 mt-4 mb-8 text-sm md:text-base dark:text-gray-300">
          Full Stack Web Developer, UI/UX developer.<br />
          Looking for opportunities.
        </p>
        <button
          className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition dark:bg-purple-500 dark:hover:bg-purple-600"
          onClick={() => route.push('/contact')}
        >
          Hire Me
        </button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="max-w-xs md:max-w-md mt-4" // Add margin-top here
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={imageVariants}
      >
        <Image src={im1} alt="image" height={750} width={750} className="object-cover" />
      </motion.div>
    </div>
  );
};

export default Page;
