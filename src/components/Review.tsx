import React from 'react';

const Review: React.FC = () => {
  return (
    <div className="bg-blue-500 py-12 md:py-16 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
        <div className="relative w-48 md:w-60 flex-shrink-0 mb-8 md:mb-0 md:mr-8"> {/* Added margin on the bottom for small screens and right margin for larger screens */}
          {/* Yellow rectangle */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{
              width: '80%',
              height: '340px',
              backgroundColor: '#FFD700',
              borderRadius: '8px',
            }}
          ></div>
          
          {/* Profile Image Container */}
          <div className="relative w-full bg-white rounded-lg p-4 flex-shrink-0">
            <img 
              src="/path/to/profile-image.jpg" 
              alt="Samantha Payne" 
              className="w-full h-60 object-cover rounded mx-auto"
            />
            <div className="mt-2 text-center">
              <p className="font-semibold text-blue-500">Samantha Payne</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
            What our client says about us
          </h2>
          <img src="/assets/Quote1.png" alt="" className="mx-auto md:mx-0 mb-4" /> {/* Added margin-bottom */}
          <blockquote className="text-white text-base md:text-lg">
            "I've seen a lot of Physiotherapists over my lifetime because I've had some serious dental issues. But my highest praise goes to Dr. Abhilash Nanda and his staff. I was always very anxious about going to the Physiotherapist, but this time at Digital Implant, my experience was so painless and relaxed that there was no discomfort whatsoever."
          </blockquote>
          <div className="mt-4 flex justify-center md:justify-start">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full mr-2"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
