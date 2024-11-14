import React, {useEffect} from 'react'
import BlogBanner from '../subComponents/BlogBanner'
import BlogAPI from '../subComponents/BlogAPI'
import Aos from 'aos'
import Partner from "../subComponents/Partner"

const Blog = () => {
  
  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  },[])


  return (
    <>
       <BlogBanner/>
       <BlogAPI/>
       <Partner/>
    </>
  )
}

export default Blog
