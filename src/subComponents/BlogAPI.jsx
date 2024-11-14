import React, {useState, useEffect} from 'react'
import axios from 'axios'
import img from "../assets/blog-10.jpg"
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuLoader } from "react-icons/lu";


const BlogAPI = () => {

    const [blogdata, setblogdata] = useState([])
    const api = "https://dummyjson.com/posts"
    const lenght = blogdata.length > 0

    useEffect(() => {
        const fetchData = async() =>{
            const aa = await axios.get(api);
            const data = await aa.data;
            setblogdata(data.posts)
        }
        fetchData()
    }, [])

    
  return (
    <>
      <div className='max-w-7xl m-auto py-20 '>
        <div className={`${lenght? "md:grid-cols-2" : "grid-cols-1"} p-6 rounded-xl grid  w-full gap-8 `}>
                {lenght ? blogdata.slice(0,4).map((e)=>(
                <div style={{background:"#e9edf554"}} className='blog-api cursor-pointer rounded-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden w-full' key={e.id} data-aos="zoom-in">
                    <div className='w-full overflow-hidden'>
                        <img className='blog-img w-full h-52 md:h-full object-cover' src={img} alt="" />
                    </div>
                    <div className="p-6 flex flex-col gap-3 w-full">
                     <div><span className='red-bg py-1 px-4 text-white font-semibold rounded-md '>{e.tags.slice(0,1) }</span></div>
                    <h4 className='text-xl font-semibold heading-color truncate'>{e.title}</h4>
                    <p className='text-lg text-neutral-600  elip-para '>{e.body}</p>

                    <div className=' blog-border flex justify-between pt-4'>
                        <div className='flex items-center gap-4'>
                        <span className='flex items-center gap-2 text-base'><FaHeart className='red-color'/> {e.reactions.likes}</span>
                        <span className='flex items-center gap-2'><FaEye  className='blue-color'/> {e.views}</span>
                        </div>
                        <div className=' flex items-center gap-3'>
                         <p className='font-semibold text-neutral-500 flex items-center gap-2'><FaRegCalendarAlt />11/07/24</p>
                        </div>
                        
                    </div>
                    </div>


                </div>
           ) ): <div className='w-full flex justify-center items-center '> <span className='spinner '><LuLoader className='text-3xl  lg:text-4xl text-slate-600'/></span> </div>}

        </div>

      </div>
    </>
  )
}

export default BlogAPI
