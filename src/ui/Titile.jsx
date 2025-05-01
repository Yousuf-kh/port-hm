import React from 'react'

const Titile = ({title, text, titleColor}) => {
  return (
    <div className='text-center max-w-[570px] mx-auto py-[50px]'>
        <h1 className={`text-[34px] ${titleColor} font-bold`}>{title}</h1>
        <p className='text-[14px] text-[#9C9C9C] pt-[10px]'>{text}</p>
    </div>
  )
} 

export default Titile
