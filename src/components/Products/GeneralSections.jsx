/* eslint-disable */

import Footer from "../Footer";
import Header from "../Header";
import ProductsRange from "../ProductsRange";
import ServiceSection from "../ServiceSection";
import WhyPeopleChooseUs from "../WhyPeopleChooseUs";

function GeneralSections({ SpecificJSX, HeroSection }) {
  return (
    <>
      <Header />
      <div>{HeroSection}</div>
      <div className="flex flex-col md:flex-row px-40">
        {/* Left Div */}
        <div className="w-full md:w-7/12">{SpecificJSX}</div>
        {/* Right Div (Form) */}
        <div className="md:w-5/12">
          <ProductsRange />
        </div>
      </div>
      <WhyPeopleChooseUs />
      <ServiceSection />
      <Footer />
    </>
  );
}

export default GeneralSections;
