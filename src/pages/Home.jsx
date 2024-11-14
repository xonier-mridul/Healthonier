import React, { useState, useEffect } from "react";
import Mockup from "../assets/mockup_header.png";
import oval1 from "../assets/oval1.svg";
import dotted from "../assets/doted.png";
import whiteCircle from "../assets/circle-1.svg";
import BlackLine from "../assets/hero-line-shape-1.png";
import { ReactTyped } from "react-typed";
import WeOffer from "../subComponents/WeOffer";
import AOS from "aos";
import "aos/dist/aos.css";
import Need from "../subComponents/Need";
import AdminPennel from "../subComponents/AdminPennel";
import PatientPanel from "../subComponents/PatientPanel";
import img from "../assets/patient-dashboard.png";
import { TbBrandBooking } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { IoRecording } from "react-icons/io5";
import HealthonierApp from "../subComponents/HealthonierApp";
import img2 from "../assets/doctor-dashboard.png";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineTrackChanges } from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import AboutHealthonier from "../subComponents/AboutHealthonier";
import FAQ from "../subComponents/FAQ";
import SoftwareQuote from "../subComponents/SoftwareQuote";
import Partner from "../subComponents/Partner";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  }, []);
  return (
    <>
      <section className=" blue-bg relative overflow-hidden">
        <img className="absolute big-circle top-0 left-0" src={oval1} alt="" />
        <img
          className="absolute big-circle top-36 left-20"
          src={dotted}
          alt=""
        />
        <img
          className="absolute  bottom-0 left-1/3 z-0 opacity-90"
          src={BlackLine}
          alt=""
        />
        <span className="blue-circle hidden md:block absolute  left-1/2 "></span>
        <div className="z-10 relative home-banner pt-44 py-28 lg:py-36">
          <div className="max-w-7xl m-auto flex items-center flex-col lg:flex-row pr-5 pl-5">
            <div className="w-full lg:w-1/2 relative z-20 flex flex-col items-center pb-10 lg:pb-0 lg:items-start" data-aos="fade-right">
              <h1 className="text-5xl xl:text-6xl xl:leading-tight text-white font-bold leading-tight pb-8 text-center lg:text-start">
                Telemedicine Software <br />
                <ReactTyped
                  strings={["Development", "Productivity"]}
                  typeSpeed={50}
                  backSpeed={60}
                  loop
                ></ReactTyped>
              </h1>
              <p className="text-xl text-white font-semibold lg:w-2/3 mb-8 text-center lg:text-start">
                Contact us to develop custom solutions for Virtual Care
              </p>

              <button className="btn-hovers relative z-50  w-fit  py-3 px-8 red-bg rounded-lg text-lg text-white">
                Get Submit
              </button>
            </div>
            <div className="w-full lg:w-1/2 relative" data-aos="fade-left">
              <img
                className="op-circle absolute bottom-0 opacity-80"
                src={whiteCircle}
                alt=""
              />
              <img
                className="op-circle absolute bottom-0 right-0 opacity-80 w-44"
                src={whiteCircle}
                alt=""
              />
              <img
                className="op-circle absolute top-0 right-10 opacity-80 w-32"
                src={whiteCircle}
                alt=""
              />
              <img className="z-10 relative" src={Mockup} alt="mockup-image" />
            </div>
          </div>
        </div>
      </section>
      <WeOffer />
      <Need />
      <AdminPennel heading="Telemedicine Software and App Development" />
      <PatientPanel
        heading="Healthonier Patient Panel"
        para="Welcome to a new era of healthcare with the Healthonier Patient App. Empowering you with easy access to your health information, convenient communication with your healthcare providers, and tools to take control of your well-being."
        img={img}
        liOne="Appointment Booking"
        liTwo="
Token Management"
        liThree="
Video Consultation"
        liFour="Personal Health Record"
        iconOne={<TbBrandBooking className="text-2xl" />}
        iconTwo={<MdManageAccounts className="text-xl" />}
        iconThree={<FaVideo />}
        iconFour={<IoRecording className="text-xl" />}
      />

      <HealthonierApp />
      
      <PatientPanel
        heading="Healthonier Doctor Panel"
        para="Welcome to the future of healthcare with Healthonier. Our cutting-edge product is designed to revolutionize the way doctors deliver care, enhancing efficiency, accuracy, and patient outcomes. Join the ranks of forward-thinking healthcare professionals who are embracing the power of Healthonier."
        img={img2}
        liOne="
Doctor Website"
        liTwo="Appointment Booking"
        liThree="Token Tracking System"
        liFour="Manage Clinics"
        liFive="Service Listing"
        iconOne={<FaUserDoctor />}
        iconTwo={<TbBrandBooking className="text-lg" />}
        iconThree={<MdOutlineTrackChanges className="text-lg" />}
        iconFour={<FaClinicMedical className="text-lg" />}
        iconFive={<MdMedicalServices />}
      />
      <AboutHealthonier />
      <Need/>
      
      <FAQ />
      <SoftwareQuote/>
      <Partner/>


    </>
  );
};

export default Home;
