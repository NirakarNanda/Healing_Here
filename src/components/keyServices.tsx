// KeyServices.tsx
import React from 'react';
import KeyCard from './ui/keyCard';

const keyServices = [
  {
    imageSrc: "/assets/key_services_icon/kinesio.png",
    title: "Kinesio Taping",
    description: "Supports muscles and joints while allowing full movement, aiding in pain reduction and injury prevention."
  },
  {
    imageSrc: "/assets/key_services_icon/vestibular.png",
    title: "Vestibular Rehabilitation",
    description: "Improves balance and reduces dizziness through specialized exercises."
  },
  {
    imageSrc: "/assets/key_services_icon/electrotherapy.png",
    title: "Electrotherapy",
    description: "Uses electrical impulses to reduce pain, improve circulation, and stimulate muscle function."
  },
  {
    imageSrc: "/assets/key_services_icon/dry_needling.png",
    title: "Dry Needling",
    description: "Relieves muscle tension and pain by targeting trigger points with fine needles."
  },
  {
    imageSrc: "/assets/key_services_icon/pilate_based.png",
    title: "Pilates-Based Physiotherapy",
    description: "Enhances core strength and flexibility through tailored Pilates exercises."
  },
  {
    imageSrc: "/assets/key_services_icon/joint.png",
    title: "Joint Mobilization",
    description: "Gentle movements to improve joint mobility and reduce pain."
  }
];

const KeyServices: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="text-[#516EFF] text-[42px] font-semibold leading-[64px] w-full md:w-[502px] mb-4 md:mb-0">
          What Makes Us More
          <br />
          <span className="text-[#516EFF] text-[52px] font-bold leading-[64px]">
            Special
          </span>
        </div>
        <div className="w-64 h-px bg-gray-300 mx-4 hidden md:block"></div>
        <div className="text-[#516EFF] text-[56px] font-bold leading-[74px]">
          <span className="text-[#FFD700]">KEY </span>
          FEATURE
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {keyServices.map((service, index) => (
          <React.Fragment key={index}>
            <div className="border border-[#ddd] rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <KeyCard
                imageSrc={service.imageSrc}
                title={service.title}
                description={service.description}
              />
            </div>
            {(index + 1) % 3 !== 0 && index !== keyServices.length - 1 && (
              <div className="hidden lg:block w-px bg-gray-200 absolute right-0 top-0 bottom-0"></div>
            )}
            {index < keyServices.length - 3 && (
              <div className="hidden lg:block h-px bg-gray-200 absolute left-0 right-0 bottom-0"></div>
            )}
          </React.Fragment>
        ))}
      </div>
            {/* Updated horizontal card */}
      <div className="mt-24 bg-[#516EFF] w-full max-w-[1512px] mx-auto rounded-3xl overflow-hidden shadow-lg">
        <div className="px-6 sm:px-12 lg:px-24 py-12 sm:py-16 lg:py-20 flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
          <h2 className="text-white text-center font-inter text-3xl sm:text-4xl font-normal leading-tight sm:leading-snug max-w-[658px]">
            Let Us Restore <span className="text-4xl sm:text-5xl font-semibold block sm:inline">Your Movement!</span>
          </h2>
          <p className="text-white text-center font-inter text-base sm:text-lg font-normal leading-relaxed sm:leading-loose max-w-[1176px]">
            Empowering you to achieve better physical health and enhanced mobility is our commitment and passion. With over 5 years of experience, we proudly offer top-notch physiotherapy services tailored to your needs. Our patient-focused approach ensures comfort and effective care for you and your family.
          </p>
          <button className="bg-transparent hover:bg-white hover:text-[#516EFF] transition-colors duration-300 flex items-center justify-center px-8 sm:px-12 py-4 sm:py-6 border-2 border-white rounded-xl text-white font-inter text-base sm:text-lg font-medium">
            Make An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyServices;