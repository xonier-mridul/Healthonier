import React, { useState, useEffect } from "react";
import LogoWhite from "../assets/logo-white.png";
import Logo from "../assets/healthonerlogo.png";
import { NavLink, Link } from "react-router-dom";
import MegaMenu from "../subComponents/MegaMenu";
import { FaAngleDown } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { adduser } from "../../store/counterSlice";
import { useDispatch } from "react-redux";
import UserData from "../subComponents/UserData";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAnglesRight } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mega, setmega] = useState(false);
  const [sidemenu, setsidemenu] = useState(true);
  const [sidemenuBlur, setsidemenuBlur] = useState(false);
  const [visible, setvisible] = useState(false);
  const [userdata, setuserdata] = useState(false);
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const actionSubmit = (e) => {
    e.preventDefault();
    dispatch(adduser(formdata));
    setvisible(false);
    setuserdata(true);

    setTimeout(() => {
      setuserdata(false);
    }, 3500);

    setformdata({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SidemenuHendler = () => {
    setsidemenu(false);
    setsidemenuBlur(true);
  };

  const CloseSideMenu = () => {
    setsidemenu(true);
    setsidemenuBlur(false);
  };

  const SideMenuContact = () => {
    setvisible(true);
    CloseSideMenu();
  };

  const [SideMenuSub, setSideMenuSub] = useState(false);

  return (
    <>
      {visible && (
        <div
          className="blur-bg backdrop-blur-md h-full w-full fixed z-40"
          onClick={() => setvisible(false)}
        ></div>
      )}

      {visible && (
        <div className="call fixed top-1/2 left-1/2 w-full lg:w-1/2 bg-white p-8 z-40 rounded-lg shadow-2xl ml-4 mr-4">
          <div className="flex justify-between pb-5">
            <h3 className="text-2xl font-bold ">Contact Us</h3>
            <span className="cursor-pointer transition-all" onClick={() => setvisible(false)}>
              <FaXmark className="text-2xl hover:text-red-600" />
            </span>
          </div>
          <form className=" flex flex-col gap-3" onSubmit={actionSubmit}>
            <div className="flex flex-col md:flex-row gap-4 ">
              <div className="w-full flex flex-col gap-2">
                <label className="" htmlFor="name">
                  Name
                </label>
                <input
                  className="outline-none p-3 text-sm border-2 w-full rounded-lg "
                  type="text "
                  name="name"
                  id="name"
                  value={formdata.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="" htmlFor="email">
                  Email
                </label>
                <input
                  className="outline-none p-3 text-sm border-2 w-full rounded-lg"
                  type="email "
                  name="email"
                  id="email"
                  value={formdata.email}
                  onChange={handleChange}
                  placeholder="Enter your mail"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="number">Phone Number</label>
              <input
                className="outline-none p-3 text-sm border-2 w-full rounded-lg"
                type="text"
                name="number "
                id="number"
                value={formdata.phone}
                onChange={handleChange}
                placeholder="Enter your number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                className="outline-none py-3 text-sm border-2 w-full rounded-lg p-3"
                name="message"
                id="message"
                rows={6}
                value={formdata.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button disabled={formdata.message == "" || formdata.name =="" || formdata.email == "" || formdata.phone == ""}
              className=" disabled:bg-red-300 rounded-lg red-bg text-white py-2 text-lg mt-3"
              type="submit"
              onClick={SubmitEvent}
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {userdata && (
        <div
          className="blur-bg backdrop-blur-md h-full w-full fixed z-40"
          onClick={() => setuserdata(false)}
        ></div>
      )}
      {userdata && <UserData close={() => setuserdata(false)} />}
      {sidemenuBlur && (
        <div
          className="blur-bg backdrop-blur-md h-full w-full fixed z-40"
          onClick={CloseSideMenu}
        ></div>
      )}
      <div
        className={`${
          sidemenu && "side-menu-show"
        } side-menu fixed top-0 right-0 h-full w-full md:w-96 z-40 bg-white shadow-xl overflow-y-scroll`}
      >
        <div className="side-menu-header flex justify-between items-center p-5">
          <Link to={`/`} onClick={CloseSideMenu}>
            <img className="w-40" src={Logo} alt="Healthonier Logo" />
          </Link>
          <span className="h-10 w-10 flex justify-center items-center red-bg rounded-full cursor-pointer" onClick={CloseSideMenu}>
            <FaXmark className="text-xl text-white" />
          </span>
        </div>
        <div className="p-5">
          <ul className="flex justify-end flex-col gap-1">
            <li className="py-3">
              <NavLink
                to="/platform"
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b-2 py-2 border-white" : "text-black"
                  }   text-lg `
                }
                onMouseEnter={() => setmega(false)}
                onClick={CloseSideMenu}
              >
                The Platform
              </NavLink>
            </li>
            <li
              className={`text-lg relative flex gap-2 items-center py-3 cursor-pointer`}
              onMouseEnter={() => setSideMenuSub(true)}
            >
              Products and Solutions <FaAngleDown />
              {mega && <MegaMenu leave={() => setmega(false)} />}
            </li>
            <li>
              {SideMenuSub && (
                <div onMouseLeave={() => {
                    setSideMenuSub(false);
                  }}>
                  <div className="pb-4">
                    <h3 className="pb-4 font-semibold text-xl heading-color">
                      Patient Feature
                    </h3>
                    <ul className="flex gap-3 flex-col text-neutral-600 ">
                      <li>
                        <Link className="flex gap-2 items-center hover:text-red-600 transition-all " onClick={CloseSideMenu}>
                          <FaAnglesRight className="red-color" />
                          Tokan Tracking
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/video"
                          className="flex gap-2 items-center hover:text-red-600 transition-all"
                          onClick={CloseSideMenu}>
                          
                          <FaAnglesRight className="red-color" /> Video
                          Consultation
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/payment"
                          className="flex gap-2 items-center hover:text-red-600 transition-all"
                          onClick={CloseSideMenu}>
                         
                          <FaAnglesRight className="red-color" />
                          Online Payment
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/family-health"
                          className="flex gap-2 items-center hover:text-red-600 transition-all"
                          onClick={CloseSideMenu}>
                          <FaAnglesRight className="red-color" />
                          Family Health Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/language"
                          className="flex gap-2 items-center hover:text-red-600 transition-all"
                          onClick={CloseSideMenu}>
                          <FaAnglesRight className="red-color" />
                          Language Preferences
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/health-record"
                          className="flex gap-2 items-center hover:text-red-600 transition-all"
                          onClick={CloseSideMenu}>
                          <FaAnglesRight className="red-color" />
                          Personal Health Record
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="pb-4 font-semibold text-xl">
                      Doctor Feature
                    </h3>
                    <ul className="flex gap-3 flex-col text-neutral-600">
                      <li>
                        <Link
                          Link
                          to="/doctor"
                          className="flex gap-2 items-center hover:text-red-600 transition-all"
                          onClick={CloseSideMenu}>
                          <FaAnglesRight className="red-color" />
                          Doctor Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/patient"
                          className="flex gap-2 items-center hover:text-red-600 transition-all"
                          onClick={CloseSideMenu}>
                          <FaAnglesRight className="red-color" />
                          Patient Panel
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/appointment"
                          className="flex gap-2 items-center hover:text-red-600 transition-all"
                          onClick={CloseSideMenu}>
                          <FaAnglesRight className="red-color" />
                          Appointment Booking
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/service-listing"
                          className="flex gap-2 items-center hover:text-red-600 transition-all"
                          onClick={CloseSideMenu}>
                          <FaAnglesRight className="red-color" />
                          Service Listing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/token"
                          className="flex gap-2 items-center hover:text-red-600 transition-all"
                          onClick={CloseSideMenu}>
                          <FaAnglesRight className="red-color" />
                          Token Tracking System
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/times"
                          className="flex gap-2 items-center hover:text-red-600 transition-all"
                          onClick={CloseSideMenu}>
                          <FaAnglesRight className="red-color" />
                          Times Slots
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li className="py-3">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b-2 py-2 border-white" : "text-black"
                  }  `
                }
                onMouseEnter={() => setmega(false)}
                onClick={CloseSideMenu}
              >
                Blog
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b-2 py-2 border-white" : "text-black"
                  }   `
                }
                onMouseEnter={() => setmega(false)}
                onClick={CloseSideMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <div
            className="btn-hover w-fit red-bg text-white rounded-lg py-3 px-7 xl:text-lg cursor-pointer "
            onClick={SideMenuContact}
          >
            Book A Discovery Call
          </div>
        </div>
      </div>

      <header
        className={`fixed top-0 left-0 w-full  xl:w-full transition-colors duration-300 z-20 pl-5 pr-5  ${
          isScrolled ? "bg-white shadow-md py-3 z-30" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl m-auto flex items-center gap-6">
          <div className="w-2/5 lg:w-1/5">
            <Link to="/">
              {isScrolled ? (
                <img className="w-40" src={Logo} alt="Healthonier Logo" />
              ) : (
                <img className="w-40" src={LogoWhite} alt="" />
              )}
            </Link>
          </div>
          <div className="w-3/5 hidden lg:block">
            <nav>
              <ul className="flex justify-end gap-10">
                <li className="py-3">
                  <NavLink
                    to="/platform"
                    className={({ isActive }) =>
                      `${
                        isActive ? "border-b-2 py-2 border-white" : "text-black"
                      } ${
                        isScrolled
                          ? "text-black border-red-500 red-border "
                          : "text-white"
                      }   `
                    }
                    onMouseEnter={() => setmega(false)}
                  >
                    The Platform
                  </NavLink>
                </li>
                <li
                  className={`${
                    isScrolled ? "text-black" : "text-white"
                  }   relative flex gap-2 items-center py-3 cursor-pointer`}
                  onMouseEnter={() => setmega(true)}
                >
                  Products and Solutions <FaAngleDown />
                  {mega && <MegaMenu leave={() => setmega(false)} />}
                </li>
                <li className="py-3">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      `${
                        isActive ? "border-b-2 py-2 border-white" : "text-black"
                      }   ${
                        isScrolled
                          ? "text-black border-red-500 red-border"
                          : "text-white"
                      }`
                    }
                    onMouseEnter={() => setmega(false)}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="py-3">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `${
                        isActive ? "border-b-2 py-2 border-white" : "text-black"
                      }   ${
                        isScrolled
                          ? "text-black border-red-500 red-border"
                          : "text-white"
                      }`
                    }
                    onMouseEnter={() => setmega(false)}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-1/5 lg:flex justify-end hidden">
            <div
              className="btn-hover red-bg text-white rounded-lg py-3 px-7  cursor-pointer "
              onClick={() => setvisible(true)}
            >
              Book A Discovery Call
            </div>
          </div>
          <div className=" lg:hidden w-3/5 lg:w-4/5 flex justify-end items-center">
            <span
              className="h-10 w-10 rounded-full bg-red-500 flex justify-center items-center cursor-pointer"
              onClick={SidemenuHendler}
            >
              <GiHamburgerMenu className="text-xl text-white" />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
