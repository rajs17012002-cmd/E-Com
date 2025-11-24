import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'

const About = () => {
  return (
    <div>
      <Header />
      <div className="bg-yellow-50">
        <div className=" ">
          <h1 className="flex justify-center text-3xl font-bold ">ABOUT US</h1>
          <p className="V ml-5">
            Welcome to Westside, where innovation meets simplicity. We are
            dedicated to creating meaningful digital experiences that inspire,
            connect, and empower people. Our goal is to deliver high-quality
            products and services that bring real value to our users.
          </p>
        </div>
        <div className="m-5 ">
          <h3 className="flex justify-center text-2xl font-bold">
            Who We Are!
          </h3>
          <p className="V ml-5">
            We’re a passionate team of developers, designers, and creators who
            believe that great ideas deserve to be beautifully built. Our
            journey started with a simple vision — to make technology more
            human, intuitive, and accessible for everyone.
          </p>
          <h3 className="flex justify-center text-2xl font-bold">
            Our Mission!
          </h3>
          <p className="V ml-5">
            To design and develop creative, user-friendly, and impactful web
            solutions that help businesses and individuals grow in the digital
            world.To become a trusted brand known for innovation, quality, and
            customer satisfaction — shaping the future of digital experiences.
          </p>

          <h3 className="flex justify-center text-2xl font-bold">
            Why Choose Us!
          </h3>
          <p className="V ml-5">
            Our designs are crafted with care and attention to detail, ensuring
            you always get the best quality and latest trends. Our executives
            work with full dedication to provide you with a smooth and
            satisfying shopping experience every time you visit us. Our store is
            conveniently located in the main area of the city, making it easy
            and comfortable for you to reach us anytime. We believe in offering
            not just products, but an experience — one filled with style,
            comfort, and trust. Every item in our store is thoughtfully selected
            to meet your expectations and enhance your lifestyle. At our store,
            customer satisfaction comes first. Whether you’re shopping for
            something casual, festive, or formal, we’ve got something special
            for everyone. Visit us today and explore a world of fashion,
            quality, and care — all under one roof!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About