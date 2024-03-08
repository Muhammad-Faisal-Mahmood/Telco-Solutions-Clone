import Header from "../Header";
import HeroSection from "./HeroSection";
import Footer from "../Footer";
import WhyPeopleChooseUs from "../WhyPeopleChooseUs";
import ServiceSection from "../ServiceSection";
import BlogsSection from "./BlogsSection";

const index = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <BlogsSection />
      <WhyPeopleChooseUs />
      <ServiceSection />
      <Footer />
    </>
  );
};

export default index;
