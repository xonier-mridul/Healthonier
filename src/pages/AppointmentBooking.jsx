import React from 'react'
import MegaBanner from '../subComponents/MegaBanner'
import DeshBoard from '../assets/homedashboard.png'
import ExploreProduct from '../subComponents/ExploreProduct'
import Partner from '../subComponents/Partner'


const AppointmentBooking = () => {
  return (
    <>
    <MegaBanner heading=" Select configurations to build the perfect patient experience" listOne="All functions seamlessly integrate together" listTwo="Patient-centric design is core to the patient engagement" listThree="Create a branded experience with white label modules" img={DeshBoard}/>
    <ExploreProduct/>
    <Partner/>
      
    </>
  )
}

export default AppointmentBooking
