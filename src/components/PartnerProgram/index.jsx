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
      <div className=" w-full lg:w-1/2  xl:w-3/4 mt-10 pl-10 pr-5  lg:px-0 lg:pl-10 xl:px-36">
        <YouTubeEmbed title={"Video"} videoId={"RbwEcwf1ZX0"} />
      </div>

      <Testimonial />
      <WhyPeopleChooseUs />
      <ServiceSection />
      <Footer />
    </>
  );
}

export default index;
