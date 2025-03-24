import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Home_Hero from "../Home_Page/Home_Hero";
import Home_About from "../Home_Page/Home_About";
import Home_Finance from "../Home_Page/Home_Finance";
import Home_gateway from "../Home_Page/Home_gateway";
import Home_Services from "../Home_Page/Home_Services";
import Home_Visa from "../Home_Page/Home_Visa";
import Home_Pricing from "../Home_Page/Home_Pricing";
import Home_Proffesionals from "../Home_Page/Home_Proffesionals";
import Home_Faq from "../Home_Page/Home_Faq";
import Home_News from "../Home_Page/Home_News";

const HomePage = () => {
  return (
    <div className="bg" style={{backgroundColor:'black'}}>
      <Header />
      <Home_Hero />
      <Home_About />
      <Home_Finance />
      <Home_gateway />
      <Home_Services />
      <Home_Visa />
      <Home_Pricing />
      <Home_Proffesionals />
      <Home_Faq />
      <Home_News />
      <Footer />
    </div>
  );
};

export default HomePage;
