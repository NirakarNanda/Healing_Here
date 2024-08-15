import { Button } from "flowbite-react"
import Image from "next/image"

interface ServiceCardProps {
    Img: string
    service: string
    description: string
    price: number
    session: number
}

export const ServiceCard = ({Img, service, description, price, session}: ServiceCardProps) => {

    return (
        <div className="flex flex-col xl:flex-row items-center gap-10">
            <img className="lg:w-[40%]"
                src={Img} 
                alt="service-image" 
            />
            <div className="lg:w-[60%]">
                <div className="lg:mr-16 p-3 sm:px-10 sm:py-6 flex flex-col gap-4 bg-[#F8FAFC]">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-[#516EFF]">{service}</h3>
                    <p>{description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                        <p className="text-xl font-bold text-[#516EFF]">Fee - ₹{price}/- <span className="text-lg text-black"> {session} Session</span></p>
                        <button className="px-3 py-2 rounded-md bg-[#516EFF] text-white">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}