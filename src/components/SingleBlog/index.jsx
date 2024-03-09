import Footer from "../Footer";
import Header from "../Header";
import ServiceSection from "../ServiceSection";
import WhyPeopleChooseUs from "../WhyPeopleChooseUs";
import BlogContent from "./BlogContent";
import HeroSection from "./HeroSection";

function index() {
  return (
    <>
      <Header />
      <HeroSection />
      <BlogContent />
      <WhyPeopleChooseUs />
      <ServiceSection />
      <Footer />
    </>
  );
}

export default index;
