import React from "react";
import Card from "./Card";
import axios from "axios";
import SkeletonReact from "./SkeletonReact";
import { useEffect, useState } from "react";
function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/Products")
      .then((response) => {
        setProducts(response.data); // Accessing response.data.products
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    isLoading?(
      <div className="flex flex-wrap gap-4 py-4 px-4 justify-center md:px-10 md:gap-8">
        <SkeletonReact/>
        <SkeletonReact/>
        <SkeletonReact/>
        <SkeletonReact/>
        <SkeletonReact/>
        <SkeletonReact/>
        <SkeletonReact/>
        <SkeletonReact/>
        <SkeletonReact/>
        <SkeletonReact/>
        <SkeletonReact/>
      </div>
    ):(
      <div className="flex flex-wrap gap-4 py-4 px-4 justify-center md:px-10 md:gap-8">
      {products.map((product) => (
        <Card
          key={product.id} // Adding a unique key for each card
          image={product.image}
          category={product.category}
          title={product.title} // Truncate title to 20 characters
          price={product.price}
          route={`/products/${product.id}`}
          rating={product.rating.rate}
          count={product.rating.count}
        />
      ))}
    </div>
    )
  );
}

export default Products;
