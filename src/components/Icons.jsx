import React from 'react'
import { FaStripe } from 'react-icons/fa';
import { SiClickup, SiElastic, SiPaychex } from "react-icons/si";
import { TfiDropbox } from 'react-icons/tfi';

const Icons = () => {
  return (
    <div className='bg-black h-auto'>
      <div className="container1 w-full h-[auto] bg-black">
        <p className='text-white p-[10px] font-[14px] font-400'>Worked with</p>
        <div style={{
          display:'grid',
          gridTemplateColumns: "repeat(auto5-fit, minmax(120px, 1fr))",
          gap:'30px'
        }}>
          <div className="click border-[grey] flex justify-center items-center text-[grey] font-bold h-[60px] border-1 rounded">
            <SiClickup /><p>ClickUp</p>
          </div>
          <div className="drop  border-[grey] flex justify-center items-center text-[grey] font-bold h-[60px] border-1 rounded"><TfiDropbox /><p>Dropbox</p></div>
          <div className="border-[grey] flex justify-center items-center text-[grey] font-bold h-[60px] border-1 rounded">
            PAYCHEX
          </div>
          <div className="elastic  border-[grey] flex justify-center items-center text-[grey] h-[60px] border-1 rounded"><SiElastic /> <p>elastic</p>
          </div>
          <div className="stripe  border-[grey] flex justify-center items-center text-[grey] font-bold h-[60px] border-1 rounded">
            stripe
          </div>
        </div>
      </div>
    </div>
  )
}

export default Icons