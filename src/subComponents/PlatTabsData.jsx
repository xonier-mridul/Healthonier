import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PlatTabsData = ({ headingLeft, headingRight, para , one, two,three ,four , five, six}) => {
  return (
    <div>
      <div className="registration bg-white rounded-lg flex flex-col lg:flex-row overflow-hidden my-12 shadow-md" data-aos="zoom-out" data-aos-delay="100" data-aos-duration="800">
        <div className="lg:w-2/5 p-6 lg:p-10 bg-gradient-to-r from-cyan-500 to-blue-500">
          <h3 className="text-white text-2xl font-semibold mb-4 text-center lg:text-start" >
            {headingLeft}
          </h3>
          <p className="text-lg text-white text-center lg:text-start">{para}</p>
        </div>
        <div className="lg:w-3/5 p-6 lg:p-10">
          <h3 className="heading-color text-2xl font-semibold mb-4 text-center md:text-left">
            {headingRight}
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex gap-1 lg:gap-0  text-teal-600">
            <span className="w-12"><FaCheckCircle className="text-lg lg:text-xl " /></span> <h4 className="text-lg lg:text-lg font-semibold">{one}</h4>
            </div>
            <div className="flex gap-1 lg:gap-0  text-teal-600">
            <span className="w-12"><FaCheckCircle className="text-lg lg:text-xl" /></span> <h4 className="text-lg lg:text-lg font-semibold">{two}</h4>
            </div>
            <div className="flex gap-1 lg:gap-0  text-teal-600">
            <span className="w-12"><FaCheckCircle className="text-lg lg:text-xl" /></span> <h4 className=" text-lg lg:text-lg font-semibold">{three}</h4>
            </div>
            <div className="flex gap-1 lg:gap-0  text-teal-600">
            <span className="w-12"><FaCheckCircle className="text-lg lg:text-xl" /></span> <h4 className="text-lg lg:text-lg font-semibold">{four}</h4>
            </div>
            <div className="flex gap-1 lg:gap-0  text-teal-600">
            <span className=" w-12"><FaCheckCircle className="text-lg lg:text-xl" /></span> <h4 className=" text-lg lg:text-lg font-semibold">{five}</h4>
            </div>
            <div className="flex gap-1 lg:gap-0  text-teal-600">
            <span className=" w-12"><FaCheckCircle className="text-lg lg:text-xl" /></span> <h4 className=" text-lg lg:text-lg font-semibold">{six}</h4>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatTabsData;
