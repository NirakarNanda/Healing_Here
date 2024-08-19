import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Define image URLs
const imageUrls = [
  '/assets/review/review1.jpeg',
  '/assets/review/review2.jpeg',
  '/assets/review/review3.jpg',
  '/assets/review/review4.jpeg',
  '/assets/review/review5.jpeg',
  '/assets/review/review6.jpeg',
];

const Review: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Shuffle function
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle image URLs
  const shuffledImageUrls = shuffleArray([...imageUrls]);

  // Reviews with shuffled images
  const reviews = [
    {
      profile_photo_url: shuffledImageUrls[0],
      author_name: 'Dr. Niharika Jain',
      rating: 5,
      text: "It's a best place with a humble physio... must visit if u r searching for a physiotherapist..",
    },
    {
      profile_photo_url: shuffledImageUrls[1],
      author_name: 'Devarushi Mishra',
      rating: 5,
      text: "A very professional and meanwhile charming and friendly Dr. Abhilash Nanda fixed my lower back pain , Thank you for your excellent care. The best physiotherapy clinic in Sonpur",
    },
    {
      profile_photo_url: shuffledImageUrls[2],
      author_name: 'Jay Shankar',
      rating: 5,
      text: 'The best physiotherapy clinic in Sonepur.Dr Abhilash sir very friendly and kindhearted.',
    },
    {
      profile_photo_url: shuffledImageUrls[3],
      author_name: 'Smruti Ranjan Sahoo',
      rating: 5,
      text: 'Best clinic for physiotherapeutic treatment available in this locality. Skillful therapist and very well behaved.',
    },
    {
      profile_photo_url: shuffledImageUrls[4],
      author_name: 'Manas ranjan Jyotish',
      rating: 5,
      text: 'It was a great visit. Been suffering from shoulder pain due to sports injury feeling relaxed now. Worth recommending.',
    },
    {
      profile_photo_url: shuffledImageUrls[5],
      author_name: 'Roshan Samal',
      rating: 5,
      text: 'Cherry on top is that, they even call you afterwards for checking your condition.',
    },
  ];

  return (
    <div className="bg-blue-500 py-12 md:py-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade" 
          speed={2000}    
          loop={true}    
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center">
                <div className="relative w-48 md:w-60 flex-shrink-0 mb-8 md:mb-0 md:mr-8">
                  <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2"
                    style={{
                      width: '80%',
                      height: '340px',
                      backgroundColor: '#FFD700',
                      borderRadius: '8px',
                    }}
                  ></div>
                  <div className="relative w-full bg-white rounded-lg p-4 flex-shrink-0">
                    <img
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      className="w-full h-60 object-cover rounded mx-auto"
                    />
                    <div className="mt-2 text-center">
                      <p className="font-semibold text-blue-500">{review.author_name}</p>
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-yellow-400 ${i < review.rating ? 'opacity-100' : 'opacity-30'}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
                    What our clients say about us
                    
                  </h2>
                  <p className='text-white text-sm'>Note: The review Image are Shuffled</p>
                  <img src="/assets/Quote1.png" alt="Quote" className="mx-auto md:mx-0 mb-4" />
                  <blockquote className="text-white text-base md:text-lg">"{review.text}"</blockquote>
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
