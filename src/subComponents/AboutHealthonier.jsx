import React, {useEffect} from 'react'
import CountUp from 'react-countup'
import { MdEngineering } from "react-icons/md";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";
import Img from "../assets/sr-line.png"
import Aos from 'aos';
import "aos/dist/aos.css";


const AboutHealthonier = () => {
   useEffect(() => {
     Aos.init({
        duration:2000,
        delay:200
     })
   }, [])
   

  return (
    <>
    <div className='about-health relative'>
        <img className='absolute right-0 top-20' src={Img} alt="line" />
        <span className='about-blue-cir absolute '></span>
      <div className='max-w-7xl m-auto py-20 relative z-10 pr-5 pl-5'>
        <div className='w-full flex flex-col items-center justify-center mb-28' data-aos="fade-up">
            <h2 className='text-3xl lg:text-4xl  font-bold lg:w-2/3 text-center leading-snug lg:leading-tight heading-color mb-6'>About Healthonier — Telemedicine Software Development Company</h2>
            <p className=' lg:w-3/4 text-center text-lg text-neutral-600'>Healthonier is a global software development company providing telemedicine software development and telemedicine app development services to telehealth software providers, healthcare providers, and clinics from the US, EU, and UK.</p>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 lg:gap-6'>
            <div className='rounded-xl flex justify-center items-center p-10 flex-col shadow-2xl' data-aos='zoom-in'>
                <div style={{background:"#3BBEFF"}} className='about-icon h-20 w-20 rounded-full flex items-center justify-center mb-6'>
                <MdEngineering className='text-white text-3xl'/>
                </div>
                <h3 className='text-4xl font-bold pb-3 heading-color'><CountUp
                
                end={100}
                duration={2}
                />+</h3>
                <p className='text-lg font-semibold heading-color text-center'>Consultants & Engineers</p>
            </div>
            <div className='rounded-xl flex justify-center items-center p-10 flex-col shadow-2xl' data-aos='zoom-in' data-aos-delay="300">
                <div style={{background: "linear-gradient(96.49deg, #0082f8 0%, #3c10f2 101.82%)"}} className='about-icon h-20 w-20 rounded-full flex items-center justify-center mb-6'>
                <MdOutlineDeveloperBoard className='text-white text-3xl'/>
                </div>
                <h3 className='text-4xl font-bold pb-3 heading-color'><CountUp
                
                end={10}
                duration={2}
                />+</h3>
                <p className='text-lg font-semibold heading-color text-center'>Years in Operation</p>
            </div>
            <div className='rounded-xl flex justify-center items-center p-10 flex-col shadow-2xl' data-aos='zoom-in' data-aos-delay="600">
                <div style={{background: "linear-gradient(98.93deg, #2ace93 7.76%, #9ce842 100%)"}} className='about-icon h-20 w-20 rounded-full flex items-center justify-center mb-6'>
                <FaRegHandshake className='text-white text-3xl '/>
                </div>
                <h3 className='text-4xl font-bold pb-3 heading-color'><CountUp
                
                end={95}
                duration={2}
                />%</h3>
                <p className='text-lg font-semibold heading-color text-center'>Return Clients</p>
            </div>
            <div className='rounded-xl flex justify-center items-center p-10 flex-col shadow-2xl' data-aos='zoom-in' data-aos-delay="900">
                <div style={{background:"linear-gradient(275.81deg, #ffac12 -1.99%, #ff30c5 99.35%)"}} className='about-icon h-20 w-20 rounded-full flex items-center justify-center mb-6'>
                <FaGlobeAfrica className='text-white text-3xl '/>
                </div>
                <h3 className='text-4xl font-bold pb-3 heading-color'><CountUp
                end={5}
                duration={2}
                /></h3>
                <p className='text-lg font-semibold heading-color text-center'>Offices Across the Globe</p>
            </div>
             
        </div>
          
      </div>
      </div>
    </>
  )
}

export default AboutHealthonier
