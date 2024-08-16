import Image from "next/image"
import { CheckList } from "./ui/CheckList"

export const RecoverySection = () => {
    return (
        <section className="flex flex-col items-center lg:flex-row px-4 md:px-14 lg:px-0">
            <div className="w-full space-y-4 md:w-[50%] px-4 md:px-8 py-10 lg:px-[104px] lg:py-28 bg-[#F8FAFC] rounded-br-[136px]">
                <h2 className="text-3xl md:text-5xl xl:text-4xl font-semibold text-[#516EFF]">
                    Always
                    <span className="md:text-5xl font-bold text-[#FFD700]"> Recover </span>
                    Whenever Its Possible
                </h2>
                <img
                    className="object-cover"
                    src="/assets/Image.png"
                    alt="Recovery illustration"
                />
            </div>
            <div className="flex flex-col sm:py-10 gap-3 items-start md:px-0 md:py-0 md:gap-8 xl:gap-20 ">
                <p className="border-b py-5 sm:pb-10 sm:pt-16 sm:text-xl lg:pl-20  lg:pb-0 lg:w-[88%] lg:h-[196px] border-[#52525B40]">
                    "We also offer treatments that enhance your physical well-being, giving you the confidence boost you deserve. Explore our treatment process below."
                </p>
                <div className="md:pl-20 font-semibold text-[#516EFF] space-y-4">
                    <h2 className="text-2xl">WHAT WE PROVIDE</h2>
                    <div className="grid xl:grid-cols-2 xl:gap-32 gap-2 sm:gap-8 grid-cols-1">
                        <div className="flex flex-col gap-2 sm:gap-4">
                            <CheckList content="Check ups" />
                            <CheckList content="Orthopedic Rehabilitation" />
                            <CheckList content="Neurological Rehabilitation" />
                            <CheckList content="Sports Physiotherapy" />
                        </div>
                        <div className="flex flex-col gap-2 sm:gap-4">
                            <CheckList content="Pediatric Physiotherapy" />
                            <CheckList content="Geriatric Care" />
                            <CheckList content="Manual Therapy" />
                            <CheckList content="Telephone consultations" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}