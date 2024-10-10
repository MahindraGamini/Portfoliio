// pages/projects.tsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import im1 from '../../public/utils/im1.png'; 
import im2 from '../../public/utils/im2.png';
import im3 from '../../public/utils/im3.png';
import im4 from '../../public/utils/im4.png'
import im5 from '../../public/utils/im5.png'
import im6 from '../../public/utils/im6.png'
import im7 from '../../public/utils/im7.png'


const projects = [
  {
    title: 'Food-Villa',
    description: 'A food ordering website using swiggys api',
    imageSrc: im1,
    technologies: [ 'React.js','Redux' ,'Tailwind CSS'],
    liveLink: 'https://www.linkedin.com/posts/mahindra-gamini-73b8b9219_reactjs-swiggyapi-webdevelopment-activity-7159780357758668800-Yyob?utm_source=share&utm_medium=member_desktop',
    githubLink: 'https://github.com/MahindraGamini/first-react',
  },
  {
    title: 'Socio-Pedia',
    description: 'A Social Media Application',
    imageSrc: im2,
    technologies: ['Node.js', 'Express', 'MongoDB','React','Redux'],
    liveLink: 'https://www.linkedin.com/posts/mahindra-gamini-73b8b9219_mernstack-webdevelopment-socialmediaapp-activity-7201154949106319361-9kzm?utm_source=share&utm_medium=member_desktop',
    githubLink: 'https://github.com/MahindraGamini/Social-Media-',
  },
  {
    title: 'Dev-AMIGO',
    description: 'Developers Interacting community',
    imageSrc: im3,
    technologies: ['NextJS', 'Tailwindcss', 'NodeJS','MongoDB'],
    liveLink: 'https://stack-overflow-nextjs-wgbn.vercel.app/',
    githubLink: 'https://github.com/MahindraGamini/stack_overflow_nextjs',
  },
  {
    title: 'Alumini Hub',
    description: 'A placce where alumini can interact with the college and guide the students',
    imageSrc: im4,
    technologies: ['ReactJS', 'Tailwindcss', 'NodeJS','MongoDB'],
    liveLink: '',
    githubLink: 'https://github.com/MahindraGamini/Sih',
  },
  {
    title: 'Emo-Diary',
    description: 'MentalWellness App for students where they can track their emotions and get suggestions.',
    imageSrc: im5,
    technologies: ['ReactJS', 'Tailwindcss', 'FireBase','Python','Flask','BERT Model'],
    liveLink: '',
    githubLink: 'https://github.com/MahindraGamini/t-hub-hackathon',
  },
  {
    title: 'Music Player',
    description: 'A basic music player',
    imageSrc: im6,
    technologies: ['JS','HTML','CSS'],
    liveLink: 'https://spotify-clone-mahi.glitch.me/spot.html',
    githubLink: 'https://github.com/MahindraGamini/spotify-clone',
  },
  {
    title: 'Sound Design',
    description: 'Design your music by clicking keyboard keys(Works only on pC& Laptops)',
    imageSrc: im7,
    technologies: ['JS','HTML','CSS'],
    liveLink: 'https://sound-des-mahi.glitch.me/jaa.htm',
    githubLink: 'https://github.com/MahindraGamini/Sound',
  }


];

const ProjectsPage: React.FC = () => {
  return (
    <div className="px-6 lg:px-10 py-10 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
