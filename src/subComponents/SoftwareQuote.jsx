import React from "react";
import MockUp from "../assets/mockup_header.png"

const SoftwareQuote = () => {
  return (
    <>
      <div className="bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl m-auto py-20 pr-5 pl-5">
          <div
            className="w-full flex flex-col items-center justify-center mb-20"
            data-aos="fade-up"
          >
            <h2 className="text-3xl lg:text-4xl font-bold lg:w-2/4 text-center leading-tight lg:leading-tight heading-color mb-6">
              Get the Software Quote to Get Started!
            </h2>
            <p className=" lg:w-3/4 text-center text-lg text-neutral-600">
              Healthonier is a global software development company providing
              telemedicine software development and telemedicine app development
              services to telehealth software providers, healthcare providers,
              and clinics from the US, EU, and UK.
            </p>
          </div>
          <div className="w-full flex gap-8 items-center flex-col lg:flex-row">
            <div className=" w-full lg:w-1/2" data-aos="zoom-in-right">
            <h3 className="text-3xl font-bold mb-4 blue-color text-center lg:text-start">Get a free estimate</h3>
            <form className="w-full flex flex-col gap-4" >
                <div className="flex gap-3">
                    <input className="p-3 rounded-lg border-2 w-1/2 outline-none" type="text" name="name" id="name" placeholder="Enter Your Name" />
                    <input className="p-3 rounded-lg w-1/2 border-2 outline-none" type="number" name="number" id="number" placeholder="Enter Your Number" />
                </div>
                <input className="p-3 rounded-lg  border-2 outline-none" type="email" name="email" id="email" placeholder="Enter Your Email" />
                <textarea className="p-3 rounded-lg border-2 outline-none" name="massage" id="massage" placeholder="Enter Your Quote" rows={6}></textarea>
                <button className="btn-hover red-bg text-white py-3 rounded-lg text-lg font-semibold">Get A Quote</button>

            </form>
            </div>
            <div className="lg:w-1/2" data-aos="zoom-in-left">
               <img src={MockUp} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareQuote;
