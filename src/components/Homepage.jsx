import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import LatestBlogPostSection from "./LatestBlogPostSection";
import Footer from "./Footer";
import OurServicesSection from "./OurServicesSection";

const Homepage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <OurServicesSection />
      <ServiceSection />
      <LatestBlogPostSection />
      <Footer />
    </div>
  );
};

export default Homepage;
