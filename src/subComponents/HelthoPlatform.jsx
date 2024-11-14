import React from "react";
import DeshBoard from "../assets/dashboard-img.png";
import { FaCheckCircle } from "react-icons/fa";

const HelthoPlatform = () => {
  return (
    <>
      <div className="platForm py-20 ">
        <div className="max-w-7xl m-auto flex items-center flex-col lg:flex-row gap-14 pl-5 pr-5">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <img
              className="shadow-lg rounded-2xl"
              src={DeshBoard}
              alt=""
              data-aos="fade-up"
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 bg-white lg:bg-transparent p-4 sm:p-10 lg:p-0 rounded-lg shadow-xl lg:shadow-none" data-aos="fade-up">
            <h4 className="text-xl red-color mb-4 text-center lg:text-start">Healthonier Platform</h4>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight heading-color mb-5 text-center lg:text-start">
              White label and customized to meet your needs:
            </h2>
            <p className="text-neutral-600 text-lg mb-8 text-center lg:text-start">
              In addition to our standard products, the Platform allows us to
              create customized and branded solutions to meet your specific
              needs. The platform structure can support several business models,
              including a single Platform tenant with multiple practices and
              clinics or a more complex B2B model where a tenant supports
              patients from multiple external organizations.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold leading-tight heading-color mb-6 text-center lg:text-start">
              Multi-channel support
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 gap-y-6">
              <li className="flex gap-4 items-center text-lg font-semibold blue-color">
                <FaCheckCircle className="red-color text-2xl w-1/7" />{" "}
                <p className="w-5/6">
                  IOT devices for Remote Patient Monitoring{" "}
                </p>
              </li>

              <li className="flex gap-4 items-center text-lg font-semibold blue-color">
                <FaCheckCircle className="red-color text-2xl w-1/7" />{" "}
                <p className="w-5/6"> Native Apps for iOS and Android </p>
              </li>

              <li className="flex gap-4 items-center text-lg font-semibold blue-color">
                <FaCheckCircle className="red-color text-2xl w-1/7" />{" "}
                <p className="w-5/6">
                  {" "}
                  Kiosks in Pharmacies, Employers, and schools
                </p>
              </li>

              <li className="flex gap-4 items-center text-lg font-semibold blue-color">
                <FaCheckCircle className="red-color text-2xl w-1/7" />{" "}
                <p className="w-5/6">Arrival stations for in-office visits </p>
              </li>

              <li className="flex gap-4 items-center text-lg font-semibold blue-color">
                <FaCheckCircle className="red-color text-2xl w-1/7" />{" "}
                <p className="w-5/6">Web App</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelthoPlatform;
