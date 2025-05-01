import React from 'react'

const NameHere = ({ text, colorText, textBg, bgBtn}) => {
    return (
        <div>
            <p className={`${colorText} ${textBg} w-max rounded-xl py-[5px] px-[10px] text-[12px]`}>{text}</p>
            <h1 className='text-[#080808] text-[24px] font-bold pt-[20px]'>Work name here</h1>
            <p className='text-[#9C9C9C] text-[14px] pt-[10px] pb-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            <button className={`text-white ${bgBtn} py-[10px] px-[24px] rounded`}>View case study {'>'}</button>
        </div>
    )
}

export default NameHere
