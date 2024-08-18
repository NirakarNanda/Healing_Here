import React, { useState, useEffect } from 'react';

interface GoogleReview {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
}

const Review: React.FC = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching Google reviews:', error);
      }
    };    

    fetchGoogleReviews();
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentReviewIndex(index);
  };

  const currentReview = reviews[currentReviewIndex];

  if (!currentReview) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-blue-500 py-12 md:py-16 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
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
              src={currentReview.profile_photo_url} 
              alt={currentReview.author_name} 
              className="w-full h-60 object-cover rounded mx-auto"
            />
            <div className="mt-2 text-center">
              <p className="font-semibold text-blue-500">{currentReview.author_name}</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-yellow-400 ${i < currentReview.rating ? 'opacity-100' : 'opacity-30'}`}>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
            What our clients say about us
          </h2>
          <img src="/assets/Quote1.png" alt="" className="mx-auto md:mx-0 mb-4" />
          <blockquote className="text-white text-base md:text-lg">
            "{currentReview.text}"
          </blockquote>
          <div className="mt-4 flex justify-center md:justify-start">
            {reviews.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full mr-2 cursor-pointer ${i === currentReviewIndex ? 'bg-white' : 'bg-gray-300'}`}
                onClick={() => handleDotClick(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;