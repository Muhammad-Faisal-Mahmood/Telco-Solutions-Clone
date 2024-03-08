import GeneralSections from "../GeneralSections";
import HeroSection from "../HeroSection";
import Paragraph from "../Paragraph";
function index() {
  const SpecificHeroSection = (
    <HeroSection
      bgImage={
        "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9ff05c4fd32d64ef947ab2_DataCentre-min.jpg"
      }
      logoImage={
        "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b75d9fd8166bab8a0372498_icns_data.svg"
      }
      heading={"Data Center Hosting Services"}
      paragraph={
        "Data centers are crucial to conducting business in the 21st century. All of our companies’ data, information systems and digital knowledge are stored in data centers. Data center hosting provides infrastructure for business to happen over the internet."
      }
    />
  );
  const SpecificJSX = (
    <div>
      <div className="pt-12 px-8">
        <Paragraph
          text={
            "Today, modern businesses generate more data than ever before. Billions of bytes of data flow from businesses each day, and it is essential to keep that data safe and accessible. Data centers offer businesses across the globe various options for securely storing their important information."
          }
        />
        <Paragraph
          text={
            "A data center is a physical location that businesses and enterprises can use to store their critical data and information. Data centers have shifted away from being primarily located on business premises and toward a cloud-based infrastructure. The cloud-based data centers provide flexibility, cost savings and empower remote work. Business can also hedge against unforeseen events by storing data away from business grounds. These virtualized data center solutions provide an improved level of efficiency and security for a wide range of data storage needs."
          }
        />
        <Paragraph
          text={
            "TelcoSolutions provides secure and scalable products for a wide range of physical network requirements. Our nationwide data center hosting offerings include:"
          }
        />
      </div>

      <ul className="list-disc pl-24 pb-8">
        <li className="font-semibold py-1 text-gray-800">
          Advanced internet support.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Colocation support.
        </li>
        <li className="font-semibold py-1 text-gray-800">Disaster recovery.</li>
        <li className="font-semibold py-1 text-gray-800">
          Managed server support.
        </li>
      </ul>

      <div className="px-8">
        <Paragraph
          text={
            "In the 21st century businesses record and store massive amounts of data, and it’s crucial in decision making and for the future of companies to have it secure and accessible. Data is the most important asset businesses have and securing, protecting and accessing that data is what businesses need from their data center hosting. TelcoSolutions works with companies to find the data center that can provide the service, bandwidth, electrical and spatial options they need."
          }
        />

        <Paragraph
          text={
            "Our turn-key solutions can fit your data center hosting and physical colocation needs to allow your businesses to focus on growth and know that your data is safe and accessible. . Plus, most of our data centers offer around-the-clock support personnel ready to address any emergencies. Likewise, we work with multiple data centers, allowing your business to have geo-redundancy."
          }
        />

        <Paragraph
          text={
            "Ready to modernize your enterprise with new data center services? Contact TelcoSolutions and request a quote today!"
          }
        />
      </div>
    </div>
  );

  return (
    <>
      <GeneralSections
        SpecificJSX={SpecificJSX}
        HeroSection={SpecificHeroSection}
      />
    </>
  );
}

export default index;
