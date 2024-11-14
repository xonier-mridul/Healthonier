import React, {useEffect} from 'react'
import oval from "../assets/oval1.svg"

import AOS from 'aos';
import 'aos/dist/aos.css'

const Need = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          delay:200
        });
      }, []);

  return (
    <>
      <div className='blue-bg py-20 relative overflow-hidden'>
        <img className='big-circle absolute top-0 left-0' src={oval} alt="" />
             <div className='max-w-7xl m-auto flex items-center pr-5 pl-5 flex-col md:flex-row'>
                <div className='md:w-3/4 lg:w-1/2' data-aos="zoom-in-right"><h3 className='text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-0 md:w-3/4 leading-snug text-center md:text-start'>Need a Telehealth Software
                Development Partner?</h3></div>
                <div className='md:w-1/4 lg:w-1/2 flex justify-end items-center ' data-aos="zoom-in-left"> <button className="btn-hovers text-lg lg:text-xl red-bg py-2 lg:py-3 px-10 rounded-lg text-white">Lat's Talk</button></div>
             </div>
      </div>
    </>
  )
}

export default Need
