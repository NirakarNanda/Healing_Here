import React from 'react'
import { GoShieldCheck } from "react-icons/go";

type checkListType = {
    content: string
}

export const CheckList = ({content}: checkListType) => {
    return (
        <div className='flex gap-2 items-center'>
            <GoShieldCheck color='#4200FF' fontWeight='bold' size={20}  />
            <p>{content}</p>
        </div>
    )
}