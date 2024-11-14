import React,{useEffect} from "react";
import img from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/icon3.png";
import img4 from "../assets/icon4.png";
import img5 from "../assets/icon5.png";
import img6 from "../assets/icon6.png";
import img7 from "../assets/icon7.png";
import img8 from "../assets/icon8.png";
import img9 from "../assets/icon9.png";
import Aos, { init } from "aos"

const ExploreProduct = () => {

  const isDesktop = window.innerWidth > 768 

  if(isDesktop){

    useEffect(() => {
      Aos,init({
        once: true
      })
    }, [])
  }
  
  return (
    <>
      <div className="py-20 bg-[#EAEEF6] overflow-hidden">
        <div className="max-w-7xl m-auto pl-5 pr-5">
          <div className=" flex flex-col justify-center items-center gap-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold heading-color text-center ">
              Explore products & solutions
            </h2>
            <p className="text-lg text-neutral-600 text-center">
              Turn on, or turn off functionality to meet your specific needs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-10">
            <div className="rounded-lg bg-white"  data-aos="zoom-in">
              <div className="p-8 explore-box flex flex-col  gap-4 items-center ">
                <div>
                  <img className="w-20 product-img" src={img} alt="" />
                </div>
                <h4 className="text-xl font-bold heading-color text-center">
                  Healthonier Engage
                </h4>
                <p className="text-lg text-neutral-600 text-center">
                  Connect people with health & wellness services for optimal
                  patient-provider engagement experiences.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white" data-aos="zoom-in" data-aos-delay="200">
              <div className="p-8 explore-box flex flex-col  gap-4 items-center">
                <div>
                  <img className="w-20 product-img" src={img2} alt="" />
                </div>
                <h4 className="text-xl font-bold heading-color text-center">
                  Care coordination
                </h4>
                <p className="text-lg text-neutral-600 text-center">
                  Connect people across health & wellness services, providing
                  the best engagement experience for both patients and
                  providers.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white" data-aos="zoom-in" data-aos-delay="400">
              <div className="p-8 explore-box flex flex-col gap-4 items-center">
                <div>
                  <img className="w-20 product-img" src={img3} alt="" />
                </div>
                <h4 className="text-xl font-bold heading-color text-center ">
                  Concierge access
                </h4>
                <p className="text-lg text-neutral-600 text-center">
                  Offer patients exclusive memberships to concierge services
                  with increased access and convenience.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white" data-aos="zoom-in">
              <div className="p-8 explore-box flex flex-col gap-4 items-center">
                <div>
                  <img className="w-20 product-img" src={img4} alt="" />
                </div>
                <h4 className="text-xl font-bold heading-color text-center">
                  Smart Screening
                </h4>
                <p className="text-lg text-neutral-600 text-center">
                  Digital forms and screening through the use of a
                  Survey-Monkey-like administration tool.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white" data-aos="zoom-in" data-aos-delay="200">
              <div className="p-8 explore-box flex flex-col gap-4 items-center">
                <div>
                  <img className="w-20 product-img" src={img5} alt="" />
                </div>
                <h4 className="text-xl font-bold heading-color text-center">
                  RPM
                </h4>
                <p className="text-lg text-neutral-600 text-center">
                  Deploy RPM to patients with a full suite of patient engagement
                  tools.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white" data-aos="zoom-in" data-aos-delay="400">
              <div className="p-8 explore-box flex flex-col gap-4 items-center">
                <div>
                  <img className="w-20 product-img" src={img6} alt="" />
                </div>
                <h4 className="text-xl font-bold heading-color text-center">
                  Urgent Care
                </h4>
                <p className="text-lg text-neutral-600 text-center">
                  Streamline pre-visit process for digital urgent care,
                  enhancing patient experience and connectivity.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white" data-aos="zoom-in">
              <div className="p-8 explore-box flex flex-col gap-4 items-center">
                <div>
                  <img className="w-20 product-img" src={img7} alt="" />
                </div>
                <h4 className="text-xl font-bold heading-color text-center">
                  SDoH Case Mgt
                </h4>
                <p className="text-lg text-neutral-600 text-center">
                  Empower a connected community of social service providers for
                  improved patient Social Determinants of Health.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg bg-white"
              data-aos="zoom-in"
              data-aos-delay="200"
            
            >
              <div className="p-8 explore-box flex flex-col gap-4 items-center">
                <div>
                  <img className="w-20 product-img" src={img8} alt="" />
                </div>
                <h4 className="text-xl font-bold heading-color text-center">
                  Intake and Registration
                </h4>
                <p className="text-lg text-neutral-600 text-center">
                  Enable patients to seamlessly register and complete patient
                  documentation.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg bg-white"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="p-8 explore-box flex flex-col gap-4 items-center">
                <div>
                  <img className="w-20 product-img" src={img9} alt="" />
                </div>
                <h4 className="text-xl font-bold heading-color text-center">
                  Scheduling Appointments
                </h4>
                <p className="text-lg text-neutral-600 text-center">
                  Enable patient to seamlessly schedule visits based on provider
                  availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreProduct;
