import React from 'react';

const Address: React.FC = () => {
  // URL for Google Maps with the location
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Bijayalakshmi+Physiotherapy+Clinic,+Patabhadi,+near+RTO+office,+Sonepur,+767017';

  return (
    <div className="bg-white p-8 md:p-16">
      {/* Heading */}
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-[42px] font-bold leading-[74px]">
          <span style={{ color: '#516EFF' }}>VISIT OUR</span> <span style={{ color: '#FFD700' }}>CLINIC</span>
        </h1>
      </div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-stretch gap-8">
        {/* Text Card */}
        <div className="md:w-1/2 flex items-center">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 w-full">
            <h2 className="text-black font-bold font-poppins text-2xl md:text-3xl leading-normal md:leading-loose tracking-wide mb-4">
              Want to visit our <span className="text-blue-600 font-extrabold text-3xl">Clinic?</span>
            </h2>
            <p className="text-black font-poppins text-lg md:text-xl font-semibold mb-4">
              We Welcome You
            </p>
            <p className="text-black font-poppins text-base md:text-lg mb-6">
              <span className="text-yellow-500 font-bold text-base md:text-lg">Monday - Saturday</span>
              <br />
              <span className="text-green-500 font-bold text-base md:text-lg">8:30 AM - 12:00 AM</span> and 
              <span className="text-red-500 font-bold text-base md:text-lg"> 4:30 PM - 9:00 PM</span>
            </p>
            <div className="flex items-center mb-6">
              <img 
                src="/assets/location.png" 
                alt="Address Icon" 
                className="w-6 h-6 mr-4" 
              />
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black font-poppins text-base md:text-lg hover:text-blue-600"
              >
                Bijayalakshmi Physiotherapy Clinic, Patabhadi, near RTO office, Sonepur, 767017
              </a>
            </div>
          </div>
        </div>

        {/* Map Card */}
        <div className="md:w-1/2 flex items-center">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 w-full">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img 
                src="/assets/map.jpeg" 
                alt="Map Location" 
                className="w-full h-64 md:h-80 object-cover rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
