import GeneralSections from "../GeneralSections";
import HeroSection from "../HeroSection";
import Paragraph from "../Paragraph";
function index() {
  const SpecificHeroSection = (
    <HeroSection
      bgImage={
        "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b911e928065b64c749a8fec_Business%20Phone%20Service-min.jpg"
      }
      logoImage={
        "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b75d9fd8166ba2d57372497_icns_businessphone.svg"
      }
      heading={"Business Phone Services"}
      paragraph={
        "Despite more popular forms of communication, like email and internal messaging platforms, business phones play a major role in conducting business in many industries. A reliable business phone system is especially important when interacting with clients and prospects to strengthen the important relationships that drive businesses forward."
      }
    />
  );
  const SpecificJSX = (
    <div>
      <div className="pt-12 px-8">
        <Paragraph
          text={
            "TelcoSolutions offers cost-effective business telephone service packages that include standard local service, unlimited local calls, and a variety of calling features. Our business phone experts will help your business implement the phone system that fits your needs."
          }
        />
      </div>

      <div className="flex columns-2 p-8">
        <div className="w-[15%]">
          <img
            src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b76fa69d79b52f83a9c0ea5_localcalling.png"
            alt=""
          />
        </div>
        <div className="w-[85%]">
          <h1 className="font-bold pb-8 text-lg text-gray-700">
            Unlimited Local Calling
          </h1>
          <Paragraph
            text={
              "Business phone systems keep companies connected with employees, partners, and clients in their immediate area. With our small business phone services you’ll be able to make unlimited local calls."
            }
          />
        </div>
      </div>
      <div className="flex columns-2 p-8">
        <div className="w-[15%]">
          <img
            src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b76fa6984878472b98da7f6_voicemail.png"
            alt=""
          />
        </div>
        <div className="w-[85%]">
          <h1 className="font-bold pb-8 text-lg text-gray-700">Voice Mail</h1>
          <Paragraph
            text={
              "Don’t miss a call with voice mail for business. This system allows you to receive messages when you are unable to answer an incoming call or when all lines are in use."
            }
          />
        </div>
      </div>

      <div className="pl-4">
        <h1 className="text-2xl font-bold">
          Business Phone Options and Calling Features:
        </h1>
        <h1 className="text-2xl ">
          Get all of these calling features for the same flat fee for our
          business phone solutions.
        </h1>
      </div>

      <ul className="list-disc pl-12 pt-4 pb-16">
        <li className="font-semibold py-1 text-gray-800">Call block.</li>
        <li className="font-semibold py-1 text-gray-800">
          Call forward for busy lines.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Call forward with don’t answer.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Call forward with don’t answer and ring control.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Call forwarding with variables.
        </li>
        <li className="font-semibold py-1 text-gray-800">Call return.</li>
        <li className="font-semibold py-1 text-gray-800">Call selector.</li>
        <li className="font-semibold py-1 text-gray-800">Call tracing.</li>
        <li className="font-semibold py-1 text-gray-800">Call waiting.</li>
        <li className="font-semibold py-1 text-gray-800">Deluxe caller ID.</li>
        <li className="font-semibold py-1 text-gray-800">
          Distinctive ring one and ringmaster one.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Distinctive ring two and ringmaster two.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Enhanced caller ID with ACRJ.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Hunting and rollover services.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Message waiting indicator.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Preferred call forwarding.
        </li>
        <li className="font-semibold py-1 text-gray-800">
          Remote access to call-forwarding variables.
        </li>
        <li className="font-semibold py-1 text-gray-800">Repeat dialing.</li>
        <li className="font-semibold py-1 text-gray-800">Speed calling 30.</li>
        <li className="font-semibold py-1 text-gray-800">
          Surrogate client number services.
        </li>
        <li className="font-semibold py-1 text-gray-800">Three-way calling.</li>
        <li className="font-semibold py-1 text-gray-800">
          Three-way calling with transfer.
        </li>
      </ul>

      <div className="pl-4">
        <Paragraph
          text={
            "Some of our business phone plans also feature unlimited long-distance calling, toll-free customer contact support, and online fax services. Of course, if you need a custom phone solution, we’ll work with you to create a package that fits your specific business needs."
          }
        />

        <Paragraph
          text={
            "We also offer robust support services. Our dedicated staff is always available and ready to resolve any issues and helps you feel comfortable with your business phone service."
          }
        />

        <Paragraph
          text={
            "Small and large companies alike can improve key business metrics by creating a business phone solution that works well with company operations. Save time and improve communication with customers and clients with TelcoSolutions business phone expertise."
          }
        />
        <Paragraph
          text={
            "Ready to upgrade? Contact TelcoSolutions and request a quote today!"
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
