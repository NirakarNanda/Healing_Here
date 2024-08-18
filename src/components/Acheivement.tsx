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

interface AchievementProps {
  id?: string;
}

// Sample data for achievements with images and videos
const achievements: Achievement[] = [
  { mediaSrc: '/assets/acheivements/coronaF.jpg', mediaType: 'image', title: ' A Journey of Resilience: Dr. Abhilash Nanda Internship during COVID-19', description: 'In the midst of the COVID-19 pandemic, Dr. Abhilash Nanda undertook a crucial internship, showcasing his dedication and resilience. This image captures a pivotal moment during his training, where he provided essential physiotherapy care to patients affected by the virus. His commitment to helping others in these challenging times highlights his unwavering spirit and professional excellence.' },


  { mediaSrc: '/assets/acheivements/coronaH.jpg', mediaType: 'image', title: 'Healing Here Physiotherapy Clinic', description: "Dr. Abhilash Nanda is seen here in his well-equipped clinic, a testament to his commitment to providing top-notch physiotherapy care. This photo showcases the modern facilities and advanced equipment he utilizes to ensure the best possible outcomes for his patients. Dr. Nanda's clinic is designed to create a comfortable and efficient environment for rehabilitation and recovery." },


  { mediaSrc: '/assets/acheivements/PIVD.mp4', mediaType: 'video', title: 'Successful Treatment of a PIVD Case', description: "This video highlights Dr. Abhilash Nanda's expertise in treating a challenging case of Prolapsed Intervertebral Disc (PIVD). Witness the remarkable journey of a patient's recovery under Dr. Nanda's skilled guidance, demonstrating his exceptional ability to diagnose, treat, and rehabilitate complex spinal conditions. This successful outcome reflects his dedication to improving patients' quality of life through personalized physiotherapy care." },


  { mediaSrc: '/assets/acheivements/stroke_rehab 1.mp4', mediaType: 'video', title: 'Store Rehab Session: Initial Assessment', description: "In this first store rehab session, Dr. Abhilash Nanda conducts a thorough initial assessment of the patient. He carefully evaluates the patient's condition and formulates a tailored rehabilitation plan. This step is crucial in setting the foundation for a successful recovery journey." },


  { mediaSrc: '/assets/acheivements/stroke_rehab 2.mp4', mediaType: 'video', title: 'Store Rehab Session: Mid-Treatment Progress', description: "The mid-treatment progress video captures the significant improvements in the patient's mobility and strength. Dr. Abhilash Nanda guides the patient through targeted exercises and therapies, showcasing the positive impact of consistent and specialized rehabilitation efforts." },


  { mediaSrc: '/assets/acheivements/stroke_rehab 3.mp4', mediaType: 'video', title: 'Store Rehab Session: Final Recovery Stage', description: "In the final recovery stage of the store rehab sessions, Dr. Abhilash Nanda celebrates the patient's remarkable progress and successful rehabilitation. This video highlights the culmination of dedicated physiotherapy, demonstrating the restored functionality and improved quality of life achieved through Dr. Nanda's expertise." },


  { mediaSrc: '/assets/acheivements/frozen_shoulder.mp4', mediaType: 'video', title: 'Overcoming a Rotater Cuff Injury: Patient Success Story', description: "In this video, Dr. Abhilash Nanda works with a patient suffering from a Rotater Cuff Injury. Through specialized physiotherapy techniques, he aims to restore shoulder mobility and alleviate pain. The footage captures various stages of the patient's treatment, demonstrating Dr. Nanda's commitment to guiding patients through their rehabilitation journey with expert care and personalized plans." },


  { mediaSrc: '/assets/acheivements/prolapse Inter Vertebrae.mp4', mediaType: 'video', title: 'Treatment of a Prolapsed Intervertebral Disc (PIVD)', description: "This video showcases the results after just two sessions of Dr. Abhilash Nanda's treatment for a patient with a Prolapsed Intervertebral Disc (PIVD). Witness the remarkable improvement in the patient's condition as Dr. Nanda applies his specialized physiotherapy techniques, demonstrating his expertise in diagnosing, treating, and rehabilitating complex spinal conditions." },

  { mediaSrc: '/assets/acheivements/Stroke rehab.mp4', mediaType: 'video', title: 'Stroke Craniotomy Rehabilitation', description: "A patient visited Dr. Abhilash Nanda two months after undergoing a Stroke Craniotomy. This video showcases the progress achieved during their rehabilitation. Dr. Nanda's specialized physiotherapy techniques have significantly improved the patient's motor skills, mobility, and overall functionality, highlighting the effectiveness of his personalized care." },

  { mediaSrc: '/assets/acheivements/Brachial plexus injury.mp4', mediaType: 'video', title: 'Brachial Plexus Injury Rehabilitation: Progress After 20 Sessions', description: "This video showcases the significant progress achieved after 20 physiotherapy sessions for a Brachial Plexus injury. Dr. Abhilash Nanda's focused and personalized rehabilitation approach has led to noticeable improvements in the patient's strength, mobility, and overall functionality. The footage highlights the dedication and expertise involved in guiding the patient through a successful recovery journey." },

  { mediaSrc: '/assets/acheivements/Alcohol Myopathy.mp4', mediaType: 'video', title: 'Rehabilitation of Alcohol Myopathy', description: "This video highlights the rehabilitation process for a patient with Alcohol Myopathy. Dr. Abhilash Nanda utilizes a comprehensive physiotherapy approach to address muscle weakness and improve overall function. The footage captures the patient's progress and the effective strategies employed to support recovery and enhance quality of life." },
];

const AchievementCarousel: React.FC<AchievementProps> = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const handleSeeMore = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setShowModal(true);
  };

  const handleVideoPlay = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleVideoPause = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };

  return (
    <div id={id} className="p-4 sm:p-8 relative">
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
        onSwiper={(swiper) => setSwiperInstance(swiper)}
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
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
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
                  className="text-[#4200FF] font-poppins text-sm font-medium rounded-full py-2 px-4 text-center hover:bg-[#4200FF] hover:text-white transition"
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
