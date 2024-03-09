import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import PhoneIcon from '@mui/icons-material/Phone';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [productsDropDown, setProductsDropDown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
  };
  const toggleAboutDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProductsDropdownEnter = () => {
    setProductsDropDown(true);
  };

  const handleProductsDropdownLeave = () => {
    setProductsDropDown(false);
  };
  const toggleProductsDropdown = () => {
    setProductsDropDown(!productsDropDown);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-gray-900 lg:px-20 z-999 shadow-2xl">
      <div className="flex justify-end px-4">
        <button className="bg-green-500 text-white px-4 py-2">
          Request a Quote
        </button>
        <button className="bg-gray-500 text-white py-2 px-4">
         <span><PhoneIcon/></span> 800-546-9810
        </button>
      </div>
      <div className="px-4 py-4  flex justify-between items-center">
        <img
          src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b686eff23db9d1a6efa0902_Logo.png"
          alt="Logo"
          className="w-24 h-auto"
        />

        {/* Desktop menu */}
        <div className="hidden lg:flex justify-between items-center space-x-4 relative">
          <span
            className="text-white cursor-pointer  px-2 py-5"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            About TelcoSolutions{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
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
            Products{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
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
                    <Link to="/products/pri-services">PRI Services</Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/cable">Cable Internet</Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/sd-wan">SD-WAN</Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/mpls">MPLS</Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/business-phone-services">
                      Business Phone Services
                    </Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/data-center">Data Center</Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/cloud-services">Cloud Services</Link>
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

        {/* Mobile menu haburger */}
        <div className="block lg:hidden">
          <button
            onClick={handleMobileMenuToggle}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              // Close icon (X) when the mobile menu is open
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger icon when the mobile menu is closed
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute bg-green-600 top-32 mx-4 w-[90%] rounded p-4 flex justify-between">
            <ul className="w-full">
              <li
                className="text-white p-2 text-lg justify-between flex"
                onClick={toggleAboutDropDown}
              >
                About TelcoSolutions
                {isDropdownOpen ? (
                  <ArrowDropUpIcon fontSize="large" />
                ) : (
                  <ArrowDropDownIcon fontSize="large" />
                )}
              </li>
              {isDropdownOpen && (
                <ul className="bg-green-500 text-white z-10 rounded">
                  <li className="py-2 px-4 hover:bg-green-600">
                    <Link to="/about">About TelcoSolutions</Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-green-600">
                    <Link to="/current-customers">Current Customers</Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-green-600">
                    <Link to="/carriers">Carriers</Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-green-600">
                    <Link to="/testimonials">Testimonials</Link>
                  </li>
                </ul>
              )}

              <li
                className="text-white p-2 text-lg justify-between flex"
                onClick={toggleProductsDropdown}
              >
                Products
                {productsDropDown ? (
                  <ArrowDropUpIcon fontSize="large" />
                ) : (
                  <ArrowDropDownIcon fontSize="large" />
                )}
              </li>
              {productsDropDown && (
                <ul className="bg-green-500 text-white z-10 rounded">
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
                    <Link to="/products/pri-services">PRI Services</Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/cable">Cable Internet</Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/sd-wan">SD-WAN</Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/mpls">MPLS</Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/business-phone-services">
                      Business Phone Services
                    </Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/data-center">Data Center</Link>
                  </li>
                  <li className="py-2  px-4  hover:bg-green-600">
                    <Link to="/products/cloud-services">Cloud Services</Link>
                  </li>
                  {/* Add more product links here */}
                </ul>
              )}

              <li className="text-white p-2 text-lg">
                <Link to="/partner-program">Partner Program</Link>
              </li>
              <li className="text-white p-2 text-lg">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="text-white p-2 text-lg">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
