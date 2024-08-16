import React from 'react'
import { ServiceCard } from './ServiceCard'

export const ServiceSection = () => {
  return (
    <section className='flex flex-col gap-3 px-8 sm:px-16 lg:px-28 py-10'>
        <h2 className='xl:w-[53%] py-5 text-3xl sm:text-4xl md:text-5xl font-bold border-b-2 text-[#516EFF]'>Our Physiotherapy <span className='text-[#FFD700]'> Services</span></h2>
        <ServiceCard 
            Img="/assets/Image (1).png"
            service="Physiotherapy Home Visit"
            description='Experience personalized care in the comfort of your home with our physiotherapy home visit service.'
            price={1000}
            session={1}
        />
        <ServiceCard 
            Img="/assets/Image (6).png"
            service="Orthopedic Physiotherapy"
            description='Focuses on rehabilitation of musculoskeletal injuries and post-surgery recovery. Enhances mobility and reduces pain with personalized treatment.'
            price={1000}
            session={1}
        />
        <ServiceCard 
            Img="/assets/Image (2).png"
            service="Pediatric Physiotherapy"
            description='Addresses developmental and physical challenges in children. Provides tailored treatments to improve motor skills, strength, and mobility.'
            price={1000}
            session={1}
        />
        <ServiceCard 
            Img="/assets/Image (3).png"
            service="Sports Physiotherapy"
            description='Specializes in preventing and treating sports-related injuries. Enhances athletic performance and supports recovery with targeted rehabilitation strategies.'
            price={1000}
            session={1}
        />
        <ServiceCard 
            Img="/assets/Image (4).png"
            service="Musculoskeletal Physiotherapy"
            description='Treats disorders of muscles, bones, and joints to alleviate pain and restore function. Focuses on improving movement and strength through personalized exercises and therapies.'
            price={1000}
            session={1}
        />
        <ServiceCard 
            Img="/assets/Image (5).png"
            service="Neurological Physiotherapy"
            description="Helps patients recover and improve function after neurological conditions such as stroke or Parkinson's disease."
            price={1000}
            session={1}
        />
    </section>
  )
}