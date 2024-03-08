import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-900 px-20 z-999 shadow-2xl ">
      <div className="flex justify-end px-4 ">
        <button className="bg-green-500 text-white px-4 py-2 ">
          Request a Quote
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 ">
          800-546-9810
        </button>
      </div>
      <div className="p-4 flex justify-between items-center">
        <img
          src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b686eff23db9d1a6efa0902_Logo.png"
          alt="Logo"
          className="w-24 h-auto"
        />
        <div className="flex justify-between items-center space-x-4">
          <span className="text-white">About TelcoSolutions</span>
          <span className="text-white">Products</span>
          <span className="text-white">Partner Program</span>
          <Link to="/contact" className="text-white ">
            Contact Us
          </Link>
          <Link to="/blog" className="text-white ">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
