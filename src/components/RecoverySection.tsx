import Image from "next/image";
import { CheckList } from "./ui/CheckList";

export const RecoverySection = () => {
    return (
        <section className="max-w-7xl mx-auto p-6 lg:p-16">
            {/* Heading */}
            <div className="flex items-center justify-center lg:text-left mb-12">
                <h2 className="text-[#516EFF] text-2xl lg:text-4xl font-semibold leading-tight">
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="text-2xl ">
                            <span className="text-[#516EFF] lg:text-4xl">Always </span>
                            <span className="text-[#FFD700] font-bold lg:text-6xl">Recover </span>
                        </div>
                        <div className="text-2xl lg:text-4xl text-[#516EFF]">
                            Whenever Its Possible
                        </div>
                    </div>
                </h2>
            </div>

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Side: Image Card with Animation */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md transition-transform duration-300 transform hover:scale-105">
                        <Image
                            src="/assets/Image.png"
                            alt="Recovery illustration"
                            className="w-full h-auto object-contain"
                            height={300}
                            width={300}
                        />
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col p-6 lg:p-12 space-y-8 bg-[#F8FAFC] rounded-lg shadow-md">
                    <p className="text-lg lg:text-xl border-b pb-6 text-gray-700 ">
                        "We also offer treatments that enhance your physical well-being, giving you the confidence boost you deserve. Explore our treatment process below."
                    </p>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-[#516EFF]">WHAT WE PROVIDE</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <CheckList content="Check ups" />
                                <CheckList content="Orthopedic Rehabilitation" />
                                <CheckList content="Neurological Rehabilitation" />
                                <CheckList content="Sports Physiotherapy" />
                            </div>
                            <div className="space-y-3">
                                <CheckList content="Pediatric Physiotherapy" />
                                <CheckList content="Geriatric Care" />
                                <CheckList content="Manual Therapy" />
                                <CheckList content="Telephone consultations" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
