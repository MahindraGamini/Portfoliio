'use client'
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData; // Assuming you're using imported images
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  technologies,
  liveLink,
  githubLink,
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image src={imageSrc} alt={title} width={400} height={250} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        <div className="mt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4">
          {liveLink ? (
            <Link href={liveLink} target="_blank">
              <button className="text-purple-600 hover:underline mr-4 dark:text-purple-400">
                Live Demo
              </button>
            </Link>
          ) : (
            <span className="text-gray-500 dark:text-gray-400">Coming Soon</span>
          )}
          <Link href={githubLink} target="_blank">
            <button className="text-purple-600 hover:underline dark:text-purple-400">
              GitHub
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
