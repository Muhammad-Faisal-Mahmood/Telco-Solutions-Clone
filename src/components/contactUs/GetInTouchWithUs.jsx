import React from "react";
import ProductsRange from "../ProductsRange";

const GetInTouchWithUs = () => {
  return (
    <div className="bg-white  px-20">
      <div className="container  mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        {/* Left Div */}
        <div className="w-full  md:w-1/2 bg-white px-8 py-20 rounded-lg mb-4 md:mb-0">
          <h2 className="text-3xl  mb-4">Get in touch with us</h2>
          <p className="text-black mt-10 mb-5">
            Do you want to get the best price from your telecommunications
            service provider? You’ve come to the right place. We act as a
            conduit between major service providers and businesses.
          </p>
          <p className="text-black mb-10">
            You can also call us on{" "}
            <span className="text-green-500">800-546-9810</span>.
          </p>
          <hr className="border-neutral-200 my-8" />
          <form>
            <div className="mb-2">
              <input
                type="text"
                name="contactName"
                id="contactName"
                placeholder="Contact name*"
                className="mt-1 w-full p-2 border border-neutral-200 "
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="contactName"
                id="contactName"
                placeholder="Email*"
                className="mt-1 w-full p-2 border border-neutral-200 "
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="contactName"
                id="contactName"
                placeholder="Phone Number*"
                className="mt-1 w-full p-2 border border-neutral-200 "
              />
            </div>

            <div className="mb-2">
              <select
                id="quote"
                name="quote"
                className="mt-1 block w-full py-2 px-3 border border-neutral-200 bg-neutral-100 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>Would you like a quote?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="mb-2">
              <select
                id="service"
                name="service"
                className="mt-1 block w-full py-2 px-3 border border-neutral-200 bg-neutral-100 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>What service is this regarding?</option>
                <option>Service 2</option>
                <option>Service 3</option>
              </select>
            </div>
            <div className="mb-4 ">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Message"
                className="mt-1 p-2 shadow-sm border border-neutral-200  focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  "
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className=" px-4 py-2 border border-transparent text-base font-medium w-full  text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
        {/* Right Div (Form) */}
        <div className="w-full md:w-1/2 relative ">
          <div className="absolute w-full -bottom-16">
            <ProductsRange />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchWithUs;
