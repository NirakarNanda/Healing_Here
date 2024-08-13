"use client";

import { IconsCard } from "@/components/IconsCard";
import { ImageCard } from "./ImageCards";
import { IoCallOutline } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { CiMedicalCase } from "react-icons/ci";


export const CTASection = () => {
  return (
    <section className="flex flex-col">
      <div className="bg-[#516EFF] px-12 py-8 sm:px-28 sm:py-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-44">
        <div className="flex flex-col gap-4 text-white">
          <h2 className="text-4xl">How to get our services?</h2>
          <p className="text-xl">Just follow these simple steps</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
          <IconsCard Icon={IoCallOutline} content={"Call for appointment"} />
          <IconsCard Icon={BsCalendar2Date} content={"Get a Date & Serial"} />
          <IconsCard Icon={CiMedicalCase} content={"Consult Your Physiotherapist"} />
        </div>
      </div>
      <div className="px-28 py-16 grid lg:grid-cols-2 xl:grid-cols-4 gap-20">
          <ImageCard img="/assets/Icons.png" content="Well equipped lab" />
          <ImageCard img="/assets/Frame 409.png" content="Home Visit" colour="#516EFF" />
          <ImageCard img="/assets/Group 38.png" content="Online Appointment" />
          <ImageCard img="/assets/Telemedicine.png" content="Online Consultation" />
      </div>
    </section>
  )
}
