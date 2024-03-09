import Header from "../Header";
import HeroSection from "./HeroSection";
import Footer from "../Footer";
import ServiceSection from "../ServiceSection";
import WhyPeopleChooseUs from "../WhyPeopleChooseUs";
import GetInTouchWithUs from "./GetInTouchWithUs";

const index = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <GetInTouchWithUs />
      <WhyPeopleChooseUs />
      <ServiceSection />
      <Footer />
    </>
  );
};

export default index;
