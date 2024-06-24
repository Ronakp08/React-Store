import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect,useState } from "react";
function ProductSlider({ images }) {
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
    <Slider {...settings} className="z-0 w-[85%] mx-auto">
      {images.map((image, index) => (
        <div key={index}>
          <img className="object-contain h-auto" src={image} alt="" />
        </div>
      ))}
    </Slider>
  );
}

export default ProductSlider;
