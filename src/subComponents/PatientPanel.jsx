import React, { useEffect } from "react";


import AOS from "aos";
import "aos/dist/aos.css";

const PatientPanel = ({
  heading,
  para,
  img,
  liOne,
  liTwo,
  liThree,
  liFour,
  liFive,
  iconOne,
  iconTwo,
  iconThree,
  iconFour,
  iconFive
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 300,
    });
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-20 overflow-hidden">
        <div className="max-w-7xl m-auto pl-5 pr-5">
          <div
            className="flex justify-center flex-col items-center mb-20"
            data-aos="fade-up"
          >
            <h3 className="mb-10 text-3xl lg:text-4xl leading-tight text-center font-bold  text-white">{heading}</h3>
            <p className="lg:w-3/4 text-center text-lg text-white">{para}</p>
          </div>
          <div className="flex gap-9 items-center flex-col lg:flex-row">
            
            <div className="w-full lg:w-2/5" data-aos="zoom-out-left">
              <div className="bg-zinc-50 p-5 lg:p-10 rounded-xl overflow-hidden relative">
              <li className=" blue-roundOne h-48 w-48 rounded-full blue-bg list-none absolute z-0"> </li>
              <li className=" red-round h-52 w-52 rounded-full red-bg list-none absolute z-0"> </li>
              <li className=" blue-roundTwo  h-48 w-48 rounded-full blue-bg list-none absolute z-0"> </li>
                <ul className="flex gap-6 flex-col z-10 relative">
                  <li className="scale rounded-xl bg-white w-full px-4 lg:px-8 py-3 flex items-center gap-5">
                    <div className="blue-bg text-white h-10 w-10 rounded-full flex items-center justify-center">
                      {iconOne}
                    </div>
                    <p className="text-lg font-semibold heading-color">
                      {liOne}
                    </p>
                  </li>
                  <li className="scale rounded-xl bg-white w-full px-4 lg:px-8 py-3 flex items-center gap-5">
                    <div className="red-bg text-white h-10 w-10 rounded-full flex items-center justify-center">
                      {iconTwo}
                    </div>
                    <p className="text-lg font-semibold heading-color">
                      {liTwo}
                    </p>
                  </li>
                  <li className="scale rounded-xl bg-white w-full px-4 lg:px-8 py-3 flex items-center gap-5">
                    <div className="blue-bg text-white h-10 w-10 rounded-full flex items-center justify-center">
                      {iconThree}
                    </div>
                    <p className="text-lg font-semibold heading-color">
                      {liThree}
                    </p>
                  </li>
                  <li className="scale rounded-xl bg-white w-full px-4 lg:px-8 py-3 flex items-center gap-5">
                    <div className="red-bg text-white h-10 w-10 rounded-full flex items-center justify-center">
                      {iconFour}
                    </div>
                    <p className="text-lg font-semibold heading-color">
                      {liFour}
                    </p>
                  </li>
                  <li className="scale rounded-xl bg-white w-full px-4 lg:px-8 py-3 flex items-center gap-5">
                    <div className="red-bg text-white h-10 w-10 rounded-full flex items-center justify-center">
                      {iconFive}
                    </div>
                    <p className="text-lg font-semibold heading-color">
                      {liFive}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-3/5" data-aos="zoom-out-right">
              <img className="w-full rounded-xl" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientPanel;
