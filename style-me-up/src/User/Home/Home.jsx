import React, { useState, useEffect, useRef,Component } from "react";
import "./Home.css";
import { Link, useParams } from "react-router-dom";
import heroImage from "./images/sTYLE.png"
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png"
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Home(){
    
    const carouselRef = useRef(null);

    const moveLeft = () => {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    };

    const moveRight = () => {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };
return (
  <>
    <div className="homePart">
      <img className="heroImage" src={heroImage} alt="heroImage" />
    </div>
    <div className="carousel-container">
      <div className="carousel-track" ref={carouselRef}>
        <img src={pic1} alt="Image 1" />
        <img src={pic2} alt="Image 2" />
        <img src={pic3} alt="Image 3" />
        <img src={pic1} alt="Image 1" />
        <img src={pic2} alt="Image 2" />
        <img src={pic3} alt="Image 3" />
      </div>
      <button className="carousel-button left" onClick={moveLeft}>
        &lt;
      </button>
      <button className="carousel-button right" onClick={moveRight}>
        &gt;
      </button>
    </div>
  </>
);
}
export default Home;