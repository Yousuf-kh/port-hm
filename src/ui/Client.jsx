import React from 'react'

const Client = () => {
    return (
        <div className='p-[30px] bt relative'>
            <svg className='absolute top-[-11px] left-[10px]' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.4 -1.90735e-06L4.7 10.6H7.1V20.9H0.4V10.6L2.9 -1.90735e-06H6.4ZM18.5 -1.90735e-06L16.8 10.6H19.2V20.9H12.5V10.6L15 -1.90735e-06H18.5Z" fill="white" />
            </svg>

            <p className='text-[14px] text-[#9C9C9C] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div className="flex items-center gap-5 pt-[30px]">
                <img src="/client1.png" alt="img" />
                <h1 className='text-[18px] text-white'>Client Name</h1>
            </div>
        </div>
    )
}

export default Client
