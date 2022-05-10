import React from "react";
import { GrServerCluster } from "react-icons/gr";
import { IconContext } from "react-icons";
const Welcome = () => {
  return (
    <div className="my-10  flex flex-col align-center justify-center gap-4 px-4">
      <p className="font-semibold ">
        WELCOME TO <span className="text-green-500">PERITUM AUS</span>
      </p>
      <h1 className="text-2xl font-bold">
        Modern Accounting Tools, Service & Support.{" "}
      </h1>
      <span className="h-5 w-20 border-t-2 border-green-500"></span>
      <p className="text-[14px] text-gray-600">
        A modern CPA firm that is your catalyst to actionable insights,
        dedicated support, and transparent reporting so you can meet and exceed
        your financial goals. Our team leverages the effeciencies of
        cloud-accounting with personalized support and conceirge service, all
        within a flat-fee pricing model.
      </p>
      <div className="flex flex-col align-center justify-center text-center">
        <div className="flex flex-col align-center  mx-auto my-2">
          <div className="flex align-center justify-center border-4 p-10 rounded-full ">
            <GrServerCluster size="40px" />
          </div>
          <h1 className=" mt-2 font-bold w-20 mx-auto leading-[1.3rem]">Cloud Accounting</h1>
        </div>
        <div className="flex flex-col align-center  mx-auto my-2">
          <div className="flex align-center justify-center border-4 p-10 rounded-full ">
            <GrServerCluster size="40px" />
          </div>
          <h1 className="leading-[1.3rem] mt-2 font-bold w-20 mx-auto">Strategy & Advisory</h1>
        </div>
        <div className="flex flex-col align-center  mx-auto my-2">
          <div className="flex align-center justify-center border-4 p-10 rounded-full ">
            <GrServerCluster size="40px" />
          </div>
          <h1 className="leading-[1.3rem] mt-2 font-bold w-20 mx-auto">Tax Consultancy & Compliance</h1>
        </div>
        <div className="flex flex-col align-center  mx-auto my-2">
          <div className="flex align-center justify-center border-4 p-10 rounded-full ">
            <GrServerCluster size="40px" />
          </div>
          <h1 className="leading-[1.3rem] mt-2 font-bold w-20 mx-auto">System Design & Automation</h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
