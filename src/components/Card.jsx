import React from "react";
import { Link } from "react-router-dom";
function Card({ image, category, price, rating, count, title, route }) {
  return (
    <>
      <div className="container h-auto w-[150px] rounded bg-[#1a1a1a] p-3 md:w-[300px] md:p-5">
        <div className="image h-20 bg-[white] rounded overflow-hidden p-1 md:h-48">
         <Link to={route}> <img
            src={image}
            alt="Not Available"
            className="w-full h-full object-contain hover:scale-105 transition-transform ease-linear"
          /></Link>
        </div>
        <div className="category py-2">
          <span className="cat px-2 py-1 opacity-60 rounded-2xl text-xs bg-black capitalize md:text-sm">
            {category}
          </span>
        </div>
        <h1 className="text-xs sm:text-lg capitalize">{title}</h1>
        <p>${price}</p>
        {/* <p>Ratings : {rating}/5 &nbsp; <span>Total Reviews : &nbsp;{count}</span></p> */}
        <div className="buttons pt-2">
          <Link to={route}>
            <button className="w-full text-center py-1 uppercase text-sm bg-[#2734c7d7] rounded">
              Buy Now
            </button>
          </Link>
          <button className="w-full text-center py-1 uppercase text-sm bg-[#5c55557d] rounded mt-2">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
