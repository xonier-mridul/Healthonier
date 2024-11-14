import React from "react";
import Mobile from "../assets/feature-img3.jpg";
import Oval from "../assets/oval1.svg";
import { FaCheckCircle } from "react-icons/fa";

const EndtoEnd = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <img className="absolute big-circle top-0 left-0 z-0" src={Oval} alt="" />
        <div className="max-w-7xl m-auto py-20 flex flex-col lg:flex-row gap-4 items-center pr-5 pl-5">
          <div className="lg:w-1/2 pb-8 lg:pb-0" data-aos="fade-zoom-in" data-aos-delay="300">
            <h2 className="text-3xl lg:text-4xl leading-tight heading-color font-bold mb-7 text-center lg:text-start">
              End-to-end patient engagement 
              
            </h2>
            <p className="text-neutral-600 text-lg text-center lg:text-start ">
              Healthonier supports the complete patient journey across clinical
              practices, behavioral health, social determinants of health, and
              wellness. Healthonier supports multiple channels that are
              convenient to both patients and practice staff. A large part of
              reducing patient friction in their interaction with health systems
              is to reduce hand-offs and requests for the same patient
              information. Healthonier supports an end-to-end process from
              initial intake to delivery of care and ongoing support.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-end relative " data-aos='fade-zoom-in' data-aos-delay="300">
            <img className="shadow-filter z-0" src={Mobile} alt="" />
            <ul className="absolute trans flex gap-4 flex-col left-8 top-5 md:w-72 lg:w-96 z-10">
              <li className="flex gap-4 bg-white text-lg  p-4 px-5 items-center rounded-md shadow-md">
                <FaCheckCircle className="text-3xl blue-color" />
                Patient Diary
              </li>
              <li className="flex gap-4 bg-white text-lg  p-4 px-5 items-center rounded-md shadow-md">
                <FaCheckCircle className="text-3xl blue-color" />
                Medical History and Reports
              </li>
              <li className="flex gap-4 bg-white text-lg  p-4 px-5 items-center rounded-md shadow-md">
                <FaCheckCircle className="text-3xl blue-color" />
                Appointment Details
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndtoEnd;
