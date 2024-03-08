import GeneralSections from "../GeneralSections";
import HeroSection from "../HeroSection";
import Paragraph from "../Paragraph";
function index() {
  const SpecificHeroSection = (
    <HeroSection
      bgImage={
        "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b911e94b07f228e2c83a62a_ISDN%20PRI-min.jpg"
      }
      logoImage={
        "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b75d9fd58cad0fde1585e4f_icns_isdn.svg"
      }
      heading={"PRI Services"}
      paragraph={
        "PRI services bring VoIP technology to your conventional phone systems and give your business a cost-effective way to improve its internal and external connectivity. With clear call quality and dependable performance, a PRI phone system is the perfect solution for businesses across the globe."
      }
    />
  );
  const SpecificJSX = (
    <div className="py-12 pr-8">
      <Paragraph
        text={
          "PRI services are configured with 23 bidirectional channels and one data channel and facilitate transmission speeds of up to 1.5 megabytes per second. Additionally, PRIs offload all signaling and call control requirements onto D channels, leaving the remaining B channels free for data, voice or a combination of the two services. This technology offers a reliable and cost-effective option for any company looking to upgrade its communications system."
        }
      />
      <Paragraph
        text={
          "Unlike analog trunk lines, PRIs also include caller ID delivery and all-digital technology that allows for simultaneous, integrated voice and data capabilities over standard telephone lines and PBX phone systems. With a PRI system, businesses can simultaneously conduct video conferences, stream video to multiple locations, and make phone calls without any interference to the connection."
        }
      />
      <Paragraph
        text={
          "We offer affordable PRI packages that come with an array of value-added features, including:"
        }
      />
      <ul className="list-disc pl-8 pb-8">
        <li className="font-semibold py-1 text-gray-800">
          Assignable direct inward dialing numbers for workstation or desks.
        </li>
        <li className=" font-semibold py-1 text-gray-800">
          T1-enabled voice and data access.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Call center and PBX system support features.
        </li>
        <li className=" font-semibold py-1 text-gray-800">
          Customizable channels.
        </li>
      </ul>
      <Paragraph
        text={
          "TelcoSolutions currently provides data- and voice-only T1 internet service in all 50 U.S. states, Canada, and Mexico for as low as $179* per connection, per month. Our T1 services packages include:"
        }
      />

      <ul className="list-disc pl-8 pb-8">
        <li className="font-semibold py-1 text-gray-800">
          A 99 percent uptime service guarantee with SLA included.
        </li>
        <li className=" font-semibold py-1 text-gray-800">
          A managed T1 router.
        </li>
        <li className="font-semibold py-1 text-gray-800">Eight static IPs.</li>
        <li className=" font-semibold py-1 text-gray-800">
          Free installation with a one-, two- or three-year contract.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Twenty-four-seven, three-sixty-five monitoring.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          A 30-day satisfaction guarantee.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Bonded data T1s for symmetrical speeds of three to 12Mbps and MPLS are
          also available.
        </li>
      </ul>

      <Paragraph
        text={
          "Businesses across many industries use PRI services to address their complex connectivity needs. The technology behind these systems launched in the 1980s and remains a widely-used and reliable internet solution to this day. Prior to PRI technology, a business or enterprise had to install a separate phone line for each device. Fax machines, computers, phones, and video conferencing devices required their own connections, which involved a large amount of time and money when compared to today’s technology. Today’s modern PRI networks offer businesses a cost-effective solution to remain connected and promote continued growth and success."
        }
      />

      <Paragraph
        text={
          "Want to improve enterprise-wide connectivity with our cost-effective PRI services? Contact TelcoSolutions and request a quote today!"
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
