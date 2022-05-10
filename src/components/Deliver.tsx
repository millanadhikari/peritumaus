import React from 'react'

const Deliver = () => {
  return (
    <div className="flex px-4 bg-gray-100  mb-20">
         <div className="bg-hero-pattern bg-contain bg-no-repeat w-full sm:hidden md:inline-flex">
        <div className="h-[400px] bg-gradient-to-r from-gray-50 to-opacity-0 w-full"></div>
      </div>
        <div className="flex flex-col gap-1">
            <h1 className="font-bold text-2xl w-60">We Deliver Expertise You Can Trust</h1>
            <span className="h-5 mt-3 w-20 border-t-2 border-green-500"></span>

            <p className="w-[430px] text-[15px]">At PertiumAus we are the trusted tax advisors you want coupled with the enhanced cloud accounting foundation you need to operate with efficiency and peace of mind. Through our effecfive and transparent services, we deliver expertise you can turst with results you can measure.</p>
            <button className="w-40 rounded-3xl bg-green-500 text-gray-100 py-2 px-4 font-semibold my-4">More About Us</button>
        </div>
        </div>
  )
}

export default Deliver