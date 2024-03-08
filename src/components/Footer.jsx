import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-20 ">
      <div className="container mx-auto flex flex-wrap justify-between px-24">
        {/* First Column */}
        <div className="w-full md:w-1/4 mb-40 ">
          <img
            src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b686eff23db9d1a6efa0902_Logo.png"
            alt="Logo"
            className="w-24 h-auto"
          />
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/4 text-white mb-40">
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul>
            <li className="">About</li>
            <li className="">Testimonials</li>
            <li className="">Carriers</li>
            <li className="">Contact</li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="w-full md:w-1/4 text-white mb-40  ">
          <h4 className="text-lg font-bold mb-4">Social</h4>
          <div className="flex items-center">
            {/* Placeholder for social icons */}
          </div>
        </div>

        {/* Fourth Column */}
        <div className="w-full md:w-1/4 text-white mb-40  ">
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <div className="flex flex-col">
            <button className="bg-green-500 text-white px-4 py-2 mb-2 rounded">
              Request a Quote Now
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded">
              800-546-9810
            </button>
          </div>
        </div>
      </div>
      {/* Divider */}
      <hr className="border-gray-700 my-8" />
      {/* Copyright Text */}
      <p className="text-center text-md text-gray-400 pb-8">
        © 2020 TELCOSOLUTIONS - Your full service communications company. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
