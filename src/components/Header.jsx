import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [productsDropDown, setProductsDropDown] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleProductsDropdownEnter = () => {
    setProductsDropDown(true);
  };

  const handleProductsDropdownLeave = () => {
    setProductsDropDown(false);
  };

  return (
    <div className="bg-gray-900 px-20 z-999 shadow-2xl">
      <div className="flex justify-end px-4">
        <button className="bg-green-500 text-white px-4 py-2">
          Request a Quote
        </button>
        <button className="bg-gray-500 text-white py-2 px-4">
          800-546-9810
        </button>
      </div>
      <div className="p-4 flex justify-between items-center">
        <img
          src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b686eff23db9d1a6efa0902_Logo.png"
          alt="Logo"
          className="w-24 h-auto"
        />
        <div className="flex justify-between items-center space-x-4 relative">
          <span
            className="text-white cursor-pointer  px-2 py-5"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            About TelcoSolutions
            {isDropdownOpen && (
              <div
                className="absolute bg-green-500 text-white mt-5 -left-5 z-10"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <ul>
                  <Link to="/about">
                    <li className="py-2  px-4  hover:bg-green-600">
                      About TelcoSolutions
                    </li>
                  </Link>
                  <Link to="/current-customers">
                    <li className="py-2  px-4  hover:bg-green-600">
                      Current Customers
                    </li>
                  </Link>
                  <Link to="/carriers">
                    <li className="py-2  px-4  hover:bg-green-600">Carriers</li>
                  </Link>
                  <Link to="/testimonials">
                    <li className="py-2  px-4  hover:bg-green-600">
                      Testimonials
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </span>
          <span
            className="text-white cursor-pointer  px-2 py-5"
            onMouseEnter={handleProductsDropdownEnter}
            onMouseLeave={handleProductsDropdownLeave}
          >
            Products
            {productsDropDown && (
              <div
                className="absolute bg-green-500 text-white mt-5 left-32 z-10"
                onMouseEnter={handleProductsDropdownEnter}
                onMouseLeave={handleProductsDropdownLeave}
              >
                <ul>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/voip-hosted-pbx">
                      VOIP - Hosted PBX
                    </Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/business-fiber">
                      Business Fiber Internet
                    </Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/t1-services">T1 Internet Services</Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/testimonials">PRI</Link>
                  </li>
                </ul>
              </div>
            )}
          </span>
          <Link to="/partner-program" className="text-white">
            Partner Program
          </Link>
          <Link to="/contact" className="text-white">
            Contact Us
          </Link>
          <Link to="/blog" className="text-white">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
