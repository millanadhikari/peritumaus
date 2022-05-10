import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex gap-10 justify-between items-center px-3 m-auto py-4 md:w-[1300px] '>
            <Image src="/logo.png" height={50} width={170} objectFit="fill" />
            <div className='flex gap-16'>
                <div className='flex  items-center gap-6 font-bold text-lg hidden md:inline-flex'>
                    <div className='underline underline-offset-4 underline-green '>Home</div>
                    <div>Services</div>
                    <div>About Us</div>
                    <div>Blog</div>
                    <div>Contact</div>
                </div>
                <button className='text-md font-bold border-2 border-green-500 py-2 px-5 rounded-3xl'>Free Consultation</button>
            </div>
        </div>
    )
}

export default Navbar