import React,{useEffect} from "react";
import { FaCheckCircle } from "react-icons/fa";
import Aos from "aos";


const Transformation = () => {
    
    useEffect(() => {
      Aos.init({
        duration: 2000,
        delay: 200
      })
    }, [])
    
    

  return (
    <>
      <div className="transformation max-w-7xl m-auto py-20 flex flex-col lg:flex-row gap-8 lg:gap-12 overflow-hidden pr-5 pl-5">
        <div className="lg:w-1/2 " data-aos="zoom-in">
          <div className="shadow-xl scale rounded-xl p-5 sm:p-10 bg-sky-50">
            <h2 className="text-2xl sm:text-3xl heading-color font-bold pb-5 text-center lg:text-start">
              Support For Transformation
            </h2>
            <p className="text-lg text-neutral-600 text-center lg:text-start">
            The Platform enables a seamless ecosystem for demand and supply organizations to provision services to patients. There are no manual hand-offs and or links to other systems. Patients are not lost, or their status unknown to demand and supply organizations. healthonier can support the transformation from disparate patient engagement, to unified patient engagement; to internal shared services models; and to external B2B service delivery models.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 " data-aos="zoom-out">
          <div className="shadow-xl scale rounded-xl p-5 sm:p-10 bg-sky-50">
            <h2 className="text-2xl sm:text-3xl heading-color font-bold pb-5 text-center lg:text-start">
            Available Online Care Network
            </h2>
            <ul className="grid grid-cols-1 gap-3 md:gap-4">
                <li className="flex gap-4 items-center text-lg"><FaCheckCircle className="red-color text-2xl" />24/7 Virtual Urgent Care</li>
                <li className="flex gap-4 items-center text-lg"><FaCheckCircle className="red-color text-2xl" />Remote Patient Monitoring Care Management</li>
                <li className="flex gap-4 items-center text-lg"><FaCheckCircle className="red-color text-2xl" />SDOH and BRAVE Case Management</li>
                <li className="flex gap-4 items-center text-lg"><FaCheckCircle className="red-color text-2xl" />Arrival stations for in-office visits</li>
                <li className="flex gap-4 items-center text-lg"><FaCheckCircle className="red-color text-2xl" />Behavior health</li>
              
            </ul>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Transformation;
