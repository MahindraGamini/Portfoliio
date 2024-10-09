// pages/contact.tsx
"use client";
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link from next/link

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        'service_i78vtmt',
        'template_mq8y05s',
        templateParams,
        'QIL4BKC3AK9s_th3w'
      )
      .then(
        (response) => {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setErrorMessage('');
        },
        (err) => {
          setErrorMessage('Something went wrong. Please try again.');
        }
      );
  };


  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-8"
          variants={fadeInUp}
        >
          Contact Me
        </motion.h1>

      
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center mb-10"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col space-y-4 text-gray-800 dark:text-white"
            variants={fadeInLeft}
          >
            <Link href="https://github.com/MahindraGamini" className="flex items-center space-x-2 hover:underline">
              <FaGithub size={24} />
              <span>GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/mahindra-gamini-73b8b9219/" className="flex items-center space-x-2 hover:underline">
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </Link>
            <Link href="mailto:saimahindra06@gmail.com" className="flex items-center space-x-2 hover:underline">
              <FaEnvelope size={24} />
              <span>saimahindra06@gmail.com</span>
            </Link>
            <div className="flex items-center space-x-2">
              <FaPhone size={24} />
              <span>+91-7981944497</span>
            </div>
          </motion.div>
        </motion.div>

   
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          variants={fadeInRight}
        >
          {isSubmitted && <p className="text-green-600 mb-4">Thank you! Your message has been sent.</p>}
          {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 dark:text-white mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 dark:text-white mb-1">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-800 dark:text-white mb-1">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows={5}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition dark:bg-purple-500 dark:hover:bg-purple-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
