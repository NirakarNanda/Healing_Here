"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from 'flowbite-react';
import Cookies from 'js-cookie';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Link } from 'react-scroll';
import NextLink from "next/link";

export const Header = () => {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token') || '';
    setToken(token);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const logout = async () => {
    const response = await axios.get('/api/logout');
    if (response.data.success) {
      toast.success('Logout successfully', { style: { color: "white", background: '#333' } });
      Cookies.remove('token');
      setToken('');
      router.push('/home');
    } else {
      toast.error(response.data.message, { style: { color: "white", background: '#333' } });
    }
  };

  const handleDoctorSpaceClick = () => {
    router.push('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row items-center p-3 md:p-4 justify-between bg-white border-b-2 transition-all duration-300 ease-in-out">
      {/* Logo Section */}
      <div className="flex items-center w-full md:w-auto">
        <div 
          className="relative w-64 h-16 md:w-48 md:h-16 cursor-pointer transform hover:scale-105 transition-transform duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Image
            src="/assets/Header Logo.png"
            alt="logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority={true}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} color="#000" /> : <FaBars size={24} color="#000" />}
      </div>

      {/* Navigation and Appointment Button */}
      <nav className={`flex flex-col md:flex-row md:items-center md:space-x-6 mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex transition-all duration-300 ease-in-out`}>
        <div className="flex flex-col md:flex-row gap-1 md:gap-2 w-full">
          {['home', 'services', 'specialization', 'achievements', 'address', 'contact-us'].map((item) => (
            <Link 
              key={item} 
              to={item} 
              smooth={true} 
              duration={1000}
              onClick={closeMenu}
            >
              <p className='cursor-pointer px-3 py-2 text-black hover:text-[#516EFF] transition-colors whitespace-nowrap transform hover:translate-y-[-2px] transition-transform duration-300'>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </Link>
          ))}
        </div>

        <div className='flex flex-col md:flex-row gap-4 mt-4 md:mt-0'>
          <Link to="contacts" smooth={true} duration={1000} onClick={closeMenu}>
            <Button className='bg-[#5169E1] text-white rounded hover:bg-[#4353B3] transition-all duration-300 w-full md:w-auto transform hover:scale-105'>
              Appointment
            </Button>
          </Link>

          {token && token !== '' ? (
            <Button onClick={logout} className='bg-[#5169E1] text-white rounded hover:bg-[#4353B3] transition-all duration-300 w-full md:w-auto transform hover:scale-105'>
              Logout
            </Button>
          ) : (
            <NextLink href="/login">
              <Button className='whitespace-nowrap bg-[#5169E1] text-white rounded hover:bg-[#4353B3] transition-all duration-300 w-full md:w-auto transform hover:scale-105'>
                Doctor&apos;s Space
              </Button>
            </NextLink>
          )}
        </div>
      </nav>
    </header>
  );
};
