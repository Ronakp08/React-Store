import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function Women() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading
  
    useEffect(() => {
      axios
        .get("https://fakestoreapi.com/products/category/women's clothing")
        .then((response) => {
          setProducts(response.data);
          setLoading(false); // Set loading to false when data is fetched
        })      
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); // Set loading to false if there's an error
        });
    }, []);
  return (
    <>
    {loading ? (
        <div className="products flex flex-wrap justify-center mt-10 gap-10 pb-10">
            <Skeleton width={300} height={444}/>
            <Skeleton width={300} height={444}/>
            <Skeleton width={300} height={444}/>
            <Skeleton width={300} height={444}/>
            <Skeleton width={300} height={444}/>
            <Skeleton width={300} height={444}/>
        </div>
        ) : (
        <div className="products flex flex-wrap justify-center pt-10 gap-10 pb-10">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                productImage={product.image}
                productCategory={product.category}
                productTitle={product.title}
                productPrice={product.price}
              />
            );
          })}
        </div>
      )}
    </>
  )
}

export default Women