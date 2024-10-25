import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 flex items-center justify-between lg:px-8">
        {/* Left Section: All Rights Reserved */}
        <div className="text-xs leading-5 text-gray-900">
          &copy; 2024 Business Daddy Studio, Inc. All rights reserved.
        </div>

        {/* Right Section: Discover more tools and Privacy */}
        <div className="text-xs leading-5 text-gray-900 flex space-x-4">
          <a href="https://businessdaddy.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
            Discover more tools at businessdaddy.org
          </a>
          <span className="text-gray-300">|</span>
          <Link to="/privacy" className="text-indigo-600 hover:underline">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}