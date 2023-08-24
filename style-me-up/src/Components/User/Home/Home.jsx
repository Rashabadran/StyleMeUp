import {React,useState} from "react";
import "./Home.css";
import { Helmet } from "react-helmet";
import rightt from "./images/rightt.png"
import leftt from "./images/leftt.png"
import line2 from "./images/line2.png"
import heroIm from "./images/heroIm.png";
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import line from "./images/line.png"
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

    // const closeFormPopup = () => {
    //   setShowForm(false);
    // };

   
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
      <Helmet>
        <meta charset="utf-8"></meta>
        <meta http-equiv="Content-Language" content="en"></meta>
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0, width=device-width"
        ></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>

        <title>Style Me Up</title>
        <meta
          name="Style Me Up"
          content="beauty salon, hair styling, wigs, makeup, nails, beauty salon in United Emirates, beauty supply, beauty salon near me, beauty plus, best beauty salon, best beauty salon in United Emirates, best salon in UAE"
        />
        <meta
          name="keywords"
          content="beauty salon, hair styling, wigs, makeup, nails, beauty salon in United Emirates, beauty supply, beauty salon near me, beauty plus, best beauty salon, best beauty salon in United Emirates, best salon in UAE"
        />
        <link rel="manifest" href="/manifest/lbmanifest.json"></link>
        <link
          rel="shortcut icon"
          href="https://stylemeup.ae/"
          type="image/png"
          sizes="96x96"
        ></link>
        <meta name="msapplication-config" content="none"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <link rel="preconnect" href="https://ajax.googleapis.com"></link>
        <link rel="preconnect" href="https://maxcdn.bootstrapcdn.com"></link>
        <link
          rel="preconnect"
          href="https://googleads.g.doubleclick.net"
        ></link>

        <link rel="canonical" href="https://stylemeup.ae/" />
        <meta name="robots" content="index, follow" />
        {/* Add Open Graph meta tags */}
        <meta property="og:title" content="Your Beauty Salon - Style Me Up" />
        <meta
          property="og:description"
          content="Unlock your beauty's true potential at Style Me Up salon. Experience the transformative touch of our expert stylists. Book an appointment now!"
        />
        <meta property="og:image" content={heroIm} />
        <meta property="og:url" content="https://stylemeup.ae/" />
        <meta property="og:type" content="website" />
        {/* Add Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Beauty Salon - Style Me Up" />
        <meta
          name="twitter:description"
          content="Unlock your beauty's true potential at Style Me Up salon. Experience the transformative touch of our expert stylists. Book an appointment now!"
        />
        <meta name="twitter:image" content={heroIm} />
        <script type="application/ld+json">
          {`
      {
        "@context": "http://schema.org",
        "@type": "BeautySalon",
        "name": "Style Me Up",
        "description": "Unlock Your Beauty's True Potential at Style Me Up Salon. Experience the Transformative Touch of Our Expert Stylists. Indulge in Top-Notch
         Haircuts, Styling, Wigs, Hair Extensions, Nail Art, Makeup, and More. Book Your Appointment Now and Let Us Pamper You to Radiate Confidence and Elegance 
         Like Never Before. Discover the Latest Trends, Luxury Treatments, and Personalized Services. Join us at Style Me Up - Where Beauty Meets Elegance.
         Feel free to customize this description to accurately reflect the unique features, services, and atmosphere of your salon. Include relevant keywords 
         that potential customers might search for, and ensure that the description provides a clear and compelling overview of what your salon has to offer.",
        "image": "${heroIm}",
        "address": {
          
          "streetAddress": "Your Street Address",
          "addressLocality": "Your City",
          "addressRegion": "United Emirates",
          "addressCountry": " United Arab Emirates (UAE)"
        },
        "telephone": "+971 527943415",
        "openingHours": "From 8:00 a.m till 10:00 p.m",
        "openingHours": "From 8:00 till 22:00",
        "url": "https://stylemeup.ae"
        
      }
    `}
        </script>
        <script
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v12.02"
          async=""
          defer=""
        ></script>
        <script async src="https://www.instagram.com/embed.js"></script>
        <script
          src="https://www.google.com/adsense/search/async-ads.js"
          nonce="MK2FWOFYsAMP7kvNDFwNDw"
        ></script>
      </Helmet>

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
