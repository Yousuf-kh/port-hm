import React from 'react'
import Titile from '../ui/Titile'
import Client from '../ui/Client'

const Testemonial = () => {
    return (
        <div className='bg-[#080808] pb-[80px]'>
            <div className="container1">
                <Titile title={'Testimonials'} titleColor={'text-white'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                    <Client/>
                    <Client/>
                    <Client/>
                    <Client/>
                </div>

            </div>
        </div>
    )
}

export default Testemonial
