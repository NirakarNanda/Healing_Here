import Image from "next/image"
import { CheckList } from "./CheckList"

export const RecoverySection = () => {
    return (
        <section className="flex">
            <div className="w-full lg:w-[636px] lg:px-[104px] lg:py-28 bg-[#F8FAFC] rounded-br-[136px]">
                <h2 className="text-5xl w-[526px] text-[#516EFF]">Always
                    <span className="text-[#FFD700]"> Recover </span>
                    Whenever Its Possible
                </h2>
                <Image
                    src={"/assets/Image.png"}
                    alt="Recovery illustration"
                    width={496}
                    height={328}
                />
            </div>
            <div className="flex flex-col gap-20 items-start">
                <div className="lg:pl-20 py-16 lg:w-[738px] lg:h-[196px] border-b border-[#52525B40] ">
                    <p className="text-xl">"We also offer treatments that enhance your physical well-being, giving you the confidence boost you deserve. Explore our treatment process below."</p>
                </div>
                <div className="pl-20 font-semibold text-[#516EFF] space-y-4">
                    <h2 className="text-2xl">WHAT WE PROVIDE</h2>
                    <div className="grid lg:grid-cols-2 lg:gap-32 grid-cols-1">
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