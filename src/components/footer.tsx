import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Heimdall</h3>
            <p className="text-gray-400 mb-4">
              Secure access control powered by blockchain technology for the modern world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white">Features</Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</Link>
              </li>
              <li>
                <Link href="#use-cases" className="text-gray-400 hover:text-white">Use Cases</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">Documentation</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">API Reference</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">Tutorials</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">Support</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">Careers</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">Partners</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Heimdall. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-gray-400 text-sm mr-2">Built on</span>
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.075 3.233C16.713 3.045 16.301 2.96 15.894 2.998C15.486 3.035 15.098 3.193 14.779 3.453L3.06 12.711C2.75 12.963 2.518 13.3 2.397 13.683C2.276 14.065 2.27 14.475 2.381 14.861L6.209 28.377C6.322 28.766 6.546 29.111 6.852 29.371C7.157 29.631 7.531 29.795 7.925 29.844L21.62 31.722C22.031 31.773 22.447 31.705 22.819 31.527C23.192 31.349 23.502 31.068 23.712 30.721L31.552 16.731C31.764 16.379 31.871 15.975 31.858 15.566C31.844 15.156 31.711 14.761 31.476 14.424L22.816 1.816C22.582 1.484 22.254 1.221 21.871 1.057C21.488 0.894 21.066 0.836 20.65 0.89L17.075 3.233Z" fill="#9945FF"/>
              <path d="M11.841 11.192L9.249 16.532L8.05 20.874L10.424 24.204L14.94 25.575L19.874 21.752L21.073 16.573L18.481 11.192L14.94 8.636L11.841 11.192Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}