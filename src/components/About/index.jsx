import HeroSection from "./HeroSection";
import Header from "../Header";
import Footer from "../Footer";
import ServiceSection from "../ServiceSection";
import WhyPeopleChooseUs from "../WhyPeopleChooseUs";
import ContentSection from "./ContentSection";

const index = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ContentSection />
      <WhyPeopleChooseUs />
      <ServiceSection />
      <Footer />
    </>
  );
};

export default index;
