import React from "react";
import Header from "../../Header";
import HeroSection from "./HeroSection";
import WhyPeopleChooseUs from "../../WhyPeopleChooseUs";
import ServiceSection from "../../ServiceSection";
import Footer from "../../Footer";
import CarriersSection from "./CarriersSection";

const index = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CarriersSection/>
      <WhyPeopleChooseUs />
      <ServiceSection/>
      <Footer/>
    </>
  );
};

export default index;
