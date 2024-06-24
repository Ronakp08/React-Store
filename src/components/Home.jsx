import React from "react";
import HomeSlide from "./HomeSlide";
import { Link } from "react-router-dom";
import { GoCheckCircleFill } from "react-icons/go";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Bubble from "../assets/Bubble";
function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="md:pt-4">
        <HomeSlide />
      </div>
      <div className="home-title text-center text-xl md:text-4xl py-4 px-4 font-semibold">
      "Shop Smart, React Fast, Discover Your Perfect Find with ReactStore"
      </div>
      <div className="flex justify-center items-center flex-col gap-4 md:flex-row py-4">
        <Link to="/products">
          <div className="w-60 text-gray-100  hover:bg-[#6947c1] text-base text-center  py-3 rounded-sm bg-[#7F50F8]">
            Shop now
          </div>
        </Link>
        <Link to="/about">
          <div className="w-60  text-gray-100 hover:bg-[#353535] text-base text-center py-3 rounded-sm bg-[#333333]">
            Learn more
          </div>
        </Link>
      </div>
      <div className="flex item-center- justify-center py-4">
        <div className="w-[2px] h-10 bg-[#ffffff89] md:h-20"></div>
      </div>
      <div className="Explore">
        <div className="title text-center font-bold text-2xl md:text-4xl">
          Why shop with us?
        </div>
        <p className="text-center py-2 px-10 mx-auto italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam
          animi at incidunt veritatis similique sunt laboriosam vitae ratione!
          Dolorum veritatis corporis non magnam sequi?
        </p>
        <div className="container p-6 mx-auto flex gap-3 md:gap-8 flex-wrap justify-center">
          <div
            data-aos="zoom-in"
            className="card w-full md:border border-gray-400 bg-[#1a1a1a] rounded p-4 md:w-1/3"
          >
            <div className="title font-bold text-xl flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 bg-indigo-900">
                <GoCheckCircleFill className="text-2xl" />
              </div>
              Quality Assurance
            </div>
            <p className="pt-2">
              We source our products from trusted suppliers, ensuring that each
              item meets our rigorous quality standards. You can shop with
              confidence, knowing that you're getting the best of the best.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className="card w-full md:border border-gray-400 bg-[#1a1a1a] rounded p-4 md:w-1/3"
          >
            <div className="title font-bold text-xl flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 bg-indigo-900">
                <RiMoneyDollarCircleFill className="text-2xl" />
              </div>
              Unbeatable Prices
            </div>
            <p className="pt-2">
              We believe that everyone deserves access to high-quality [Your
              Product Niche] without breaking the bank. That's why we offer
              competitive prices on all of our products, so you can get more for
              your money.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className="card w-full md:border border-gray-400 bg-[#1a1a1a] rounded p-4 md:w-1/3"
          >
            <div className="title font-bold text-xl flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 bg-indigo-900">
                <FaBagShopping className="text-2xl" />
              </div>
              Convenient Shopping
            </div>
            <p className="pt-2">
              Skip the crowded malls and long checkout lines. With [Your
              Ecommerce Site Name], you can shop anytime, anywhere, with just a
              few clicks. Our user-friendly website makes it easy to browse our
              selection, place orders, and track your shipments.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className="card w-full md:border border-gray-400 bg-[#1a1a1a] rounded p-4 md:w-1/3"
          >
            <div className="title font-bold text-xl flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 bg-indigo-900">
                <FaShippingFast className="text-2xl" />
              </div>
              Fast Shipping
            </div>
            <p className="pt-2">
              We know you're excited to receive your new [Your Product Niche],
              which is why we offer fast and reliable shipping options. With our
              expedited delivery service, you'll have your order in no time.
            </p>
          </div>
          <div
            data-aos="flip-left"
            className="card w-full md:border border-gray-400 bg-[#1a1a1a] rounded p-4 md:w-1/3"
          >
            <div className="title font-bold text-xl flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 bg-indigo-900">
                <RiCustomerService2Fill className="text-2xl" />
              </div>
              Exceptional Customer Service
            </div>
            <p className="pt-2">
              Have a question or need assistance? Our dedicated customer service
              team is here to help. Whether you need help finding the up product
              or have a concern about your order, we're committed to providing
              you with the best shopping experience possible.
            </p>
          </div>
        </div>
      </div>
      <div className="flex item-center- justify-center py-4">
        <div className="w-[2px] h-8 bg-[#ffffff89] md:h-10"></div>
      </div>
      <p className="text-center text-lg py-2">
        Trusted by over 20,000 customers all over the world
      </p>
      <p className="text-center text-sm opacity-60 px-8 mx-auto pb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        modi sit quod.
      </p>
      {/* Review */}
      <div className="review flex justify-center items-center px-8 py-8">
        <div
          data-aos="zoom-in"
          className="w-full h-auto shadow bg-[#1a1a1a] rounded relative md:w-1/2 px-4 pt-10 text-center"
        >
          <div className="absolute w-24 h-24 rounded-full bg-gray-400 -top-8 left-8 overflow-hidden">
            <img
              src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTH55NFVb3wAbFJ_MddzDENtnzdg6HO1FBM23Z9p8GbA8SRbrQyMWvJ_OuQ7exhykySZJLbiMlrlbXF18AMelkiqDYrUwERYfbnIUuH_-KpqzZGacsipuQDDFj0vJNqY2r3pz2vhWwvXg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
          <p className="md:text-xl opacity-70 pt-2">
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            nobis et commodi facilis molestiae odit. "
          </p>
          <h1 className="text-xl py-2">Chris Martin</h1>
          <p className="md:text-xl pb-6">
            CEO & CO-Founder <strong className="text-purple-500">@babel</strong>
          </p>
        </div>
      </div>

      {/* Contact Us */}
      <div className="container flex items-center justify-center p-10">
        <div data-aos="zoom-in" className="bg-[#1a1a1a] sm:mx-auto shadow h-auto w-full p-2 md:w-2/3 md:p-16 rounded relative">
          <h1 className="text-xl text-center md:text-left">Let's Connect !</h1>
          <p className="md:w-2/4 py-4 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            labore?
          </p>
          <div className="flex justify-center flex-col gap-4 md:flex-row md:justify-start">
            <input type="text" className="bg-[#1a1a1a] border px-4 py-2 outline-none rounded" placeholder="Email" />
            <button className="bg-[#5714FF] px-2 rounded py-1">Subscribe</button>
          </div>
          <div className="hidden lg:block sm:absolute sm:top-10 sm:right-10">
            <Bubble/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
