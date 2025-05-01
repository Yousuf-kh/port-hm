import React from 'react'
import NameHere from '../ui/NameHere'
import Titile from '../ui/Titile'

const Case = () => {
    return (
        <div className='container1 pt-[50px] pb-[100px]'>

            <Titile title={'Case Studies'} text={'Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>

            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-[10px] md:gap-[26px] gap-y-[10px] md:gap-y-[100px]'>
                <div>
                    <NameHere text='Fintech' colorText='text-[#FFA217]' textBg='bg-[#FFF6E9]' />
                </div>
                <div>
                    <img className='rounded' src='/ofice.png' alt='Fintech Office' />
                </div>

                <div>
                    <img className='rounded' src='/ofice2.png' alt='EdTech Workspace' />
                </div>
                <div>
                    <NameHere text='EdTech' colorText='text-[#000AFF]' textBg='bg-[#D0E6FF]' />
                </div>

                <div>
                    <NameHere text='Pharma' colorText='text-[#2AB090]' textBg='bg-[#E0FFF8]' />
                </div>
                <div>
                    <img className='rounded' src='/ofice.png' alt='Pharma Office' />
                </div>
            </div>
        </div>
    )
}

export default Case
