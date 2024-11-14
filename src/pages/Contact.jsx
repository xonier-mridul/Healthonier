import React, { useState, useEffect } from "react";
import Logo from "../assets/healthonerlogo.png";
import { addContact } from "../../store/ContactSlice";
import { useDispatch } from "react-redux";
import ContactGreat from "../subComponents/ContactGreat";
import ContactInfo from "../subComponents/ContactInfo";
import Aos from "aos";
import Circle from "../assets/oval1.svg"
import FAQ from "../subComponents/FAQ"
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [users, setusers] = useState({
    name: "",
    number: "",
    email: "",
    location: "",
    message: "",
  });

  const dispatch = useDispatch();

  const addUsers = (e) => {
    const { name, value } = e.target;
    setusers({ ...users, [name]: value });
  };

  const actionSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(users));
    setusers({
      name: "",
      number: "",
      email: "",
      location: "",
      message: "",
    });

    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 4500);
  };

  useEffect(() => {
   Aos.init({
    duration: 2000,
    delay: "200"
   })
  }, [])
  
  return (
    <>
      {visible && (
        <div className="blur-bg backdrop-blur-md h-full w-full fixed z-40" onClick={()=>setVisible(false)}></div>
      )}
      {visible && <ContactGreat />}
      <div className="blue-bg pt-40 pb-28 lg:pt-48 lg:pb-32 relative overflow-hidden">
      <img className='absolute big-circle top-0' src={Circle} alt="" />
        <div className="max-w-7xl m-auto  flex flex-col lg:flex-row items-center gap-14 pl-5 pr-5 ">
          <div className="lg:w-1/2" data-aos="zoom-out-down">
            <div className=" p-5 lg:p-8 rounded-md bg-white shadow-lg">
              <img className="w-40 mb-3" src={Logo} alt="" />
              <h1 className="blue-color text-2xl md:text-3xl font-bold pb-5">
                Stay Connect With Healthonier Team
              </h1>
             <p className="text-lg text-neutral-600 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora fuga maxime dolorem, alias reprehenderit sunt excepturi ratione eius sequi? Rerum, ipsa eius?</p>
             <div className="flex py-4 gap-4">
                <span className="blue-bg h-9 w-9 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all cursor-pointer"><Link className="text-lg " to="/"><FaFacebookF className=""/></Link></span>
                <span className="blue-bg h-9 w-9 rounded-full flex items-center justify-center text-white  hover:scale-110 transition-all cursor-pointer"><Link className="text-lg " to="/"><FaInstagram className=""/></Link></span>
                <span className="blue-bg h-9 w-9 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all cursor-pointer"><Link className="text-lg " to="/"><FaLinkedinIn className=""/></Link></span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2" data-aos="zoom-out-down">
            <form className="w-full flex flex-col gap-4" onSubmit={actionSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <span className="flex flex-col gap-2">
                  <label className="text-white" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="outline-none w-full text-sm rounded-md p-3"
                    type="text"
                    name="name"
                    id="name"
                    value={users.name}
                    placeholder="Name"
                    onChange={addUsers}
                    required
                  />
                </span>
                <span className="flex flex-col gap-2">
                  <label className="text-white" htmlFor="number">
                    Phone Number
                  </label>
                  <input
                    className="outline-none w-full text-sm rounded-md p-3"
                    type="number"
                    name="number"
                    id="number"
                    value={users.number}
                    placeholder="Number"
                    onChange={addUsers}
                    required
                  />
                </span>
                <span className="flex flex-col gap-2">
                  <label className="text-white" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="outline-none w-full text-sm rounded-md p-3"
                    type="email"
                    name="email"
                    id="email"
                    value={users.email}
                    placeholder="Email"
                    onChange={addUsers}
                    required
                  />
                </span>
                <span className="flex flex-col gap-2">
                  <label className="text-white" htmlFor="location">
                    Location
                  </label>
                  <input
                    className="outline-none w-full text-sm rounded-md p-3"
                    placeholder="City"
                    type="text"
                    name="location"
                    id="location"
                    value={users.location}
                    required
                    onChange={addUsers}
                  />
                </span>
              </div>
              <span className="flex flex-col gap-2">
                <label className="text-white" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="outline-none w-full text-sm rounded-md p-3"
                  name="message"
                  id="message"
                  placeholder="Type here..."
                  value={users.message}
                  onChange={addUsers}
                  rows={5}
                  
                ></textarea>
              </span>
              <button disabled={users.message=="" || users.email=="" || users.location=="" || users.number=="" || users.name==""}
                className={` disabled:bg-red-300 btn-hovers red-bg py-3 w-full rounded-md text-white text-lg `}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ContactInfo/>
      <FAQ/>
    </>
  );
};

export default Contact;
