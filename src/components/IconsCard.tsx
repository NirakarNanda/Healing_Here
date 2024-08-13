import React from 'react'
import { IconType } from 'react-icons'

interface CtaCardProps {
    Icon: IconType
    content: string
}

export const IconsCard = ({Icon, content}: CtaCardProps) => {
  return (
    <div className='w-full sm:w-40 flex flex-col gap-2 items-center px-6 py-8 bg-white rounded-lg'>
      <Icon size={28} color='#52525B'/>
      <p className='text-center font-semibold text-[#52525B]'>{content}</p>
    </div>
  )
}