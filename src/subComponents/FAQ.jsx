import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Triangle from "../assets/triangle-circle.png"
import Aos from "aos";

const FAQ = () => {
  useEffect(()=>{
   Aos.init({
    once:true
   })
  },[])
  const faqData = [
    {
      question: "How much does it cost to develop a telemedicine app? ",
      answer:
        "The development of an MVP typically costs around $15,000 - 20,000. Creating a working prototype of your app enables you to evaluate your solution and determine what improvements or modifications are needed The final cost of a telemedicine app depends on the number of features and integrations required, platforms covered, and more. The cost for a basic telehealth solution can range from $50,000 to $200,000 Apart from the cost of your telemedicine solution, you could face extra costs including medical device integration, telemedicine platform license, video conferencing and telemedicine equipment costs, and other",
    },
    {
      question: "What is our experience in Healthcare Indusry?",
      answer:
        "The development of an MVP typically takes up to 6-8 weeks. Building a telemedicine app can be complicated and time-consuming. It can easily take 3-24 months depending on the number of features, team size, etc. The process of telemedicine app development includes the discovery phase, MVP development, and telemedicine app implementation.",
    },
    {
      question: " What services do you offer? ",
      answer:
        "We offer a comprehensive range of health services, including routine check-ups, specialized treatments, and emergency care.",
    },
    {
      question: "How can I book an appointment? ",
      answer:
        "Before choosing a platform for your telemedicine app we need to analyze your target audience (location, devices, operating systems, etc.). Even though mobile is more popular nowadays, it’s better to cover mobile and web.",
    },
    {
      question: "Do you accept insurance? ",
      answer:
        "Yes, we accept most major insurance providers. Please contact our office for specific details.",
    },
  ];

  const [show, setshow] = useState(null);

  const filter = (index) => {
    setshow(show === index ? null : index);
  };

  return (
    <>
      <div className="max-w-7xl m-auto py-20 relative pr-5 pl-5">
        <div
          className="w-full flex flex-col items-center justify-center mb-12 lg:mb-20"
          data-aos="fade-up"
        >
          <h2 className="text-3xl lg:text-4xl font-bold lg:w-2/3 text-center leading-tight heading-color mb-6">
            Frequently Asked Questions
          </h2>
          <p className=" lg:w-3/4 text-center text-lg text-neutral-600">
            Healthonier is a global software development company providing
            telemedicine software development and telemedicine app development
            services to telehealth software providers, healthcare providers, and
            clinics from the US, EU, and UK.
          </p>
        </div>
        <img className="triangle hidden lg:absolute top-32 right-16 w-24" src={Triangle} alt="" />
            <span className="triangle hidden h-44 w-44 rounded-full lg:absolute top-60 red-bg"></span>
            <span style={{background:"linear-gradient(224.13deg, #00fff0 -8.75%, #008ff7 111.08%)"}} className="triangle h-44 w-44 rounded-full absolute bottom-11 right-6"></span>
        <div className="flex flex-col justify-center gap-4 z-10 relative">
          {faqData.map((data, index) => (
            <div key={index} data-aos="flip-up">
              <div className="flex justify-between items-center px-3 py-2 lg:py-3 pl-6 rounded-lg blue-bg " >
                <h3 className="font-bold text-lg lg:text-xl  text-white">
                  {data.question}
                </h3>
                <button className=" h-12 w-12 rounded-lg flex items-center justify-center" onClick={()=>filter(index)}>
                  <FaArrowRight
                    className={`${show === index && "rotate-90"} text-white text-xl transition-all`}
                  />
                </button>
              </div>
              {show === index && <div style={{background:"#ECF0F7"}} className="p-6 text-lg text-neutral-600 rounded-lg"> {data.answer} </div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
