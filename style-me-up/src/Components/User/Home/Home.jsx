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
          name="description"
          content="beauty salon, hair styling, wigs, makeup, nails, beauty salon in United Emirates, beauty supply"
        />
        <meta
          name="keywords"
          content="beauty salon, hair styling, wigs, makeup, nails, beauty salon in United Emirates, beauty supply, beauty salon near me, beauty plus, best beauty salon, best beauty salon in United Emirates, best salon in UAE
          beauty salons near me , ulta beauty salon, sallys beauty salon, indian beauty salon near me, walmart beauty salon, grace beauty salon , arc beauty salon , hidden beauty salon , glamour beauty salon , beauty salon near me
           , bliss beauty salon , beauty salon and spa , beauty salon at AlJaddaf,  beauty salon near Khalife Tower , beauty salon and barber shop , beauty salon and spa near me , beauty salon around me , beauty salon anaheim , 
           beauty salon afghanistan , beauty salon appointment book , beauty salon astoria , beauty salon aprons , angel beauty salon , aura beauty salon , allure beauty salon , aurora beauty salon , amisha beauty salon , 
           aisha beauty salon , aaina beauty salon , aphrodite beauty salon , ahrittaum beauty salon , beauty salon brooklyn , beauty salon business plan , beauty salon business card , beauty salon black hair , beauty salon bronx ny , 
           beauty salon background , beauty salon braids near me ,blush beauty salon , bella beauty salon , beyond beauty salon , blossom beauty salon , best beauty salon near me , bombshell beauty salon , bloom beauty salon , bollywood beauty salon , 
           bombay beauty salon , beauty salon chair , beauty salon close to me , beauty salon cast , beauty salon clipart , beauty salon chair for sale , beauty salon chicago , beauty salon cart , beauty salon cabinets , beauty salon cafe , beauty salon capes ,
            chic beauty salon , coco beauty salon , charm beauty salon , crystal beauty salon , creative beauty salon , classic beauty salon , cloud nine beauty salon , cleopatra beauty salon , carmen beauty salon, charisma beauty salon , beauty salon design , 
            beauty salon dallas , beauty salon decor , beauty salon definition , beauty salon downtown , beauty salon dekalb , beauty salon description , beauty salon dominican , beauty salon design ideas , beauty salon doral , divine beauty salon , dominican beauty salon , diva beauty salon , diamond beauty salon ,dominican beauty salon near me , deep beauty salon , diana beauty salon , dream beauty salon, deluxe beauty salon , dot beauty salon , beauty salon equipment , beauty salon equipment near me , beauty salon equipment for sale , beauty salon elizabeth nj , beauty salon edison nj , beauty salon equipment wholesale , beauty salon eyebrows , beauty salon el monte , beauty salon el paso , beauty salon eagle pass , elegance beauty salon , envy beauty salon enhance beauty salon
            best beauty salon in dubai , list of beauty salon in dubai , top 10 beauty salon in dubai , how to open beauty salon in dubai , revival beauty salon in dubai , iranian beauty salon in dubai , rent beauty salon in dubai , cost of opening a beauty salon in dubai 
            , korean beauty salon in dubai , buy beauty salon in dubai , beauty salon in dubai airport , hair salon in dubai airport , beauty salon at dubai mall , hair salon at dubai mall , open a beauty salon in dubai , rent a beauty salon in dubai , beauty salon names in dubai ,
             famous beauty salon in dubai , opening a salon in dubai , beauty salon in al nahda dubai , beauty salon in al qusais dubai , beauty salon in al karama dubai , beauty salon in al rigga dubai , how to open a beauty salon in dubai , cost of opening a salon in dubai ,
              beauty salon in bur dubai  ladies beauty salon in bur dubai , hair salon dubai best , best hair salon in bur dubai , is salon business profitable in duba , best ladies beauty salon in dubai , best beauty salon in dubai mall , beauty salon business in dubai ,
               best beauty salon in bur dubai , beauty salon in dubai sports city , beauty salon dubai creek harbour , hair salon dubai cheap , beauty salon courses in dubai , hair salon in international city dubai , glamour beauty salon dubai city walk , indian beauty salon in international city dubai ,
                salon courses in dubai , beauty salon in sports city dubai , beauty salon in dubai healthcare city , beauty salon in motor city dubai , beauty salon in green community dubai , beauty salon in dubai internet city , beauty salon in festival city dubai , beauty care salon in dubai ,
                 beauty salon for sale in dubai dubizzle , salon license cost in dubai , dubizzle beauty salon for sale in dubai , ladies beauty salon in deira dubai , beauty salon in dubai design district , beauty salon in downtown dubai , beauty salon equipment suppliers in dubai ,
                  wholesale beauty salon equipment in dubai , used beauty salon equipment for sale in mumbai , beauty salon in dubai for sale , beauty parlour in dubai for ladies , hair salon in dubai festival city , hair salon in dubai for ladies , beauty salon dubai festival city mall ,
                   beauty salon dubai for rent , best hair salon in dubai for keratin treatment , best hair salon in dubai for balayage , beauty salon furniture dubai , beauty salon franchise dubai , beauty salon for sale in dubai , beauty salon for rent in dubai , beauty salon for sale in dubai marina ,
                    beauty salon franchise in dubai , how to get license for beauty salon in dubai , jobs for beauty salon in dubai , beauty salon in garhoud dubai , beauty salon in dubai hills mall , beauty salon in dubai hills , hair salon in dubai hotel , beauty salon dubai home , beauty salon dubai hiring jobs ,
                     beauty salon henna dubai , halo beauty salon in dubai , hair salon in grand hyatt dubai , hair salon in kempinski hotel dubai , how to start beauty salon in dubai , beauty salon in dubai investment park , hair salon dubai international airport , hair salon dubai instagram ,
                      indian beauty salon in dubai , jobs in beauty salon in dubai , beauty salon in jbr dubai , beauty salon in jvc dubai , beauty salon in jlt dubai , beauty salon dubai jumeirah , hair salons in jlt dubai , beauty salon jobs dubai , hair salon dubai jbr , hair salon dubai jumeirah , 
                      beauty lounge dubai jlt , men's hair salon in jlt dubai , beauty salon manager jobs in dubai , beauty salon in karama dubai , beauty parlour in karama dubai , beauty parlor in karama dubai , best hair salon in karama dubai , ladies beauty salon dubai karama , beauty salon in dubai land ,
                       beauty salon license in dubai , luxury beauty salon in dubai , beauty salon price list dubai , ladies beauty salon for sale in dubai , beauty salon in dubai mall ,bbeauty salon in dubai marina , hair salon in dubai mall , beauty shops in dubai mall , hair salon in dubai marina , beauty parlour in dubai mall ,
                        beauty parlor in dubai mall , mounir beauty salon in dubai , men's beauty salon in dubai , best hair salon in dubai near me , beauty salon near dubai silicon oasis , beauty salon near dubai marina , beauty salon near dubai , beauty salon near dubai sports city , beauty salon near dubai mall ,
                         hair salon dubai near me , hair salon near dubai marina , beauty salon in dubai silicon oasis , beauty salon dubai oasis , beauty salons dubai opening , hair salon in dubai silicon oasis , beauty salon offers dubai , hair salon offers dubai , open beauty salon in dubai , operations of a beauty salon , beauty salon dubai price list , hair salon dubai price list , hair salon dubai palm , ashtamudi beauty salon dubai photos , angel beauty salon dubai photos , tiffany beauty salon dubai photos , indulgence beauty salon dubai photos , yuna beauty salon dubai photos , streaks beauty salon dubai photos , blush beauty salon dubai photos , price beauty salon in dubai , revival beauty salon in dubai photos , beauty salon in dubai al rigga , beauty salon rent dubai , russian beauty salon in dubai , ashtamudi beauty salon dubai reviews , yuna beauty salon dubai reviews , zulya beauty salon dubai reviews , ashtamudi beauty salon dubai reviews price , angelica’s beauty salon dubai reviews , beauty salon in dubai south , beauty salon in satwa dubai , beauty salon dubai sheikh zayed road , best hair salon in dubai silicon oasis , beauty salon supplies dubai , hair salon dubai south , sasha beauty salon in dubai , hair salon in tecom dubai , top beauty salon in dubai , the best beauty salon in dubai , beauty salon to buy in dubai , beauty salon in the springs dubai , ashtamudi beauty salon dubai updates , beauty salon vacancies in dubai , beauty salon dubai wafi mall , hair salon dubai wafi mall , woman beauty salon in dubai , hair salon in city walk dubai , work in dubai beauty salon , x beauty miami , x beauty by hanna , x beauty by hanna miami , x beauty supply , dubai salon and skin care , hair salon in dubai , beauty salon jobs in dubai , dubai salon , z beauty salon in coppell , z beauty salon , beauty salon dubai mall , beauty salon in dunellen nj , beauty salon dubai marina , best hair salon in dubai 2022 , best hair salon in dubai 2023 , beauty salons in al nahda 2 dubai , 2 beauty salon , 2 beauty hair salon , 2 beauty , 3 beauty salon , 4 beauty salon , 4 beauty med spa , 4 beauty aesthetic institute , 5 beauty , beauty standards in dubai , beauty standard in dubai , dubai salon mcallen , 7 beauty salon , 7 beauty supply , 7 days beauty salon , 7 beauty mart , dubai salon mcallen tx"
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

        <meta property="og:title" content="Your Beauty Salon - Style Me Up" />
        <meta
          property="og:description"
          content="Unlock your beauty's true potential at Style Me Up salon. Experience the transformative touch of our expert stylists. Book an appointment now!"
        />

        <meta property="og:url" content="https://stylemeup.ae/" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Beauty Salon - Style Me Up" />
        <meta
          name="twitter:description"
          content="Unlock your beauty's true potential at Style Me Up salon. Experience the transformative touch of our expert stylists. Book an appointment now!"
        />

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
        
        "address": {
          
          "streetAddress": "AlJaddaf street",
          "addressLocality": "Dubai",
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
