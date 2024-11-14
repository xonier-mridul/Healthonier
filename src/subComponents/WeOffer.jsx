import React, {useEffect} from "react";
import Icon1 from "../assets/info_icon_3.svg";
import Icon2 from "../assets/info_icon_4.svg";
import Icon3 from "../assets/info_icon_5.svg";
import Icon4 from "../assets/info_icon_6.svg";
import Icon5 from "../assets/info_icon_7.svg";
import Icon6 from "../assets/info_icon_8.svg";

import AOS from 'aos';
import 'aos/dist/aos.css'

const WeOffer = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          delay:200
        });
      }, []);

  return (
    <>
      <div className="py-20">
        <div className="max-w-7xl m-auto pr-5 pl-5">
          <div className="flex gap-8 flex-col justify-center items-center mb-16 " data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl lg:leading-tight font-bold  lg:w-3/5 text-center leading-tight heading-color">
              
              We Offer Telemedicine App Development Featuring:
            </h2>
            <p className="text-neutral-600 text-lg  md:w-3/4 text-center">
              An experienced telemedicine software development company,
              Healthonier builds telehealth modules, remote patient monitoring
              systems, electronic health records (EHR), mental health and
              wellness solutions, mobile health applications, solutions for
              virtual clinical trials, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-200 offer-box flex flex-col items-center j p-8 rounded-2xl" data-aos="zoom-in-right">
              <div className="mb-5">
                <img className="offer-icon" src={Icon1} alt="" />
              </div>
              <h2 className=" text-xl lg:text-2xl font-bold text-center heading-color mb-4">
                Online Health Appointments
              </h2>
              <p className="text-center text-neutral-600 text-lg">
                Ensure peer-to-peer communication through video & text chats
                integrated with chatbots, voice and text recognition systems to
                improve the quality of data processing.
              </p>
            </div>
            <div className="bg-slate-200 offer-box flex flex-col items-center  p-8 rounded-2xl" data-aos="zoom-in">
              <div className="mb-5">
                <img className="offer-icon" src={Icon2} alt="" />
              </div>
              <h2 className=" text-xl lg:text-2xl font-bold text-center heading-color mb-4">
              Clinical Decision Support
              </h2>
              <p className="text-center text-neutral-600 text-lg">
              Provide clinical decision support which minimizes the human factor by using an AI-based module.
              </p>
            </div>
            <div className="bg-slate-200 offer-box flex flex-col items-center  p-8 rounded-2xl" data-aos="zoom-in-left">
              <div className="mb-5">
                <img className="offer-icon" src={Icon3} alt="" />
              </div>
              <h2 className=" text-xl lg:text-2xl font-bold text-center heading-color mb-4">
              Patient Data Insights
              </h2>
              <p className="text-center text-neutral-600 text-lg">
              Collect patient data through integration with a variety of medical devices and equipment, wearables, HIS and other hospitals’ / practitioners’ solutions by using common industry standards such as DICOM and HL7
              </p>
            </div>
            <div className="bg-slate-200 offer-box flex flex-col items-center  p-8 rounded-2xl" data-aos="zoom-in-right">
              <div className="mb-5">
                <img className="offer-icon" src={Icon4} alt="" />
              </div>
              <h2 className=" text-xl lg:text-2xl font-bold text-center heading-color mb-4">
              Patient Engagement & Better Health Outcomes
              </h2>
              <p className="text-center text-neutral-600 text-lg">
              Improve patient engagement and outcomes by leveraging latest UX design approaches to build patient apps with gamification features that improve medical adherence.
              </p>
            </div>
            <div className="bg-slate-200 offer-box flex flex-col items-center  p-8 rounded-2xl" data-aos="zoom-in">
              <div className="mb-5">
                <img className="offer-icon" src={Icon5} alt="" />
              </div>
              <h2 className=" text-xl lg:text-2xl font-bold text-center heading-color mb-4">
              Remote Communication & Consulting
              </h2>
              <p className="text-center text-neutral-600 text-lg">
              Offer remote communication by collecting data from medical devices, wearables, sleep trackers, smart watches, heart rate monitors, sensors, smart rings, etc.
              </p>
            </div>
            <div className="bg-slate-200 offer-box flex flex-col items-center  p-8 rounded-2xl" data-aos="zoom-in-left">
              <div className="mb-5">
                <img className="offer-icon" src={Icon6} alt="" />
              </div>
              <h2 className=" text-xl lg:text-2xl font-bold text-center heading-color mb-4">
              Privacy & Security
              </h2>
              <p className="text-center text-neutral-600 text-lg">
              Guarantee privacy and security through regulation compliance, including GDPR & HIPAA, KBV and ISO 27001 requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeOffer;
