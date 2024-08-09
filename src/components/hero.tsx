/* eslint-disable react/no-unescaped-entities */
import { Button } from 'flowbite-react'
import React from 'react'

export const Hero = () => {
  return (
    <div className='flex h-[769px] p-[64px_103px_56px_108px] items-center gap-[52px] self-stretch'>
        <div className="flex flex-col items-start pt-8 gap-16">
        <p className="text-black font-inter text-[56px] font-bold leading-[74px]">
            “Restoring Your <span className="text-[#516EFF]">Movement</span>, Renewing Your Life” 
            <br />
            <span className="text-[#516EFF]">Dr. Abhilash Nanda (PT)</span>
        </p>
        <p className="text-[#303030] font-inter text-[20px] font-normal leading-[34px]">
            "Welcome to Healing Here, your trusted partner in physiotherapy. Our experts specialize in personalized treatments for injury recovery, chronic pain management, and enhanced physical performance. Using state-of-the-art techniques and compassionate care, we help you achieve optimal health and mobility."
        </p>
        <div className="flex justify-center md:ml-4 mt-4 md:mt-0 ">
          <Button className='bg-[#516EFF] text-white rounded hover:bg-[#4353B3] transition-colors h-[56px] px-[48px] py-[16px] items-center'>Get Started</Button>
        </div>
        </div>
        <div className="h-[512px] w-[602px] flex">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="598"
            height="496"
            viewBox="0 0 598 497"
            className="w-[598px] h-[496px] flex-shrink-0"
            fill="#F3F7FC"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M263.717 496.443C167.781 494.161 106.727 422.409 54.6968 360.223C10.6689 307.602 -9.09928 247.803 3.97311 185.999C18.3623 117.97 47.9396 45.095 127.879 14.2321C208.803 -17.0111 301.179 10.9878 383.884 39.3234C471.21 69.2425 570.511 102.159 593.336 173.703C616.424 246.07 549.36 312.016 489.561 370.567C429.099 429.767 361.402 498.766 263.717 496.443Z"
                fill="#F3F7FC"
            />
            </svg>

        </div>
    </div>
  )
}
