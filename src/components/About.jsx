import React from 'react'

function About() {
  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center text-6xl font-serif font-semibold text-purple-600">Welcome to ReactStore! </h1>
        <br />
        <br />
        <hr/>
        <h1 className="text-center font-bold text-4xl text-lime-600">About Us</h1>
        <hr />
        <br />
        <p className="leading-4 text-center ml-60 mr-60">
            At ReactStore, we are passionate about
          providing high-quality products that meet your everyday needs. Our
          journey began with a simple idea: to create a seamless shopping
          experience that combines the best of technology and customer service.
        </p>
      </div>
      <br />
      <br />
      <hr />
      <h1 className="text-center font-bold text-4xl text-lime-600">Our Mission</h1>
      <hr />
      <br />
      <p className="leading-4 text-center ml-60 mr-60">
        Our mission is to offer a diverse range of products that cater to
        various tastes and preferences, all while ensuring an easy and enjoyable
        shopping experience. We strive to bring you the latest trends, reliable
        essentials, and unique items that make life more convenient and
        enjoyable.
      </p>
      +
      <br />
      <h3 className="text-center text-4xl text-blue-700 font-serif font-extralight">
        Thank you for choosing ReactStore. We look forward to serving you!
      </h3>
      <br />
      <br />

    <div className='w-full flex'>
      <div className='w-1/2'>
        
      </div>
      <div className="flex-1"></div>
    </div>
    </>
  )
}

export default About