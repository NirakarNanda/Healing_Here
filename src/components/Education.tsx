import React from 'react';

const Education = () => {
  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
        <div className="text-[#516EFF] text-2xl md:text-[42px] font-semibold leading-8 md:leading-[64px] w-full md:w-[502px] mb-4 md:mb-0">
          Dr. Abhilash Nanda(pt)
        </div>
        <div className="w-full md:w-64 h-px bg-gray-300 mx-4 hidden md:block"></div>
        <div className="text-[#516EFF] text-3xl md:text-[56px] font-bold leading-10 md:leading-[74px]">
          <span className="text-[#FFD700]">My </span>
          Academics
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img src="/assets/edu.png" alt="Dr. Abhilash Nanda in office" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="flex-1 flex flex-col items-start gap-5 p-6 md:p-12 bg-[#F8FAFC] border border-[#52565B1A] rounded-lg">
          <h2 className="text-[#516EFF] text-xl md:text-2xl font-medium leading-7 md:leading-8">Educational Qualification</h2>
          <p className="text-base md:text-lg">
            I graduated with a degree in Physiotherapy from Neelachal Institute of Medical Sciences, College of Physiotherapy, Bhubaneswar, where I gained a solid foundation in physical therapy principles and techniques. Following my graduation, I completed an internship at Sum Ultimate in Bhubaneswar, where I specialized in COVID-19 rehabilitation, further honing my skills in managing complex recovery cases. This experience enhanced my expertise in providing effective, compassionate care during challenging times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
