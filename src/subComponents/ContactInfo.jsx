import React, {useEffect} from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { Link } from "react-router-dom";
import Aos from "aos";

const ContactInfo = () => {
  
    useEffect(()=>{
        Aos.init({
        duration:2000,
      
        })
    }, [])


  return (
    <>
      <div style={{background:'#f2f2f252'}} >
        <div  className="max-w-7xl m-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 py-20 pr-5 pl-5 ">
          <Link className="contact-icon-box" to="mailto:test@gmail.com">
            <div className="bg-white  flex h-full flex-col items-center p-8 rounded-lg gap-3 " data-aos="zoom-in">
              <span className="mb-2">
                <IoChatbubblesOutline className="contact-icon blue-color text-6xl font-bold " />
              </span>
              <h1 className="heading-color font-semibold text-2xl">
                Chat with us
              </h1>
              <p className="text-center text-lg text-neutral-600">
                We've got live Social Experts waiting to help you monday to
                friday from 9am to 5pm IST.
              </p>
            </div>
          </Link>
          <Link className="contact-icon-box" to="mailto:test@gmail.com">
            <div className="bg-white  h-full flex flex-col items-center p-8 rounded-lg gap-3  " data-aos="zoom-in" data-aos-delay="200">
              <span className="mb-2">
                <IoIosMailUnread className="contact-icon blue-color text-6xl font-bold " />
              </span>
              <h1 className="heading-color font-semibold text-2xl">Email Us</h1>
              <p className="text-center text-lg text-neutral-600">
                Simple drop us an email at hello@healthonier.com and you'll
                receive a reply within 24 hours
              </p>
            </div>
          </Link>
          <Link className="contact-icon-box" to="tel:+1234567890">
            <div className="bg-white  h-full flex flex-col items-center p-8 rounded-lg gap-3  " data-aos="zoom-in" data-aos-delay="200">
              <span className="mb-2">
                <MdAddCall className="contact-icon blue-color text-6xl font-bold " />
              </span>
              <h1 className="heading-color font-semibold text-2xl">
                Give us a call
              </h1>
              <p className="text-center text-lg text-neutral-600">
                Give us a ring.Our Experts are standing by monday to friday from
                9am to 5pm IST.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
