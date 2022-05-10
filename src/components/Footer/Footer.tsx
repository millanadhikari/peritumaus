import React from 'react'
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialLinkedinCircular } from 'react-icons/Ti'

function Footer() {
    return (
        <>
            <div className="flex flex-col bg-gray-700 p-5 justify-center align-center md:flex-row content-center py-20 -z-5"  >

                <div className="flex fles-row md:w-2/4 ">

                    <div className=" sm:w-3/4 mr-4 md:w-3/4" >
                        <div className="align-baseline">
                            <h1 className="text-4xl font-semibold text-white mb-4">AccountFVD</h1>
                        </div>
                        <p className="text-sm font-light text-white leading-[1.4rem]">Experties in cloud accounting systems, business process automation,
                            tax consulting and compliance with a passion for concierge lebel client service.
                            Money back satisfaction gurantee.
                        </p>
                    </div>

                    <div className="w-1/4 " >
                        <div className="">
                            <h1 className=" text-lg font-light text-white my-3 md:my-2">Links</h1>
                        </div>
                        <div className="leading-[1.4rem]">
                            <p className="text-sm font-light leading-[1.4rem] text-white cursor-pointer">About us</p>
                            <p className="text-sm font-light text-white leading-[1.4rem] cursor-pointer">Blog</p>
                            <p className="text-sm font-light text-white leading-[1.4rem] cursor-pointer">FAQ</p>
                            <p className="text-sm font-light text-white leading-[1.4rem] cursor-pointer">Consultation</p>
                        </div>
                    </div>

                </div>

                <div className=" flex flex-row md:w-1/4 mt-8 md:mt-0">
                    <div className="w-2/4">
                        <div className="mb-2 mt-4 md:mt-2">
                            <h1 className=" text-lg font-light text-white">Services</h1>
                        </div>
                        <p className="text-sm text-white leading-[1.4rem]  font-light  cursor-pointer">About us</p>
                        <p className="text-sm text-white leading-[1.4rem]  font-light  cursor-pointer">Blog</p>
                        <p className="text-sm text-white leading-[1.4rem]  font-light  cursor-pointer">FAQ</p>
                        <p className="text-sm text-white leading-[1.4rem]  font-light  cursor-pointer">Consultation</p>
                    </div>

                    <div className="">
                        <div className="mb-2 mt-4 md:mt-2">
                            <h1 className=" text-lg font-light text-white">Contacts</h1>
                        </div>
                        <p className="text-sm text-white leading-[1.4rem]  font-light  cursor-pointer">E. info@accountings.com.au</p>
                        <p className="text-sm text-white leading-[1.4rem]  font-light  cursor-pointer">P. 041234567</p>

                        <div className="flex flex-row gap-2">
                            <TiSocialFacebookCircular color='white' size={30} />
                            <TiSocialTwitterCircular color='white' size={30} />
                            <TiSocialLinkedinCircular color='white' size={30} />
                        </div>

                    </div>
                </div>
                <img src="footer3.png" className=" md:w-[750px] opacity-[.2] absolute mt-[400px] left-[-40px] md:mt-[-160px] " />
                <img src="footer2.png" className=" md:w-[400px] opacity-[.3] absolute right-[-100px] md:right-[-80px] mt-[-30px] " />

            </div>


            <div className="bg-gray-900 p-5 flex flex-col align-center md:justify-between md:flex-row md:px-40 z-20">
                <p className="text-sm text-white self-center">Copyright © 2022. Accoutt FWD.All Rights Reserved / Terms Of Services / Privacy Policy</p>
                <div className="flex flex-row my-4  md:my-0 w-80 justify-around self-center">
                    <img src='footer.png' className='w-[500px] h-[100px]' />
                </div>
            </div>
        </>
    )
}

export default Footer