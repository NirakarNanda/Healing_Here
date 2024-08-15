import React from 'react'
import { IconType } from 'react-icons'

interface CtaCardProps {
    Icon: IconType
    content: string
    order?: number
}

export const LinkBox = ({ Icon, content, order }: CtaCardProps) => {
    return (
        <div className='flex gap-2 items-center rounded-lg'>
            { order === 1 ?
                <div className='flex gap-2 items-center py-1 rounded-lg'>
                    <p className='text-center whitespace-nowrap'>{content}</p>
                    <Icon size={20} />
                </div> :
                <div className='flex gap-2 items-center py-1 rounded-lg'>
                    <Icon size={20} />
                    <p className='text-center whitespace-nowrap'>{content}</p>
                </div>
            }
        </div>
    )
}