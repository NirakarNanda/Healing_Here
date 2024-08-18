import Image from "next/image";
import { PiLinkFill } from "react-icons/pi";
import { FaFacebook, FaInstagramSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LinkBox } from "./LinkBox";

interface Contactusprops {
    id?: string;
}

export const Footer: React.FC<Contactusprops> = ({ id }) => {
    return (
        <footer id={id} className="bg-[#516EFF] text-white">
            {/* Container for footer sections */}
            <div className="flex flex-wrap xl:flex-nowrap xl:items-center gap-5 sm:gap-10 px-4 sm:px-10 pb-10 md:py-10 md:px-28">
                {/* Logo and description */}
                <div className="space-y-2 sm:space-y-4 w-full xl:w-1/3">
                    <Image
                        src="/assets/Footer Logo.png"
                        alt="Logo"
                        width={309}
                        height={113}
                        className="object-contain"
                    />
                    <p className="text-sm sm:text-base">
                        Healing Here is a renowned name in physiotherapy and rehabilitation care. Our journey began in 2022, and since then, we have been dedicated to enhancing the physical well-being of our community.
                    </p>
                </div>

                {/* Divider */}
                <div className="hidden xl:block xl:w-[1px] xl:h-60 bg-white" />

                {/* Links and social media */}
                <div className="flex flex-col w-full xl:w-1/3 gap-4">
                    <div className="flex items-center gap-2">
                        <PiLinkFill className="text-3xl sm:text-4xl" />
                        <p className="text-lg sm:text-xl font-semibold">Important Links</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 xl:gap-16">
                        <div className="flex flex-col gap-2">
                            <LinkBox Icon={FaFacebook} content={"Facebook"} />
                            <LinkBox Icon={FaTwitter} content={"Twitter"} />
                            <LinkBox Icon={FaInstagramSquare} content={"Instagram"} />
                            <LinkBox Icon={FaLinkedin} content={"LinkedIn"} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Career</p>
                            <LinkBox Icon={FaQuestionCircle} content={"Support"} order={1} />
                            <p className="font-semibold">Privacy Policy</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden xl:block xl:w-[1px] xl:h-60 bg-white" />

                {/* Contact details */}
                <div className="flex flex-col w-full xl:w-1/3 gap-3 text-base sm:text-lg">
                    <p className="font-semibold text-[#FDF6B2]">Say Hello to Us</p>
                    <a href="mailto:healinghere18@gmail.com" className="flex items-center gap-4 text-base sm:text-lg hover:underline">
                        <MdEmail className="text-2xl sm:text-3xl" />
                        <p>healinghere18@gmail.com</p>
                    </a>
                    <div className="flex items-center gap-4">
                        <Image
                            src="/assets/Vector.png"
                            alt="footer address image"
                            width={64}
                            height={44}
                            className="object-contain"
                        />
                        <div className="flex flex-col">
                            <p className="font-semibold">Address</p>
                            <p>Patabhadi, near RTO office, Sonepur, Odisha 762017</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="w-full py-2 sm:py-5 text-xs sm:text-base text-center bg-[#216583]">
                <p>© 2000-2021, All rights reserved</p>
            </div>
        </footer>
    );
};
