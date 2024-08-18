import React from 'react';
import Image from 'next/image';

interface HeroProps {
  id?: string;
}

export const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <section id={id} className="flex flex-col md:flex-row h-auto md:h-[769px] px-4 py-8 md:p-12 lg:p-16 items-center gap-8 md:gap-12 lg:gap-16 bg-white justify-between">
      <div className="flex flex-col flex-1 items-start gap-6 md:gap-8">
        <h1 className="text-black font-sans text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Restoring Your <span className="text-[#4169E1]">Movement,</span> Renewing Your Life
        </h1>
        <h2 className="text-[#4169E1] font-sans text-3xl md:text-4xl lg:text-5xl font-bold">
          Dr. Abhilash Nanda (PT)
        </h2>
        <p className="text-gray-700 font-sans text-lg md:text-xl lg:text-2xl leading-relaxed">
          Welcome to Healing Here, your trusted partner in physiotherapy. Our experts specialize in personalized treatments for injury recovery, chronic pain management, and enhanced physical performance. Using state-of-the-art techniques and compassionate care, we help you achieve optimal health and mobility.
        </p>
        <button className="bg-[#4169E1] text-white font-sans text-lg md:text-xl font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors">
          Get Started
        </button>
      </div>
      <div className="flex-1 relative">
        <Image 
          loading="lazy" 
          src="/assets/illustration.png" 
          alt="Physiotherapy treatment illustration" 
          width={640} 
          height={540} 
          className="object-contain sm:ml-6" 
        />
      </div>
    </section>
  );
};
