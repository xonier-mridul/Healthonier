import React from 'react'
import { Link } from 'react-router-dom'
import { FaAnglesRight } from "react-icons/fa6";

const MegaMenu = ({leave}) => {
  return (
    <>
    <div className='dropdown absolute top-12 grid grid-cols-3 bg-white  rounded-2xl text-black overflow-hidden shadow-2xl' onMouseLeave={leave}>
        <div className='p-8'>
            <h3 className='pb-4 font-semibold text-xl '>Patient Feature</h3>
            <ul className='flex gap-3 flex-col text-neutral-600 '>
                <li><Link className='flex gap-2 items-center hover:text-red-600 transition-all '><FaAnglesRight className='red-color'/>Tokan Tracking</Link></li>
                <li><Link to="/video" onClick={leave} className='flex gap-2 items-center hover:text-red-600 transition-all'> <FaAnglesRight className='red-color'/> Video Consultation</Link></li>
                <li><Link to="/payment" onClick={leave} className='flex gap-2 items-center hover:text-red-600 transition-all'> <FaAnglesRight className='red-color'/>Online Payment</Link></li>
                <li><Link to="/family-health" onClick={leave} className='flex gap-2 items-center hover:text-red-600 transition-all'><FaAnglesRight className='red-color'/>Family Health Profile</Link></li>
                <li><Link to="/language" onClick={leave} className='flex gap-2 items-center hover:text-red-600 transition-all'><FaAnglesRight className='red-color'/>Language Preferences</Link></li>
                <li><Link to="/health-record" onClick={leave} className='flex gap-2 items-center hover:text-red-600 transition-all'><FaAnglesRight className='red-color'/>Personal Health Record</Link></li>
            </ul>
        </div>
        <div className='p-8'>
            <h3 className='pb-4 font-semibold text-xl'>Doctor Feature</h3>
            <ul className='flex gap-3 flex-col text-neutral-600'>
                <li><Link Link to="/doctor" onClick={leave} className='flex gap-2 items-center hover:text-red-600 transition-all'><FaAnglesRight className='red-color' />Doctor Profile</Link></li>
                <li><Link to="/patient" onClick={leave} className='flex gap-2 items-center hover:text-red-600 transition-all'><FaAnglesRight className='red-color'/>Patient Panel</Link></li>
                <li><Link to="/appointment" onClick={leave} className='flex gap-2 items-center hover:text-red-600 transition-all'><FaAnglesRight className='red-color'/>Appointment Booking</Link></li>
                <li><Link to="/service-listing" onClick={leave} className='flex gap-2 items-center hover:text-red-600 transition-all'><FaAnglesRight className='red-color'/>Service Listing</Link></li>
                <li><Link to="/token" onClick={leave} className='flex gap-2 items-center hover:text-red-600 transition-all'><FaAnglesRight className='red-color'/>Token Tracking System</Link></li>
                <li><Link  to="/times" onClick={leave} className='flex gap-2 items-center hover:text-red-600 transition-all'><FaAnglesRight className='red-color'/>Times Slots</Link></li>
            </ul>
        </div>
        <div className='green-bg p-8'>
            <h3 className='pb-4 font-semibold text-xl text-white '>Admin Feature</h3>
            <ul className='flex gap-3 flex-col text-white'>
                <li><Link to="/plan-doctor" onClick={leave} className='flex gap-2 items-center '><FaAnglesRight className='text-white'/>Plan Doctor Availablity</Link></li>
                <li><Link to="/manage-appointment" onClick={leave} className='flex gap-2 items-center '><FaAnglesRight className='text-white'/>Manage Appointments</Link></li>
                <li><Link to="/manage-appointment" onClick={leave} className='flex gap-2 items-center '><FaAnglesRight className='text-white'/>Online Payment</Link></li>
                <li><Link to="/manage-appointment" onClick={leave} className='flex gap-2 items-center '><FaAnglesRight className='text-white'/>Family Health Profile</Link></li>
                <li><Link to="/manage-appointment" onClick={leave} className='flex gap-2 items-center '><FaAnglesRight className='text-white'/>Language Preferences</Link></li>
                <li><Link to="/manage-appointment" onClick={leave} className='flex gap-2 items-center '><FaAnglesRight className='text-white'/>Personal Health Record</Link></li>
            </ul>
        </div>

    </div>
      
    </>
  )
}

export default MegaMenu
