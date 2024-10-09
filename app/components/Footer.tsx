// app/components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { SunIcon, MoonIcon, HomeIcon, InformationCircleIcon, ClipboardListIcon, PhoneIcon } from "@heroicons/react/solid";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background dark:bg-gray-800 text-foreground py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
    

        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link
            href="https://github.com/yourusername"
            className="hover:text-primary dark:hover:text-purple-300"
            aria-label="GitHub"
          >
            {/* GitHub Icon */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297C0 17.629 3.438 22.095 8.205 23.543C8.805 23.647 9.025 23.297 9.025 22.967C9.025 22.665 9.015 21.975 9.01 20.998C5.672 21.695 4.967 19.462 4.967 19.462C4.422 17.97 3.633 17.628 3.633 17.628C2.546 16.908 3.717 16.924 3.717 16.924C4.922 16.994 5.554 18.14 5.554 18.14C6.633 19.905 8.391 19.428 9.076 19.126C9.18 18.347 9.495 17.805 9.84 17.5C7.173 17.195 4.333 16.176 4.333 11.49C4.333 10.18 4.764 9.09 5.53 8.25C5.407 8.01 5.07 6.78 5.683 5.082C5.683 5.082 6.623 4.758 9.01 6.423C9.99 6.14 11.07 5.998 12.15 6.002C13.23 5.998 14.31 6.14 15.29 6.423C17.676 4.758 18.626 5.082 18.626 5.082C19.238 6.78 18.901 8.01 18.778 8.25C19.544 9.09 19.975 10.18 19.975 11.49C19.975 16.19 17.13 17.19 14.458 17.49C14.873 17.86 15.238 18.57 15.238 19.64C15.238 21.23 15.223 22.38 15.223 22.967C15.223 23.298 15.44 23.652 16.056 23.542C20.82 22.095 24.256 17.629 24.256 12.297C24.256 5.67 18.883 0.297 12.256 0.297H12Z" />
            </svg>
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            className="hover:text-primary dark:hover:text-purple-300"
            aria-label="LinkedIn"
          >
            {/* LinkedIn Icon */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.869 0-2.156 1.459-2.156 2.964v5.7h-3v-10h2.877v1.367h.041c.401-.76 1.379-1.562 2.836-1.562 3.038 0 3.6 2.0 3.6 4.749v6.946z"/>
            </svg>
          </Link>
          {/* Add more social media links as needed */}
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Mahindra Gamini. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
