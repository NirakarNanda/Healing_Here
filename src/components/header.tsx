"use client";

import { Button } from 'flowbite-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative flex flex-col md:flex-row items-center p-2 md:p-4 justify-between bg-white">
      {/* Logo Section */}
      <div className="flex items-center w-full md:w-auto">
        <div className="relative w-64 h-16 cursor-pointer">
          <Image 
            src="/assets/Colour Logo.png" 
            alt="logo" 
            fill
            objectFit="contain" 
          />
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="absolute top-4 right-4 sm800:hidden md:hidden cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} color="#000" /> : <FaBars size={24} color="#000" />}
      </div>

      {/* Navigation and Appointment Button */}
      <nav className={`flex flex-col md:flex-row md:items-center md:space-x-8 mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
        <div className="flex flex-col md:flex-row gap-1 sm800:gap-2 w-full">
          <p className='cursor-pointer px-4 py-2 text-black hover:text-[#516EFF] transition-colors whitespace-nowrap'>Home</p>
          <p className='cursor-pointer px-4 py-2 text-black hover:text-[#516EFF] transition-colors whitespace-nowrap'>Services</p>
          <p className='cursor-pointer px-4 py-2 text-black hover:text-[#5169E1] transition-colors whitespace-nowrap'>Specialization</p>
          <p className='cursor-pointer px-4 py-2 text-black hover:text-[#5169E1] transition-colors whitespace-nowrap'>Achievements</p>
          <p className='cursor-pointer px-4 py-2 text-black hover:text-[#5169E1] transition-colors whitespace-nowrap'>Contacts</p>
        </div>

        <div className="flex justify-center md:justify-start md:ml-4 mt-4 md:mt-0">
          <Button className='bg-[#5169E1] text-white rounded hover:bg-[#4353B3] transition-colors w-full md:w-auto'>Appointment</Button>
        </div>
      </nav>
    </header>
  );
};
