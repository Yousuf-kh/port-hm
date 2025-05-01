import React, { useState } from 'react'
import { FaBehance, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoMdMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Header = () => {

    const [menu, setMenu] = useState(false)

    return (
        <header className='max-w-[1110px] b-r w-full mx-auto fixed top-0 bg-[#1B1B1B] left-1/2 transform -translate-x-1/2 z-10 mb-[70px]'>
            <div className="container1 flex justify-between items-center h-[70px] text-[#9C9C9C]">
                <nav aria-label="Main navigation" className='hidden md:flex gap-[70px] text-[14px]'>
                    <Link to='/'>Home</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>

                <div className="flex gap-[25px] text-[22px]">
                    <FaLinkedinIn className='cursor-pointer' />
                    <FaBehance className='cursor-pointer' />
                    <FaTwitter className='cursor-pointer' />
                </div>

                <IoMdMenu onClick={() => { setMenu(true) }} className='text-2xl cursor-pointer md:hidden' />
            </div>

            <div className={`fixed w-full h-[100dvh] bg-[#222] top-0 menu ${menu ? 'active' : ''}`}>
                <button
                    className="absolute top-5 right-5 text-[#9c9c9c] text-3xl"
                    onClick={() => setMenu(false)}
                    aria-label="Close menu"
                >
                    &times;
                </button>

                <nav
                    aria-label="Main navigation"
                    className='flex flex-col h-[100dvh] justify-center items-center gap-[40px] text-[14px] text-white'
                >
                    <Link onClick={() => setMenu(false)} to='/'>Home</Link>
                    <Link onClick={() => setMenu(false)} to='/portfolio'>Portfolio</Link>
                    <Link onClick={() => setMenu(false)} to='/contact'>Contact</Link>
                </nav>
            </div>

        </header>
    )
}

export default Header
