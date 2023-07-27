import "./Footer.css";
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.png"
import whatsapp from "./images/whatsapp.png"
function Footer(){

    return (
      <div className="footerAll">
        <div className="grid-container">
          <div className="grid-item">
            <div className="footerLeft">
              <p className="footerTitles">SOCIAL MEDIA LINKS</p>
              <div className="imagesFooter">
                <img className="imagesPart" src={facebook} alt="facebook" />
                <img className="imagesPart" src={instagram} alt="instagram" />
                <img className="imagesPart" src={whatsapp} alt="whatsapp" />
              </div>
              <p className="dontforget">Don't Forget To Follow Us!</p>
            </div>
          </div>
          <div className="grid-item">
            <div className="footerMiddle">
              <p className="footerTitles">SITEMAP</p>
              <p className="footerPar">
                <p>Home</p>
                <p>Our Services</p>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Book Your Appointment</p>
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