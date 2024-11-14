import React from 'react'
import HomeDesh from "../assets/homedashboard1.png"
import { FaBookmark } from "react-icons/fa";
import { MdOutlineTrackChanges } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { IoRecording } from "react-icons/io5";

const HealthonierApp = () => {
  return (
    <>
       <div className=" admin-panel overflow-hidden py-20">
        <div  className="max-w-7xl m-auto relative pr-5 pl-5">
          
          <div className="flex justify-center flex-col items-center mb-20" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold lg:w-2/3 text-center leading-tight heading-color mb-10">
            Healthonier Mobila App
            </h2>
           
            <p className=" lg:w-3/4 text-center text-lg text-neutral-600">Patients have the ability to schedule appointments online, have video calls with doctors, obtain prescriptions, establish pill reminders, and engage in conversations with the receptionist</p>
          </div>
          <div className="w-full flex gap-10 flex-col lg:flex-row"> 
            <div className="lg:w-1/2 flex justify-center lg:justify-start" data-aos="flip-left"> 
             <img className="rounded-xl" src={HomeDesh} alt="" />
            </div>
            <div className="lg:w-1/2 overflow-hidden  rounded-xl" data-aos="flip-right">
            <div className="bg-zinc-50 p-5 lg:p-10 rounded-xl overflow-hidden relative">
              <li className=" blue-roundOne h-60 w-60 rounded-full blue-bg list-none absolute z-0"> </li>
              <li className=" red-round h-60 w-60 rounded-full red-bg list-none absolute z-0"> </li>
              <li className=" blue-roundTwo h-60 w-60 rounded-full blue-bg list-none absolute z-0"> </li>
              <ul className="flex gap-6 flex-col z-10 relative">
                <li className="scale rounded-xl bg-white w-full px-4 lg:px-8 py-3 flex items-center gap-5">
                <div className="blue-bg text-white h-10 w-10 rounded-full flex items-center justify-center"><FaBookmark /></div> <p className="text-lg font-semibold heading-color">Appointment Booking</p>
                </li>
                <li className="scale rounded-xl bg-white w-full px-4 lg:px-8 py-3 flex items-center gap-5">
                <div className="red-bg text-white h-10 w-10 rounded-full flex items-center justify-center"><MdOutlineTrackChanges className='text-xl'/></div> <p className="text-lg font-semibold heading-color">Token Tracking</p>
                </li>
                <li className="scale rounded-xl bg-white w-full px-4 lg:px-8 py-3 flex items-center gap-5">
                <div className="blue-bg text-white h-10 w-10 rounded-full flex items-center justify-center"><FaVideo /></div> <p className="text-lg font-semibold heading-color">Video Consultation</p>
                </li>
                <li className="scale rounded-xl bg-white w-full px-4 lg:px-8 py-3 flex items-center gap-5">
                <div className="red-bg text-white h-10 w-10 rounded-full flex items-center justify-center"><IoRecording /></div> <p className="text-lg font-semibold heading-color">Health Record</p>
                </li>
                
              </ul>

            </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HealthonierApp
