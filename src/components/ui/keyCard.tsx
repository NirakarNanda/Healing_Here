// keyCard.tsx
import Image from 'next/image';
import React from 'react';

interface KeyCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const KeyCard: React.FC<KeyCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-6 p-10 h-[340px] rounded-lg border border-[rgba(82,82,91,0.10)] bg-[#F8FAFC]">
      <Image
        src={imageSrc}
        alt="Icon"
        className=" flex-shrink-0"
        width={112}
        height={112}
      />
      <div className="text-center">
        <h5 className="text-[#516EFF] text-[24px] font-medium leading-[34px] w-[320px]">
          {title}
        </h5>
        <p className="text-[#777] text-[16px] font-medium leading-[26px] w-[320px] mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default KeyCard;
