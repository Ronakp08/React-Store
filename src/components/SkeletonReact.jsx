import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonReact() {
  return (
    <div className="container h-auto w-[150px] rounded bg-[#1a1a1a] p-3 md:w-[300px] md:p-5">
      <div className="image h-20 rounded overflow-hidden p-1 md:h-48">
        <Skeleton baseColor="#151515" highlightColor="#353535"  height={80}/>
      </div>
      <div className="category py-2">
      <Skeleton baseColor="#151515" highlightColor="#353535" />
      </div>
      <h1 className="font-semibold ">        <Skeleton baseColor="#151515" highlightColor="#353535" />
</h1>
      <p>
        <Skeleton baseColor="#151515" highlightColor="#353535" />
      </p>
      <div className="buttons pt-2">
        <div className="w-full text-center py-1 uppercase text-sm rounded">
          <Skeleton baseColor="#151515" highlightColor="#353535" />
        </div>
        <div className="w-full text-center py-1 uppercase text-sm rounded mt-2">
          <Skeleton baseColor="#151515" highlightColor="#353535" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonReact;
