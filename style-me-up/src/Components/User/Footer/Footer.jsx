import "./Footer.css";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import whatsapp from "./images/whatsapp.png";
import mail from "./images/mail.png"
import { useLocation } from "react-router-dom";
function Footer(){
const location = useLocation();
 const emailAddress = "info@stylemeup.ae";
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
                <a href="https://instagram.com/stylemeup_beautysalon?igshid=OGQ5ZDc2ODk2ZA==">
                  <img className="imagesPart" src={instagram} alt="instagram" />
                </a>
                <a href="https://wa.me/971527943415">
                  <img className="imagesPart" src={whatsapp} alt="whatsapp" />
                </a>
                <a href={`mailto:${emailAddress}`}>
                  <img className="imagesPart" src={mail} alt="mail" />
                </a>

                <div className="emailContact">
                 
                  <h3 classname="aColor">
                    <a href={`mailto:${emailAddress}`}>
                      info@stylemeup.ae
                    </a>
                  </h3>
                </div>
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
                  <p>Location</p>
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
              <a href="/contactUs" className={location.pathname}>
                <p className="footerLocation">Dubai - United Arab Emirates </p>
                <h3>Occidental Al Jaddaf Hotel</h3>
              </a>
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