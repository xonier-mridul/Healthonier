import React from 'react'
import Img from "../assets/2.jpg"
import Circle from "../assets/oval1.svg"

const BlogBanner = () => {
  return (
    <>
      <div className=" py-28 lg:py-32 pt-40 lg:pt-48 blue-bg relative overflow-hidden">
        <img className='absolute big-circle top-0' src={Circle} alt="" />
        <div className='max-w-7xl m-auto flex flex-col lg:flex-row gap-10 items-center relative z-10 pr-5 pl-5'>
           <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="200">
            <h1 className='text-3xl md:text-4xl lg:text-5xl lg:leading-tight text-white font-bold leading-tight pb-7 text-center lg:text-start'>Our Latest News <br/> and Blogs</h1>
            <p className='text-xl text-white text-center lg:text-start'>Welcome to the Healthonier insight center. As part of our commitment to creating a better health experience, we are proud to offer the following resources for organizations, healthcare providers, and patients.</p>
           </div>
           <div className="lg:w-1/2 lg:pl-10" data-aos="fade-left" data-aos-delay="200">
             <img className='rounded-xl  border-4 border-white' src={Img} alt="blog-img" />
           </div>
        </div> 
      </div>
    </>
  )
}

export default BlogBanner
