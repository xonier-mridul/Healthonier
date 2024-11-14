import React from 'react'
import { Link } from 'react-router-dom'
import { TbFaceIdError } from "react-icons/tb";
import { TiArrowBack } from "react-icons/ti";
import oval1 from "../assets/oval1.svg";


const NotFound = () => {
  return (
    <>
    <div className='blue-bg relative'>
    <img className="absolute big-circle top-0 left-0" src={oval1} alt="" />
    <div className="max-w-7xl m-auto pb-32 pt-56 relative z-10">

   <div className='flex justify-center items-center flex-col gap-7'>
   <TbFaceIdError className='text-7xl text-white error-icon' />
   <h1 className='text-2xl text-white'>Sorry for the Error, <span className='text-4xl font-bold '>404 Not Found</span></h1>

   <Link to="/" className='underline text-white text-xl flex items-center gap-2 cursor-pointer'><TiArrowBack className='text-3xl' /> Back to Home Page</Link>

   </div>
       
    </div>
    </div>
      
    </>
  )
}

export default NotFound
