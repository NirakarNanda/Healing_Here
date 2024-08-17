"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Card, Modal, Button } from 'flowbite-react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';

interface Achievement {
  mediaSrc: string;
  mediaType: 'image' | 'video';
  title: string;
  description: string;
}

// Sample data for achievements with images and videos
const achievements: Achievement[] = [
  { mediaSrc: '/assets/acheivements/coronaF.jpg', mediaType: 'image', title: 'Noteworthy technology acquisitions 2021', description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.' },
  { mediaSrc: '/assets/acheivements/coronaH.jpg', mediaType: 'image', title: 'Noteworthy technology acquisitions 2021', description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.' },
  { mediaSrc: '/images/blog/image-2.jpg', mediaType: 'image', title: 'Tech Innovations in 2021', description: 'Explore the major tech innovations of 2021 that have changed the industry.' },
  { mediaSrc: '/assets/acheivements/stroke_rehab 1.mp4', mediaType: 'video', title: 'Future of AI', description: "Under the expert care of Dr. Abhilash Nanda, a patient embarked on a remarkable two-month journey to recovery from a debilitating stroke. Through a personalized rehabilitation program that combined intensive physical therapy, speech therapy, and cognitive exercises, Dr. Nanda addressed the patient's specific needs with precision and compassion. This holistic approach not only restored mobility and speech but also renewed hope and independence, showcasing the profound impact of dedicated stroke rehabilitation." },
  { mediaSrc: '/assets/acheivements/stroke_rehab 2.mp4', mediaType: 'video', title: 'Future of AI', description: 'A look into the future trends and advancements in artificial intelligence.' },
  { mediaSrc: '/assets/acheivements/stroke_rehab 3.mp4', mediaType: 'video', title: 'Future of AI', description: 'A look into the future trends and advancements in artificial intelligence.' },
  { mediaSrc: '/assets/acheivements/frozen_shoulder.mp4', mediaType: 'video', title: 'Future of AI', description: 'A look into the future trends and advancements in artificial intelligence.' },
  { mediaSrc: '/images/blog/image-4.jpg', mediaType: 'image', title: 'Cybersecurity Trends', description: 'Understand the latest trends in cybersecurity and how they affect businesses.' },
];

const AchievementCarousel: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const handleSeeMore = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setShowModal(true);
  };

  return (
    <div className="p-4 sm:p-8 relative">
<div className="flex flex-col items-center mb-8 sm:mb-16 mx-2 sm:mx-4">
  <div className="flex flex-wrap items-center">
    <h1 className="text-[#516EFF] font-Inter text-3xl sm:text-[42px] font-semibold leading-tight sm:leading-[64px] mr-2">
      Our
    </h1>
    <div className="text-[#FFD700] font-Inter text-4xl sm:text-[52px] font-extrabold leading-tight sm:leading-[64px]">
      Achievements
    </div>
  </div>
  <div className="flex flex-wrap items-center mt-2">
    <h1 className="text-[#516EFF] font-Inter text-3xl sm:text-[42px] font-semibold leading-tight sm:leading-[64px] mr-2">
      and
    </h1>
    <div className="text-[#516EFF] font-Inter text-4xl sm:text-[52px] font-extrabold leading-tight sm:leading-[64px]">
      Privilege
    </div>
  </div>
</div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="py-5"
      >
        {achievements.map((achievement, index) => (
          <SwiperSlide key={index}>
            <Card className="relative max-w-[400px] h-[640px] p-0 rounded-lg shadow-lg overflow-hidden z-10">
              <div className="absolute inset-0 rounded-lg -z-10"></div>
              <div className="relative w-full h-[440px] sm:h-[640px] overflow-hidden">
                {achievement.mediaType === 'image' ? (
                  <Image
                    src={achievement.mediaSrc}
                    alt={achievement.title}
                    width={500}
                    height={640}
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                ) : (
                  <video
                    src={achievement.mediaSrc}
                    controls
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                )}
              </div>
              <div className="flex flex-col justify-between p-4 bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm h-[200px]">
                <div>
                  <h2 className="text-[#4200FF] font-poppins text-lg sm:text-xl font-medium leading-tight mb-2">
                    {achievement.title}
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {achievement.description.length > 100 ? `${achievement.description.substring(0, 100)}...` : achievement.description}
                  </p>
                </div>
                <button
                  onClick={() => handleSeeMore(achievement)}
                  className="absolute bottom-4 right-4 text-[#4200FF] font-poppins text-sm font-medium rounded-full py-2 px-4 text-center hover:bg-[#4200FF] hover:text-white transition"
                >
                  See More
                </button>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedAchievement && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${showModal ? '' : 'hidden'}`}>
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setShowModal(false)}></div>
          <div className="bg-white rounded-lg shadow-xl z-50 w-full max-w-md mx-4">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {selectedAchievement.title || "Achievement Title"}
              </h3>
              <div className="text-gray-700 mb-6">
                {selectedAchievement.description}
              </div>
              <div className="flex justify-end">
                <Button onClick={() => setShowModal(false)} className="bg-[#4200FF] text-white">
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementCarousel;