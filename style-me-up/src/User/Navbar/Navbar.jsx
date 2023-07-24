import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "./images/StyleLogo.png"
function Navbar(){
 let navigate = useNavigate();
 const [show, setShow] = useState(false);
 const [nav, setNav] = useState(false);
 const [menu, setMenu] = useState("nav-links");
 const [icon, setIcon] = useState("bx bx-menu");
 const location = useLocation();
 const token = sessionStorage.getItem("token");

 useEffect(() => {
   setShow(false);
   setMenu("nav-links");
   setIcon("bx bx-menu");
 }, [location]);

 const toggle = () => {
   if (!show) {
     setMenu("nav-links open");
     setIcon("bx bx-x");
   } else {
     setMenu("nav-links");
     setIcon("bx bx-menu");
   }
   setShow(!show);
 };

 function navbar() {
   if (window.scrollY >= 851) {
     setNav(true);
   } else {
     setNav(false);
   }
 }


 

 window.addEventListener("scroll", navbar);

 return (
   <header className={nav ? "not" : "sticky-header"}>
     <a href="/" className="logo">
       <img src={logo} alt="StyleMeUp logo" className="header-logo" />
     </a>
     <ul className={menu}>
       <div className="navDesign">
         <li className={nav ? "maintain" : "normal"}>
           {/* <a href="/" className={location.pathname === "/" ? "active" : ""}> */}
           Home
           {/* </a> */}
         </li>
         <li className={nav ? "maintain" : "normal"}>
           {/* <a
           href="/balloons"
           className={location.pathname === "/balloons" ? "active" : ""}
         > */}
           Our Services
           {/* </a> */}
         </li>
         <li className={nav ? "maintain" : "normal"}>
           Contact Us
           {/* </a> */}
         </li>
         <li className={nav ? "maintain" : "normal"}>
           {/* <a
           href="/contactus"
           className={location.pathname === "/contactus" ? "active" : ""}
         > */}
           About Us
           {/* </a> */}
         </li>
         <li className={nav ? "maintain" : "normal"}>
           {/* <a
           href="/contactus"
           className={location.pathname === "/contactus" ? "active" : ""}
         > */}
           Book Your Appointment
           {/* </a> */}
         </li>
       </div>
     </ul>

     <div className={nav ? "maintain" : "normal"}>
       <div className={icon} id="menu-icon" onClick={toggle}></div>
     </div>
   </header>
 );
}
export default Navbar;