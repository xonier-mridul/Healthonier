import React from "react";
import Mobile from "../assets/mobile-blue.png"
import { FaCheckCircle } from "react-icons/fa";

const WhiteLabel = () => {


  return (
    <>
      <div className="py-20 bg-gradient-to-r from-violet-100 to-sky-50">
        <div className="max-w-7xl m-auto flex flex-col lg:flex-row items-center mr-5 ml-5">
          <div className="lg:w-1/2 relative order-2 lg:order-1" data-aos="flip-right">
          <img src={Mobile} alt="mobile" />
          <ul className="absolute trans flex gap-4 flex-col right-14 top-6 w-72 sm:w-80 lg:w-96">
              <li className="flex gap-4 bg-white text-lg p-4 px-5 items-center rounded-md shadow-md">
                <FaCheckCircle className="text-2xl blue-color" />
                Patient Medical History
                 
              </li>
              <li className="flex gap-4 bg-white text-lg p-4 px-5 items-center rounded-md shadow-md">
                <FaCheckCircle className="text-2xl blue-color" />
                Prescribed Medicine
              </li>
              <li className="flex gap-4 bg-white text-lg p-4 px-5 items-center rounded-md shadow-md">
                <FaCheckCircle className="text-2xl blue-color" />
                Diagnosis Details
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 lg:order-2 order-1" data-aos="flip-left">
            <h2 className="text-3xl lg:text-4xl leading-tight heading-color font-bold mb-7 text-center lg:text-start">
            Fully integrated & white label
            </h2>
            <p className="text-neutral-600 text-lg text-center lg:text-start pb-10">
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
        </div>
      </div>
    </>
  );
};

export default WhiteLabel;
