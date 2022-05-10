import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Banner() {
  // bg-[url('https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80')]
  return (
    <div className="relative">
      <div className="flex flex-col justify-center align-center mt-10 px-5 z-40 py-4 md:w-[1300px] md:mx-auto ">
        <h1 className="text-3xl  font-bold">Forward-Thinking</h1>
        <h1 className="text-3xl font-bold">Accounting & Tax</h1>

        <h1 className="text-3xl font-bold">Services.</h1>
        <p className="text-sm w-1/2 my-6">
          Peritum AUS is your path to the future and tax and finance...
        </p>
        <div className="flex font-semibold bg-green-500 text-white gap-4 w-56 items-center justify-center border-2 border-green-500 p-2 px-6 text-md rounded-3xl">
          Free Consultation
          <BsArrowRight />
        </div>
      </div>
      <div className="bg-hero-pattern bg-cover h-[400px] mt-[-310px] w-full">
        <div className="h-[400px] bg-gradient-to-r from-gray-50 to-opacity-0 w-full"></div>
      </div>
    </div>
  );
}

export default Banner;
