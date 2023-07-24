import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { Link, useParams } from "react-router-dom";
import heroImage from "./images/sTYLE.png"
function Home(){
return (
  <>
    <div className="homePart">
      <img className="heroImage" src={heroImage} alt="heroImage" />
    </div>
  </>
);
}
export default Home;