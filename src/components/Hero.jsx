import React from 'react'


const Hero = () => {
  return (
    <div className='bg-black text-white h-[auto] md:h-[70dvh] pt-[80px] md:pt-[0]'>
        <div className="container1 flex flex-col md:flex-row gap-6 items-center justify-between h-full">
            <div>
                <h1 className='text-[44px] font-bold'>Your Name Here</h1>
                <p className='text-[14px] text-[#9C9C9C] pt-[10px]'>
                Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <button className='bg-[#3F8E00] w-[307px] h-[63px] text-[16px] font-bold mt-[30px] rounded border border-[#62BA1B] shadow-[#62BA1B] shadow-2xl'>
                Let’s get started {'>'}
                </button>
            </div>
            <img src="/user.png" alt="user" />
        </div>
        
    </div>
  )
}

export default Hero