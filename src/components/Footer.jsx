import React from "react";
import Logo from "../assets/logo-white.png";
import { Link, NavLink } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" blue-bg ">
        <div className="max-w-7xl m-auto grid md:grid-cols-2 lg:grid-cols-4 py-20 gap-8 pr-5 pl-5">
          <div className="lg:pr-8">
            <img className="w-48 mb-5" src={Logo} alt="" />
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              nam ut vitae sunt totam veritatis temporibus modi blanditiis?
            </p>
          </div>
          <div className="lg:pl-4">
            <h3 className="text-white font-semibold text-2xl mb-5">Pages</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <NavLink
                  to="/platform"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-lg red-color" : "text-lg text-white"
                    }  flex gap-2 items-center text-lg`
                  }
                >
                  <FaAnglesRight /> Platfrom
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-lg red-color" : "text-white"
                    } text-lg flex gap-2 items-center `
                  }
                >
                  <FaAnglesRight /> Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-lg red-color" : "text-white"
                    } text-lg flex gap-2 items-center`
                  }
                >
                  <FaAnglesRight /> Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-2xl mb-5">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  className="flex gap-3 items-center text-white hover:scale-105 transition-all"
                  to="mailto:hello@healthonier.com"
                >
                  <FaRegEnvelope className="text-lg" /> hello@healthonier.com
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-3 items-center text-white hover:scale-105 transition-all"
                  to="tel:+1234567890"
                >
                  <FaPhoneAlt /> +1234567890
                </Link>
              </li>
              <div className="flex py-4 footer-border gap-3">
                <span className="bg-white h-9 w-9 rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer"><Link className="text-lg " to="/"><FaFacebookF className="blue-color"/></Link></span>
                <span className="bg-white h-9 w-9 rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer"><Link className="text-lg " to="/"><FaInstagram className="blue-color"/></Link></span>
                <span className="bg-white h-9 w-9 rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer"><Link className="text-lg " to="/"><FaLinkedinIn className="blue-color"/></Link></span>
              </div>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-2xl mb-5">
              News Letter
            </h3>
            <p className="text-white text-lg mb-6">
              Subscribe to receive our latest news and articles. Your email is
              safe with us!
            </p>
            <div className="flex bg-white rounded-md overflow-hidden " >
              <input className="w-3/4 px-3 outline-none text-sm" type="email" name="email" id="email" placeholder="Enter email " required/>
              <button className="w-1/4 red-bg text-white py-3" type="submit">Send</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl m-auto pr-5 pl-5 py-5 flex items-center footer-border flex-col md:flex-row">
          <div className="md:w-1/2  mb-2 md:mb-0">
            <p className="text-white text-center text-sm md:text-start">
              &copy; 2025 COPYRIGHT Healthonier by &nbsp;
              <Link className="underline" to="https://xoniertechnology.com">
                Xonier Technology
              </Link>
              . All Rights Reserved.
            </p>
          </div>
          <div className="  md:w-1/2 flex justify-end">
            <ul className="flex gap-5">
              <li>
                <Link className="text-white text-sm" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-white text-sm" to="/">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
