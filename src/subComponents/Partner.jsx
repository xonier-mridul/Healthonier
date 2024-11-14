import React, { useEffect } from "react";
import Slider from "react-slick";
import img1 from "../assets/PartnerOne.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";

const Partner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
    ]
  };

  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 300,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="py-10 overflow-hidden px-5">
        <div data-aos="fade-in">
          <Slider {...settings}>
            <div>
              <img className="w-36" src={img1} alt="partner1" />
            </div>
            <div>
              <img className="w-36" src={img2} alt="partner2" />
            </div>
            <div>
              <img className="w-36" src={img3} alt="partner3" />
            </div>
            <div>
              <img className="w-36" src={img4} alt="partner4" />
            </div>
            <div>
              <img className="w-36" src={img5} alt="partner5" />
            </div>
            <div>
              <img className="w-36" src={img6} alt="partner6" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Partner;
