import PhoneIcon from "@mui/icons-material/Phone";
import GeneralButton from "./GeneralButton";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-20 ">
      <div className="container mx-auto flex-col px-4  flex-wrap lg:justify-between lg:px-24 lg:flex lg:flex-row">
        {/* First Column */}
        <div className="w-full mb-10 md:w-2/4 lg:mb-40 lg:w-1/4">
          <img
            src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b686eff23db9d1a6efa0902_Logo.png"
            alt="Logo"
            className="w-32 h-auto lg:w-24"
          />
        </div>

        {/* Second Column */}
        <div className="w-full mb-10 md:w-1/4 text-white lg:mb-40 lg:w-1/4">
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul>
            <li
              className="cursor-pointer"
              style={{ color: "#fff" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#8dc541")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              About
            </li>
            <li
              className="cursor-pointer"
              style={{ color: "#fff" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#8dc541")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              Testimonials
            </li>
            <li
              className="cursor-pointer"
              style={{ color: "#fff" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#8dc541")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              Carriers
            </li>
            <li
              className="cursor-pointer"
              style={{ color: "#fff" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#8dc541")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="w-full md:w-[35%] mb-10 text-white lg:mb-40 lg:w-1/4 ">
          <h4 className="text-lg font-bold mb-4">Social</h4>
          <div className="flex items-center gap-2   ">
            <img
              src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5d6a3e650b8020d1c1290b13_result%20(1).svg"
              width="32"
              alt="LinkedIn"
            />
            <img
              className="h-8 w-8"
              src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b7153053d9b847ecf7278fa_Twitter.svg"
              alt="Twitter"
            />
            <img
              className="h-8 w-8"
              src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b7153053d9b8467ac7278f8_Facebook.svg"
              alt="Facebook"
            />
            <img
              className="w-8 h-8"
              src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b71530541c61605956e9abd_G%2B.svg"
              alt="Google+"
            />
            <img
              className="w-8 h-8"
              src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5d6a3e782927f6fc2e4cb1ce_result.svg"
            />
          </div>
        </div>

        {/* Fourth Column */}
        <div className="w-1/2 md:w-1/3 mb-10 text-white lg:mb-40 lg:w-1/4 ">
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <div className="space-y-6">
            <div>
              <GeneralButton>Request a Quote Now</GeneralButton>
            </div>
            <button
              style={{
                backgroundColor: "#c2c2c2",
                boxShadow: "4px 4px 0px #9c9c9c",
                transition: "box-shadow 0.2s ease-in-out", // Added transition property
              }}
              className=" z-10 text-white py-3 px-6 font-semibold text-md"
              type="submit"
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = "8px 8px 0px #9c9c9c";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "4px 4px 0px #9c9c9c";
              }}
            >
              <span>
                <PhoneIcon />
              </span>{" "}
              800-546-9810
            </button>
          </div>
        </div>
      </div>
      {/* Divider */}
      <hr className="border-gray-700 my-8" />
      {/* Copyright Text */}
      <p className="text-center text-md text-gray-400 pb-8">
        © Copyright 2023 East Coast Telecoms - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
