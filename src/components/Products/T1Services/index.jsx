import GeneralSections from "../GeneralSections";
import HeroSection from "../HeroSection";
import Paragraph from "../Paragraph";
function index() {
  const SpecificHeroSection = (
    <HeroSection
      bgImage={
        "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9ff05b8a634e8487fd5ca3_T1-min.jpg"
      }
      logoImage={
        "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b75d9fd5122a92a80a68a5e_icns_t1.svg"
      }
      heading={"T1Internet Services"}
      paragraph={
        "Our T1 line internet connections are available in three different options: data-only, voice-only and integrated voice and data. Single T1 connections offer guaranteed symmetrical internet speeds of 1.54 Mbps while bonded alternatives facilitate speeds up to 12 Mbps."
      }
    />
  );
  const SpecificJSX = (
    <div className="py-12 pr-8">
      <Paragraph
        text={
          "T1 lines are a communication transmission service that uses two twisted copper wires to send and receive data or voice transmission. Small and medium sized businesses use T1 lines for increased speed of data transmission and voice, depending on the T1 line’s configuration. T1 lines are great for small and medium sized businesses due to their reliability and affordability. Learn more about our packages below."
        }
      />
      <Paragraph
        text={
          "Unlike cable or DSL, T1 internet lines are location-based and dedicated circuits to the customer. This means that T1 providers can guarantee fast connection speeds, reliability, and latency. TelcoSolutions will help your business navigate the different T1 line options to find the best solution for enhancing data and voice transmission for your small or medium sized business. TelcoSolutions can also explore other internet connection options, like business fiber internet."
        }
      />
      <Paragraph
        text={"T1 Internet Services Pricing and Packages from TelcoSolutions:"}
      />
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
          "We also offer integrated voice and data T1 service for $239* per connection, per month. Those packages include:"
        }
      />

      <ul className="list-disc pl-8 pb-8">
        <li className="font-semibold py-1 text-gray-800">
          One to 24 lines or channels.
        </li>
        <li className=" font-semibold py-1 text-gray-800">
          Unlimited local and long-distance.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          A variety of calling features, including caller ID, rollover and
          three-way calling.
        </li>
        <li className=" font-semibold py-1 text-gray-800">
          A 99 percent uptime service guarantee with SLA included
        </li>
        <li className="font-semibold py-1 text-gray-800">
          A managed T1 router.
        </li>
        <li className="font-semibold py-1 text-gray-800">Eight static IPs.</li>
        <li className="font-semibold py-1 text-gray-800">
          Free installation with a one-, two- or three-year contract.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Twenty-four-seven, three-sixty-five monitoring.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          A 30-day satisfaction guarantee.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Bonded integrated T1s for symmetrical speeds of 3 to 12Mbps and MPLS
          are also available.
        </li>
      </ul>

      <Paragraph
        text={
          "Are you ready to upgrade to T1 internet services? Contact TelcoSolutions and request a quote today!"
        }
      />

      <Paragraph
        text={
          "*T1 prices are subject to the mileage distance from the nearest servicing office. Rates may be higher for longer T1 loops."
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
