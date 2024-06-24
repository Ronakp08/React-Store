import React from "react";
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";

function Product({ productImage, productCategory, productTitle, productPrice }) {
  const truncateTitle = (title) => {
    if (title.length > 35) {
      return title.slice(0, 32) + "...";
    }
    return title;
  };

  return (
    <>
      <div className="product w-80 h-auto flex flex-col bg-white border shadow-lg cursor-pointer rounded p-4 relative">
        <span className="likeButton absolute right-0 top-0">
          <button className="w-10 h-10 rounded-full flex justify-center items-center text-2xl">
          <GoHeart className="cursor-pointer"/>
          </button>
        </span>
        <div className="imageContainer h-72 p-4">
          <img
            src={productImage}
            alt="ProductImage"
            className="w-full h-full object-contain object-center rounded-md"
          />
        </div>
        <div className="Details Container">
          <div className="productCategory text-md font-semibold opacity-45 pb-2 capitalize text-black">
            {productCategory}
          </div>
          <div className="productTitle text-base font-semibold text-black">
            {truncateTitle(productTitle)}
          </div>
          <div className="price font-bold py-2 text-black">${productPrice}</div>
          <div className="buttons flex gap-4">
            <button className="text-sm flex items-center gap-2 bg-red-400 py-3 w-1/2 justify-center rounded-sm text-white">
              <BsCart3 />
              ADD TO CART
            </button>
            <button className="text-sm flex items-center justify-center gap-2 bg-indigo-500 py-3 w-1/2 rounded-sm text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
