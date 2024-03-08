import GeneralSections from "../GeneralSections";
import HeroSection from "../HeroSection";
import Paragraph from "../Paragraph";
function index() {
  const SpecificHeroSection = (
    <HeroSection
      bgImage={
        "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9ff05c4359f4b1b12ac612_CloudComputing-min.jpg"
      }
      logoImage={
        "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b75d9fd7ca4334bd7960bbc_icns_cloud.svg"
      }
      heading={"Cloud Computing Solutions"}
      paragraph={
        "Cloud computing has created market demand of over $200B in a short time – and with good reason. The convenience and scalability of on-demand access to data, software, information and other resources are available is game changing for 21st century business. TelcoSolutions guides businesses through the selection of the cloud resources that can push growth forward."
      }
    />
  );
  const SpecificJSX = (
    <div>
      <div className="pt-12 p-8">
        <h1 className="text-4xl font-semibold mb-8">
          What is Cloud Computing?
        </h1>
        <Paragraph
          text={
            "Cloud computing refers to the concept on on-demand availability of computer system resources. Information and software can be accessed from multiple devices across geographic locations at any time.This has changed the way business can operate and deliver data and information to users of a computer network. The largest companies on earth have transitioned data to the cloud because of the ability to scale business in size and speed."
          }
        />
        <h1 className="text-4xl font-semibold mb-8">
          Benefits of Cloud Computing: How to Save Time and Money with the
          Cloud:
        </h1>
        <Paragraph
          text={
            "The ability to access files and data over the internet dramatically reduces time input through enhanced collaboration within teams. Improved efficiency enables businesses to work with multiple clients and scale applications quickly. Companies save money through cost reduction through infrastructure savings and quick scaling up and down usage based on current demand."
          }
        />
        <Paragraph
          text={
            "The cloud enables mobile workforces. Recently, especially in the wake of the COVID-19 pandemic, remote work is a reality that is here to stay. Companies can empower their workforce to quickly access data and applications through the cloud. Cloud based businesses can easily accommodate remote work."
          }
        />
        <h1 className="text-4xl font-semibold mb-8">
          Cloud Computing Promotes Business Flexibility
        </h1>
        <Paragraph
          text={
            "Cloud computing solutions lend businesses flexibility by accommodating planned and unplanned surges in demand and reducing employee workloads. Plus, such solutions can be deployed on-demand, meaning organizations need not invest in massive software and hardware and get bogged down by cumbersome information technology maintenance."
          }
        />
        <h1 className="text-4xl font-semibold mb-8">
          Improve Business Continuity Through Cloud Computing
        </h1>
        <Paragraph
          text={
            "The cloud is a great hedge against unforeseen events like natural disaster or pandemics, which is all too real. Cloud based applications can enable business operations to continue normally even if teams are forced to work remote or access systems from a different location for a period of time."
          }
        />
      </div>

      <div className="flex columns-2 p-8">
        <div className="w-[15%]">
          <img
            src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b7179b1e5c8c65505197135_Costeffectiveness.svg"
            alt=""
          />
        </div>
        <div className="w-[85%]">
          <h1 className="font-bold pb-12 text-lg text-gray-700">
            Time Savings
          </h1>
          <Paragraph
            text={
              "Cloud computing solutions save critical time during the product testing and deployment stages, enabling businesses to quickly test and release new solutions and stay nimble in mercurial markets."
            }
          />
        </div>
      </div>
      <div className="flex columns-2 p-8">
        <div className="w-[15%]">
          <img
            src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b717b45542c095c668f03ea_Integration.svg"
            alt=""
          />
        </div>
        <div className="w-[85%]">
          <h1 className="font-bold pb-12 text-lg text-gray-700">
            Support for Mobile Workforces
          </h1>
          <Paragraph
            text={
              "In recent years, workforces have become more mobile, with employees working in remote capacity or taking on more travel. As a result, many modern professionals need devices that can connect to corporate databases from anywhere in the world. Cloud computing services make such connections possible and enable personnel to access internal information, no matter their location."
            }
          />
        </div>
      </div>
      <div className="flex columns-2 p-8">
        <div className="w-[15%]">
          <img
            src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b717b45681f89ee80b65fe3_MultiLocation.svg"
            alt=""
          />
        </div>
        <div className="w-[85%]">
          <h1 className="font-bold pb-12 text-lg text-gray-700">
            Business Flexibility
          </h1>
          <Paragraph
            text={
              "Cloud computing solutions lend businesses flexibility by accommodating planned and unplanned surges in demand and reducing employee workloads. Plus, such solutions can be deployed on-demand, meaning organizations need not invest in massive software and hardware and get bogged down by cumbersome information technology maintenance."
            }
          />
        </div>
      </div>
      <div className="flex columns-2 p-8">
        <div className="w-[15%]">
          <img
            src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b717b454c381980ba1a44e0_ImprovedSecurity.svg"
            alt=""
          />
        </div>
        <div className="w-[85%]">
          <h1 className="font-bold pb-12 text-lg text-gray-700">
            Business Continuity
          </h1>
          <Paragraph
            text={
              "Most organizations can’t plan for unforeseen disruptions such as natural disasters. However, with cloud computing solutions, businesses can protect essential information at all times and recover quickly following adverse events with virtually zero disruption."
            }
          />
        </div>
      </div>

      <div className="py-8 px-8">
        <Paragraph
          text={
            "Is your business ready to save time, provide world-class mobile workforce support, achieve maximum flexibility and facilitate complete continuity with cloud computing services? Contact TelcoSolutions and request a quote!"
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
