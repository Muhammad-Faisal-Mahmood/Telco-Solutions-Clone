import Header from "../Header";
import Footer from "../Footer";
import WhyPeopleChooseUs from "../WhyPeopleChooseUs";
import ServiceSection from "../ServiceSection";
import HeroSection from "./HeroSection";
import PartnerSection from "./PartnerSection";
import YouTubeEmbed from "../YouTubeEmbed";
import Testimonial from "./Testimonial/index";

function index() {
  return (
    <>
      <Header />
      <HeroSection />
      <PartnerSection />
      <YouTubeEmbed title={"Video"} videoId={"RbwEcwf1ZX0"} />
      <Testimonial />
      <WhyPeopleChooseUs />
      <ServiceSection />
      <Footer />
    </>
  );
}

export default index;
