import React from "react";
import Header from "../../Header";
import HeroSection from "./HeroSection";
import WhyPeopleChooseUs from "../../WhyPeopleChooseUs";
import ServiceSection from "../../ServiceSection";
import Footer from "../../Footer";
import ContentSection from "./ContentSection";

const index = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ContentSection/>
      <WhyPeopleChooseUs />
      <ServiceSection/>
      <Footer/>
    </>
  );
};

export default index;
