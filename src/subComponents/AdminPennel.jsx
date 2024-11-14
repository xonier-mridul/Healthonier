import React, {useEffect} from "react";
import HomeDesh from "../assets/homedashboard.png";
import Img from '../assets/triangle-circle.png'
import { IoText } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { LuLanguages } from "react-icons/lu";
import { FaRobot } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css'

const AdminPennel = ({heading}) => {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          delay:200
        });
      }, []);
  
  return (
    <>
      <div className=" admin-panel overflow-hidden py-20">
        <div  className="max-w-7xl m-auto relative pr-5 pl-5">
            <img  className="triangle absolute top-10 right-0 w-24" src={Img} alt="triangle" />

          <div className="flex justify-center flex-col items-center mb-20" data-aos="fade-up">
            <h2 className=" text-3xl lg:text-4xl font-bold lg:w-2/3 text-center lg:leading-tight leading-tight heading-color mb-10">
              {heading}
            </h2>
            <h3 className="mb-6 lg:mb-10 text-2xl lg:text-3xl font-bold heading-color blue-color text-center">Healthonier Admin Panel</h3>
            <p className=" lg:w-3/4 text-center text-lg text-neutral-600">The admin is a valuable resource for clinic managers and receptionists, aiding them in optimizing and enhancing daily healthcare facility operations. With this portal, receptionists can efficiently oversee clinic tasks, promoting seamless workflows and ultimately improving patient care</p>
          </div>
          <div className="w-full flex gap-10 flex-col lg:flex-row"> 
            <div className=" lg:w-1/2" data-aos="flip-left"> 
             <img className="rounded-xl" src={HomeDesh} alt="" />
            </div>
            <div className="lg:w-1/2 overflow-hidden  rounded-xl" data-aos="flip-right">
            <div className="bg-zinc-50 p-5 lg:p-10 rounded-xl overflow-hidden relative">
              <li className=" blue-roundOne h-60 w-60 rounded-full blue-bg list-none absolute z-0"> </li>
              <li className=" red-round h-60 w-60 rounded-full red-bg list-none absolute z-0"> </li>
              <li className=" blue-roundTwo h-60 w-60 rounded-full blue-bg list-none absolute z-0"> </li>
              <ul className="flex gap-6 flex-col z-10 relative">
                <li className="scale rounded-xl bg-white w-full px-4 lg:px-8 py-3 flex items-center gap-5">
                <div className="blue-bg text-white h-10 w-10 rounded-full flex items-center justify-center"><FaVideo className="text-base lg:text-lg"/></div> <p className="text-lg font-semibold heading-color">Video Conferences</p>
                </li>
                <li className="scale rounded-xl bg-white w-full px-4 lg:px-8 py-3 flex items-center gap-5">
                <div className="red-bg text-white h-10 w-10 rounded-full flex items-center justify-center"><FaEnvelope className="text-base lg:text-lg"/></div> <p className="text-lg font-semibold heading-color">Messaging</p>
                </li>
                <li className="scale rounded-xl bg-white w-full px-4 lg:px-8 py-3 flex items-center gap-5">
                <div className="blue-bg text-white h-10 w-10 rounded-full flex items-center justify-center"><IoText className="text-base lg:text-lg"/></div> <p className="text-lg font-semibold heading-color">Speech-to-text Recognition</p>
                </li>
                <li className="scale rounded-xl bg-white w-full px-4 lg:px-8 py-3 flex items-center gap-5">
                <div className="red-bg text-white h-10 w-10 rounded-full flex items-center justify-center"><LuLanguages className="text-base lg:text-lg" /></div> <p className="text-lg font-semibold heading-color">Natural Language Processing (NLP)</p>
                </li>
                <li className="scale rounded-xl bg-white w-full px-4 lg:px-8 py-3 flex items-center gap-5">
                <div className="blue-bg text-white h-10 w-10 rounded-full flex items-center justify-center"><FaRobot className="text-base lg:text-lg"/></div> <p className="text-lg font-semibold heading-color">AI-powered Clinical Decision Support</p>
                </li>
              </ul>

            </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPennel;
