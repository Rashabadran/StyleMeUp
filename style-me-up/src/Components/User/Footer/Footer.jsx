import "./Footer.css";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import whatsapp from "./images/whatsapp.png";
import { useLocation } from "react-router-dom";
function Footer(){
const location = useLocation();
    return (
      <div className="footerAll">
        <div className="grid-container">
          <div className="grid-item">
            <div className="footerLeft">
              <p className="footerTitles">SOCIAL MEDIA LINKS</p>
              <div className="imagesFooter">
                <a href="https://www.facebook.com/profile.php?id=100078746231380">
                  <img className="imagesPart" src={facebook} alt="facebook" />
                </a>
                <img className="imagesPart" src={instagram} alt="instagram" />
                <a href="https://wa.me/971527943415" >
                  <img className="imagesPart" src={whatsapp} alt="whatsapp" />
                </a>
              </div>
              <p className="dontforget">Don't Forget To Follow Us!</p>
            </div>
          </div>
          <div className="grid-item">
            <div className="footerMiddle">
              <p className="footerTitles">SITEMAP</p>
              <p className="footerPar">
                <a href="/" className={location.pathname}>
                  <p>Home</p>
                </a>
                <a href="/#servicess" className={location.pathname}>
                  <p>Our Services</p>
                </a>
                <a href="/#aboutUs" className={location.pathname}>
                  <p>About Us</p>
                </a>
                <a href="/contactUs" className={location.pathname}>
                  <p>Contact Us</p>
                </a>
                <a href="/#servicess" className={location.pathname}>
                  <p>Book Your Appointment</p>
                </a>
              </p>
            </div>
          </div>
          <div className="grid-item">
            <div className="footerRight">
              <p className="footerTitles">LOCATION</p>
              <p className="footerLocation">Dubai - United Arab Emirates </p>
            </div>
          </div>
        </div>
        <p className="copyRight">
          Copyright © 2023 Style Me Up All Rights Reserved || Rasha Badran
        </p>
      </div>
    );
}
export default Footer;