
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from './Components/layout'
import Home from './Components/User/Home/Home';
import ContactUs from './Components/User/ContactUs/ContactUs';
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
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
        
        <meta property="og:url" content="https://stylemeup.ae/" />
        <meta property="og:type" content="website" />
        {/* Add Twitter Card meta tags */}
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contactUs" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
