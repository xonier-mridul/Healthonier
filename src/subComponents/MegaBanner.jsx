import React from "react";

import oval1 from "../assets/oval1.svg";
import { FaCheckCircle } from "react-icons/fa";

const MegaBanner = ({ heading, listOne, listTwo, listThree, img }) => {
  return (
    <>
      <div className="blue-bg relative overflow-hidden">
        <img className="absolute big-circle top-0 left-0" src={oval1} alt="" />

        <div className="max-w-7xl m-auto relative home-banner pt-36 py-28 lg:pt-44 lg:py-36 flex flex-col lg:flex-row gap-8 items-center pl-5 pr-5">
          <div className="lg:w-1/2 mb-6 lg:mb-0 " data-aos="fade-right">
            
            <h1 className=" text-4xl lg:text-5xl lg:leading-snug text-white font-bold leading-tight pb-10 text-center lg:text-start">
              {heading}
            </h1>
            <ul className="flex flex-col gap-3 ">
              <li className="text-white text-xl flex gap-3 items-center justify-center lg:justify-start  lg:items-start text-center lg:text-start">
                <FaCheckCircle className="hidden lg:block lg:text-start "  />
                {listOne}
              </li>
              <li className="text-white text-xl flex gap-3 items-center text-center lg:text-start justify-center lg:justify-start">
                <FaCheckCircle className="hidden  lg:block " />
                {listTwo}
              </li>
              <li className="text-white text-xl flex gap-3 items-center text-center lg:text-start  justify-center lg:justify-start ">
                <FaCheckCircle className="hidden  lg:block " />
                {listThree}
              </li>
            </ul>
          </div>
          <div
            className="lg:w-1/2 flex justify-center lg:justify-end"
            data-aos="fade-left"
          >
            <img className="w-3/4 rounded-lg" src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaBanner;
