import Image from "next/image"
import { CheckList } from "./ui/CheckList"

export const RecoverySection = () => {
    return (
        <section className="flex flex-col lg:flex-row ">
            <div className="w-full space-y-4 md:w-[45%] lg:px-[104px] lg:py-28 bg-[#F8FAFC] rounded-br-[136px]">
                <h2 className="text-5xl xl:text-4xl font-semibold text-[#516EFF]">Always
                    <span className="text-5xl font-bold text-[#FFD700]"> Recover </span>
                    Whenever Its Possible
                </h2>
                <Image
                    src={"/assets/Image.png"}
                    alt="Recovery illustration"
                    width={496}
                    height={328}
                    objectFit="cover"
                />
            </div>
            <div className="flex flex-col md:gap-8 xl:gap-20 items-start">
                {/* <div className="lg:pl-20 py-16 lg:w-[738px] lg:h-[196px] border-b border-[#52525B40] "> */}
                    <p className="text-xl lg:pl-20 py-16 lg:w-[88%] lg:h-[196px] border-b border-[#52525B40] ">"We also offer treatments that enhance your physical well-being, giving you the confidence boost you deserve. Explore our treatment process below."</p>
                {/* </div> */}
                <div className="md:pl-20 font-semibold text-[#516EFF] space-y-4">
                    <h2 className="text-2xl">WHAT WE PROVIDE</h2>
                    <div className="grid xl:grid-cols-2 xl:gap-32 gap-8 grid-cols-1">
                        <div className="flex flex-col gap-4">
                            <CheckList content="Check ups" />
                            <CheckList content="Orthopedic Rehabilitation" />
                            <CheckList content="Neurological Rehabilitation" />
                            <CheckList content="Sports Physiotherapy" />
                        </div>
                        <div className="flex flex-col gap-4">
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