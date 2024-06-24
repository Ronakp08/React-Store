import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
function HomeSlide() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // Show one slide on smaller screens
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Show two slides on medium screens
      } else {
        setSlidesToShow(3); // Show three slides on larger screens
      }
    };

    // Initial adjustment when component mounts
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container w-[80%] mx-auto md:w-[95%] z-0">
      <Slider {...settings} className="z-1">
        <div>
          <div className="h-48 md:h-80">
            <img
              src={img6}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div>
          <div className="h-48 md:h-80">
            <img
              src={img1}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div>
          <div className="h-48 md:h-80">
            <img
              src={img2}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div>
          <div className="h-48 md:h-80">
            <img
              src={img3}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div>
          <div className="h-48 md:h-80">
            <img
              src={img4}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div>
          <div className="h-48 md:h-80">
            <img
              src={img5}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlide;
