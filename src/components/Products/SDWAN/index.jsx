import GeneralSections from "../GeneralSections";
import HeroSection from "../HeroSection";
import Paragraph from "../Paragraph";
function index() {
  const SpecificHeroSection = (
    <HeroSection
      bgImage={
        "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9ff05c9819e87a88fd0d05_SDWAN-min.jpg"
      }
      logoImage={
        "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b76fd94a911bda5a56eb717_SDWAN.svg"
      }
      heading={"SD-WAN Solutions"}
      paragraph={
        "SD-WAN (Software-Defined - Wide Area Network) is a revolutionary new solution that small and large businesses can now take advantage of for multi-location environments as well as single location businesses. With this technology, even small and medium businesses can easily manage their network with efficiency and speed."
      }
    />
  );
  const SpecificJSX = (
    <div className="py-12 pr-8">
      <Paragraph
        text={
          "Why is SD-WAN a game-changer? This technology lets a business owner of any size improve connectivity, reduce WAN costs of MPLS networks, and build resilient redundant networks that were out of reach previously. With the right SD-WAN solutions, companies gain the ability to significantly improve connectivity to their remote offices and data center locations across great distances."
        }
      />
      <Paragraph
        text={
          "SD-WAN can be achieved in many ways and we partner with the top carriers. Some providers can enable SD-WAN regardless of your existing Internet provider!"
        }
      />
      <Paragraph
        text={
          "Before SD-WAN, achieving failover with multiple connections from multiple providers or creating a fully meshed network, required dedicated equipment and engineering from various providers and dedicated managed services billed as a monthly fee. “Fault Tolerance” – “Load Balancing” was once out of reach for many businesses. Those solutions with expensive hardware complex protocols such as BGP were challenging even for the enterprise businesses. But now, thanks to SDN and SD-WAN, this complex solution has now been empowered via software solutions. SDN moves network controls to a protected cloud using software to replace the need for once needed hardware"
        }
      />
      <Paragraph
        text={
          "If you have a legacy MPLS network, you must consider how SD-WAN solutions can help you save thousands of dollars each month. There is still a place for MPLS, but why spend more than you have to now that SD-WAN offers the same solution with multiple additional features such as redundancy and internet aggregation."
        }
      />
      <Paragraph
        text={
          "Our SD-WAN solutions offer a variety of options for businesses of all sizes. Call us at 866-844-2181, and we will help design the best solution possible!"
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
