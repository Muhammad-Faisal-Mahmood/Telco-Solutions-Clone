import GeneralSections from "../GeneralSections";
import HeroSection from "../HeroSection";
import Paragraph from "../Paragraph";
function index() {
  const SpecificHeroSection = (
    <HeroSection
      bgImage={
        "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9ff05cb2aaf0c0de38c2e3_MPLS-min.jpg"
      }
      logoImage={
        "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b75d9fd8166bad1b1372496_icns_mpls.svg"
      }
      heading={"MPLS Services"}
      paragraph={
        "Multiprotocol Label Switching is the next generation of multi-location, inter-office networking. This scalable data-carrying method helps businesses speed up their networks and manage user traffic and flow."
      }
    />
  );
  const SpecificJSX = (
    <div className="py-12 pr-8">
      <Paragraph
        text={
          "Multiprotocol Label Switching a highly efficient method of multi-location, inter-office networking. By handling and carrying data in this way, a business can manage its network traffic and increase the overall speed of its connectivity in a scalable fashion. MPLS is a technique as opposed to technology, and as such, it can integrate and operate with numerous types of networks. When properly utilized, this technique efficiently routes a business’s or enterprise’s network traffic."
        }
      />
      <Paragraph
        text={
          "MPLS affixes labels to data packets and moves them along provider-configured label-switching paths. These conduits ensure efficient data flow and prevent bottlenecking which can bring important internal networks to a standstill."
        }
      />
      <Paragraph
        text={
          "MPLS utilizes many of the concepts of ATM and frame relay with advantages that allow it to be much more scalable. Some of these advantages include:"
        }
      />

      <ul className="list-disc pl-8 pb-8">
        <li className="font-semibold py-1 text-gray-800">
          Fully-meshed and self-healing network paths that regenerate
          automatically in emergencies.
        </li>
        <li className=" font-semibold py-1 text-gray-800">
          The ability to facilitate multiple types of data connections,
          including DSL and cable, T1, and Ethernet.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Labeling that enables the end-user to prioritize packets and dictate
          that voice takes priority over data.
        </li>
        <li className=" font-semibold py-1 text-gray-800">
          Cloud-based traffic flow and the ability to partition particular
          paths. This helps the data flow more quickly, while also keeping it
          secure.
        </li>
      </ul>

      <Paragraph
        text={
          "TelcoSolutions offers robust MPLS services that can be customized to fit your business needs. Plus, our dedicated staff are always available and ready to resolve any issues should they arise."
        }
      />

      <Paragraph
        text={
          "Today, data dictates business development. So, don’t let your data get stuck in an internal network bottleneck. Utilizing MLPS will streamline your network data pathing and increase speed and efficiency in your network connectivity. To improve your data flow and spur growth in your organization, get in touch with us."
        }
      />

      <Paragraph
        text={
          "Want to invest in an MPLS service for your business? Contact TelcoSolutions and request a quote today!"
        }
      />
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
