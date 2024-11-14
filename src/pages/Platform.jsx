import React, {useEffect} from 'react'
import Circle from"../assets/oval1.svg"
import Line from"../assets/sr-line.png"
import Laptop from "../assets/about-img-1.jpg"
import PlatformTabs from '../subComponents/PlatformTabs'
import Aos from 'aos'
import EndtoEnd from '../subComponents/EndtoEnd'
import WhiteLabel from '../subComponents/WhiteLabel'
import HelthoPlatform from '../subComponents/HelthoPlatform'
import EMR from '../subComponents/EMR'
import Transformation from '../subComponents/Transformation'

const Platform = () => {

  const isDesktop = window.innerWidth > 767
  
   useEffect(() => {
     Aos.init({
      duration:2200,
      delay:200,
      once: true
     })
   }, [])
  
  return (
    <>
    <div className='blue-bg py-20 pt-44 relative overflow-hidden'>
      <img className='absolute big-circle top-0 left-0 z-0' src={Circle} alt="circle" />
      <img className='absolute  bottom-0 right-0 z-0' src={Line} alt="circle" />
      {isDesktop && <span className='absolute platform-blue-circle right-96 '></span>}
      <div className='max-w-7xl m-auto flex items-center flex-col lg:flex-row pr-5 pl-5'>
         <div className="lg:w-1/2" data-aos="fade-right">
         <h1 className='text-4xl  lg:text-5xl lg:leading-tight text-white font-bold leading-tight pb-16 lg:pb-8 text-center lg:text-start '>Select the modules relevant to your organization's patient journey</h1>
         </div>
         <div className="lg:w-1/2 relative z-10 flex justify-center " data-aos="fade-left">
          <img className='w-72 h-72 lg:h-96 lg:w-96 rounded-full' src={Laptop} alt="laptop image" />
         </div>
      </div>
    </div>
    <PlatformTabs/>
    <EndtoEnd/>
    <WhiteLabel/>
    <HelthoPlatform/>
    <EMR/>
    <Transformation/>
    </>
  )
}

export default Platform
