import Image from "next/image"
import { PiLinkFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IconsCard } from "./IconsCard";
import { LinkBox } from "./LinkBox";

export const Footer = () => {
    return (
        <footer>
            {/* flex-wrap xl:flex-nowrap gap-20 items-center */}
            <div className="flex flex-wrap xl:flex-row xl:flex-nowrap xl:items-center gap-16 px-4 sm:px-10 pb-10 md:py-10 md:px-28 text-white bg-[#516EFF]">
                <div>
                    <Image
                        src="/assets/Footer Logo.png"
                        alt="Logo"
                        width={309}
                        height={113}
                    />
                    <p className="text-[#FFFFFF]">
                        Healing Here is a renowned name in physiotherapy and rehabilitation care. Our journey began in 2022, and since then, we have been dedicated to enhancing the physical well-being of our community.
                    </p>
                </div>
                <div className=" w-full h-[1px] xl:w-[1px] xl:h-60 bg-white" />
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <PiLinkFill size={44} />
                        <p className="text-xl">Important link</p>
                    </div>
                    <div className="flex items-center gap-20 xl:gap-28">
                        <div>
                            <LinkBox Icon={FaFacebook} content={"Facebook"} />
                            <LinkBox Icon={FaTwitter} content={"Twitter"} />
                            <LinkBox Icon={FaInstagramSquare} content={"Instagram"} />
                            <LinkBox Icon={FaLinkedin} content={"Linkedin"} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Career</p>
                            <LinkBox Icon={FaQuestionCircle} content={"Support"} order={1} />
                            <p>Privacy policy</p>
                        </div>
                    </div>
                </div>
                <div className=" w-full h-[1px] xl:w-[1px] xl:h-60 bg-white" />
                <div className="flex flex-col gap-3">
                    <p className="text-xl font-semibold text-[#FDF6B2]">Say hello to us</p>
                    <div className="flex items-end gap-4">
                        <MdEmail size={44} />
                        <p className="text-xl">Healinghere@gmail.com</p>
                    </div>
                    <div className="flex gap-6">
                        <Image
                            src="/assets/Vector.png"
                            alt="footer address image"
                            width={64}
                            height={44}
                            className="object-contain"
                        />
                        <div className="flex flex-col gap-2">
                            <p className="text-xl">Address</p>
                            <p>Patabhadi, near RTO office, Sonepur, Odisha 762017</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-2 sm:py-5 sm:px-48 text-center text-white bg-[#216583]">
                <p>© 2000-2021, All rights reserved</p>
            </div>
        </footer>
    )
}