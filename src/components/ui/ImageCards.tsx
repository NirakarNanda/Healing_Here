import Image from "next/image"

interface CtaCardProps {
    img: string
    content: string
    colour?: string
}

export const ImageCard = ({img, content, colour}: CtaCardProps) => {
  return (
    <div className={` flex flex-col gap-2 items-center px-6 py-8 rounded-lg shadow-lg ${colour ? `bg-[${colour}]` : 'bg-white'}`}>
      <Image 
        src={img}
        height={34}
        width={34}
        style={{ width: "auto", height: "auto" }}
        alt="facilities-image"
        className="object-contain"
      />
      <p className={`text-center font-semibold ${colour ? 'text-white' : 'text-[#52525B] '}`}>{content}</p>
    </div>
  )
}