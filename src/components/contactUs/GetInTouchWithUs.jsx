import React from "react";
import ProductsRange from "../ProductsRange";
import GeneralButton from "../GeneralButton";

const GetInTouchWithUs = () => {
  return (
    <div className="bg-white  lg:px-20">
      <div className="container   flex flex-col px-5 py-20 items-center justify-between lg:px-8 lg:flex-row ">
        {/* Left Div */}
        <div className="w-full  lg:w-1/2 bg-white mb-4 lg:px-8 ">
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
              <GeneralButton>
                <div>Send Inquery</div>
              </GeneralButton>
            </div>
          </form>
        </div>
        {/* Right Div (Form) */}
        <div className="w-full lg:w-1/2 relative ">
          <div className="relative lg:absolute w-full lg:-bottom-[95px] xl:-bottom-[118px]">
            <ProductsRange />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchWithUs;
