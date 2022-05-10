import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Banner() {
    return (
        <div className='px-5'>
  <div
     className="-z-10 h-full w-full text-red-500 "
     
     >
         
                {/* <Image src="https://umanitoba.ca/extended-education/sites/extended-education/files/styles/3x2_900w/public/2021-03/human-resource-management-2.jpg?itok=dVR64VsK"
                    height={1000}
                    width={1000}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500"
                    objectFit="contain"
                    
                /> */}
                
               
            </div>

            <div className='absolute top-60 mt-[-100px]'>
                <h1 className='text-3xl  font-bold'>Forward-Thinking</h1>
                <h1 className='text-3xl font-bold'>Accounting & Tax</h1>

                <h1 className='text-3xl font-bold'>Services.</h1>
                <p className='text-sm w-1/2 my-4' >Peritum AUS is your path to the future and tax and finance...</p>
                <div className='flex font-semibold bg-green-500 text-white gap-4 w-56 items-center justify-center border-2 border-green-500 p-2 px-6 text-md rounded-3xl'>
                    Free Consultation
                    <BsArrowRight />

                </div>
            </div>
          

        </div>
    )
}

export default Banner