'use client';
import { useEffect, useState } from 'react';
import Menubar from "@/components/menubar";
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div 
        className="centered-name text-center moved"
        id="nameSection"
      >
        <Link href="/blank">
          <h1 className="text-6xl font-bold mb-4">Chanin J.</h1>
        </Link>
        <p className="text-2xl text-gray-600">A1198</p>
      </div>
      <Menubar />
      <div className="content-container">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Contact Me</h1>
          <div className="flex justify-center space-x-8">
            <div className="group relative">
              <a 
                href="https://github.com/Afadas" 
                className="social-icon hover:scale-110 transition-transform" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-5xl text-gray-700 hover:text-gray-900"></i>
              </a>
              <span className="invisible group-hover:visible absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-sm px-2 py-1 rounded">
                Github: @Afadas
              </span>
            </div>

            <div className="group relative">
              <a 
                href="https://www.linkedin.com/in/cha-j-412a44305/" 
                className="social-icon hover:scale-110 transition-transform" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-5xl text-[#0A66C2] hover:text-[#004182]"></i>
              </a>
              <span className="invisible group-hover:visible absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-sm px-2 py-1 rounded">
                LinkedIn: Chanin J.
              </span>
            </div>

            <div className="group relative">
              <a 
                href="mailto:ffck.8256@gmail.com" 
                className="social-icon hover:scale-110 transition-transform"
              >
                <i className="fas fa-envelope text-5xl text-gray-700 hover:text-gray-900"></i>
              </a>
              <span className="invisible group-hover:visible absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-sm px-2 py-1 rounded">
                Email: ffck.8256@gmail.com
              </span>
            </div>

            <div className="group relative">
              <a 
                href="https://a1198.itch.io/" 
                className="social-icon hover:scale-110 transition-transform" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-itch-io text-5xl text-[#FA5C5C] hover:text-[#E13E3E]"></i>
              </a>
              <span className="invisible group-hover:visible absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-sm px-2 py-1 rounded">
                Itch.io: a1198
              </span>
            </div>

            <div className="group relative">
              <a 
                href="tel:+66814490349" 
                className="social-icon hover:scale-110 transition-transform"
              >
                <i className="fas fa-phone text-5xl text-gray-700 hover:text-gray-900"></i>
              </a>
              <span className="invisible group-hover:visible absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-sm px-2 py-1 rounded">
                Tel: +66814490349
              </span>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600">
            <p className="mb-2">Feel free to reach out!</p>
            <p>I'm always open to discussing new projects and opportunities. I'm broke pls hire me.</p>
          </div>
        </div>
      </div>
    </div>
  );
}