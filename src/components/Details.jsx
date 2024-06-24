import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaTruckFast } from "react-icons/fa6";
import { SiCashapp } from "react-icons/si";
import { GiReturnArrow } from "react-icons/gi";

import ProductSlider from "./ProductSlider";

function Details() {
  const { productId } = useParams(); // Accessing the productId param from the route
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/Products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false to handle error state
      });
  }, [productId]);

  // Conditionally render the component based on isLoading state
  return isLoading ? (
    <div className="flex items-center justify-center h-screen w-full">
      Loading...
    </div>
  ) : (
    <div className="w-full pt-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          {product.images && (
            <div className="images hidden md:block flex-col p-8 cursor-zoom-in">
              {product.images.map((image) => {
                return <img key={image} src={image} alt="" className="object-contain" />;
              })}
            </div>
          )}
          <div className="sm:hidden">
            <ProductSlider key={product.id} images={product.images} />
          </div>
        </div>
        <div className="flex-1 py-8 w-[85%] mx-auto md:w-full">
          <p className="text-xl">{product.title}</p>
          <p className="text-base opacity-80 pt-4">{product.description}</p>
          <p className="rating pt-4 text-xl">${product.price}</p>
          <p className="lowercase">Inclusive of all taxes</p>
          <div className="buttons flex items-center gap-4 pt-4">
            <button className="bg-indigo-700 px-4 py-2 rounded">BUY NOW</button>
            <button className="bg-gray-700 px-4 py-2 rounded">ADD TO CART</button>
          </div>
          <p className="text-base font-semibold pt-4 flex items-center gap-1">
            Delivery Options
            <span className="text-xl">
              <FaTruckFast />
            </span>
          </p>
          <div className="pt-4">
            <input
              type="text"
              className="outline-none border p-2 bg-transparent"
              placeholder="Check Delivery"
            />
          </div>
          <div className="flex gap-2 items-center pt-4">
            <SiCashapp />
            Cash On Delivery Available
          </div>
          <div className="flex gap-2 items-center pt-4">
            <GiReturnArrow />
            Easy 14 days return & exchange available
          </div>
          <p className="pt-4">
            <span className="text-xl">💯</span>Original Products
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
