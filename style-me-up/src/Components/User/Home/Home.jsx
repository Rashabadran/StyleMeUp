import {React,useState} from "react";
import "./Home.css";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import rightt from "./images/rightt.png"
import leftt from "./images/leftt.png"
import line2 from "./images/line2.png"
import heroIm from "./images/heroIm.png";
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import nailss from "./images/nailss.png"
import line from "./images/line.png"
import omar from "./images/omarPic.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import videoo from "./images/videoo.mp4";
import {Parallax} from "react-parallax";
import Typewriter from "typewriter-effect";
import wigs from "./images/WigsandHair.jpg";
import meni from "./images/meni.png"
import Reservation from "../Reservation/Reservation";
function Home() {
  /*Form*/
   const [showForm, setShowForm] = useState(false);

    const openFormPopup = () => {
      setShowForm(true);
    };

    const closeFormPopup = () => {
      setShowForm(false);
    };

   
  /*Carousel*/
  const scroll = () => {
    var left = document.querySelector(".scroll-devs");
    left.scrollBy(280, 0);
  };

  const scrollr = () => {
    var right = document.querySelector(".scroll-devs");
    right.scrollBy(-280, 0);
  };


  /*TypeWriter*/
   const [typewriterDone, setTypewriterDone] = useState(false);
   const [typewriterDone2, setTypewriterDone2] = useState(false);
  const text =
    "Unlock your beauty's true potential at our salon. Experience the transformative touch of our expert stylists, indulging you in top-notch treatments. Book your appointment now and let us pamper you to radiate confidence and elegance like never before.";

   const handleTypewriterComplete = () => {
     setTypewriterDone(true);
     setTypewriterDone2(true);
   };

  const texts =
    "Welcome to Style Me Up, where beauty is redefined. Step into our world of elegance and sophistication. Our expert team is dedicated to crafting your perfect look, from head to toe. Discover the latest trends, pamper yourself with luxurious treatments, and leave feeling confident and fabulous. At Style Me Up, we embrace individuality and empower you to shine. Join us for a transformative experience that celebrates your unique style. Indulge in the art of beauty at Style Me Up. Unleash your inner glamour and let us elevate your charm to new heights. Your journey to a more stylish you begins here.";


     

  return (
    <>
      {/*HeroImage*/}
      <div className="homePart">
        <Parallax
          strength={300}
          bgImage={heroIm}
          bgImageAlt="Hero Image"
          className="heroImage"
        />

        {/* Title of Carousel */}

        <p className="titleServices" id="servicess">
          Our Services
        </p>
        <img className="line" src={line} alt="line" />

        <div className="scroll-collection">
          <div className="parent-arrow">
            <button className="leftarrow" onClick={() => scrollr()}>
              <img className="arrows-heights" src={leftt} alt="left arrow" />
            </button>
          </div>

          {/* Carousel */}
          <div className="cover">
            <div className="scroll-devs">
              <div className="services1">
                <img
                  className="child-image1"
                  src={pic1}
                  alt="Haircut and Styling"
                />
                <p className="paragraphofServices">Haircut and Styling</p>

                <button
                  className="booking"
                  onClick={() => {
                    localStorage.setItem(
                      "selectedService",
                      "Haircut and Styling"
                    );
                    openFormPopup();
                  }}
                >
                  Book Now
                </button>
              </div>

              <div className="services">
                <img
                  className="child-image2"
                  src={wigs}
                  alt="Wigs and Hair Extension"
                />
                <p className="paragraphofServices">Wigs and Hair Extension</p>

                <button
                  className="booking"
                  onClick={() => {
                    localStorage.setItem(
                      "selectedService",
                      "Wigs and Hair Extension"
                    );
                    openFormPopup();
                  }}
                >
                  Book Now
                </button>
              </div>
              <div className="services3">
                <img className="child-image1" src={pic2} alt="Nails" />
                <p className="paragraphofServices">Nails</p>
                <button
                  className="booking"
                  onClick={() => {
                    localStorage.setItem("selectedService", "Nails");
                    openFormPopup();
                  }}
                >
                  Book Now
                </button>
              </div>
              <div className="services4">
                <img className="child-image1" src={pic3} alt="Makeup" />
                <p className="paragraphofServices">Makeup</p>
                <button
                  className="booking"
                  onClick={() => {
                    localStorage.setItem("selectedService", "Makeup");
                    openFormPopup();
                  }}
                >
                  Book Now
                </button>
              </div>
              <div className="services5">
                <img className="child-image1" src={meni} alt=">Meni and Pedi" />
                <p className="paragraphofServices">Meni and Pedi</p>
                <button
                  className="booking"
                  onClick={() => {
                    localStorage.setItem("selectedService", "Meni and Pedi");
                    openFormPopup();
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="parent-arrow">
            <button className="rightarrow" onClick={() => scroll()}>
              <img className="arrows-heights" src={rightt} alt="right arrow" />
            </button>
          </div>
        </div>

        <div className="discover">
          <p className="discoverTitle">Discover Your Radiant Transformation</p>
          <img className="line" src={line2} alt="line" />
          <p className="discoverParagraph">
            {typewriterDone ? (
              <p>{text}</p> // Display the full text without animation after typewriter is done
            ) : (
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  pauseFor: 1180000,
                  delay: 40,
                  strings: [text],
                  onComplete: handleTypewriterComplete,
                }}
              />
            )}
          </p>
        </div>

        <p className="aboutUsTitle" id="aboutUs">
          About Us
        </p>
        <img className="line" src={line} alt="line" />
        <div className="aboutUsSection">
          <div className="aboutUsParagraph">
            {typewriterDone2 ? (
              <p>{texts}</p> // Display the full text without animation after typewriter is done
            ) : (
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  pauseFor: 180000,
                  strings: [texts],
                  onComplete: handleTypewriterComplete,
                }}
              />
            )}
          </div>
          <video controls className="vid">
            <source src={videoo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {showForm && (
          <div className="res-popupRes">
            <div className="res-popup-contentRes">
              <Reservation />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
