import React from "react";
import Line from "../assets/hero-line-shape-1.png";
import Img from "../assets/circle-1.svg";

const EMR = () => {
  return (
    <>
      <div className=" py-20 platTabs relative">
        <img
          className="absolute bottom-0 right-0 opacity-40"
          src={Line}
          alt="lines"
        />
        <span className="space absolute"></span>
        <div className="max-w-7xl m-auto  flex flex-col lg:flex-row items-center pl-5 pr-5">
          <div className="lg:w-1/2 pb-12 lg:pb-0" data-aos="zoom-in-right">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight heading-color mb-5 text-center lg:text-start">
              EMR and Enterprise Integration
            </h2>
            <p className="text-neutral-600 text-lg text-center lg:text-start">
              healthonier has a core competency in integration allowing
              Customers to seamlessly integrate the healthonier into their
              enterprise environment. The Platform includes an integration
              engine (for HL7 and other messaging protocols.), an Enterprise
              Master Patient Index (for resolving duplicates), and, an API
              handling module for backend integration (FHIR, etc.).
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="trans h-72 w-72 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 relative z-20"></div>
            <div className="emr-blue-cir trans h-56 w-56 rounded-full bg-cyan-100 absolute z-20 right-0"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EMR;
