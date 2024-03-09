import React from "react";

const ServiceSection = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row md:space-x-10 lg:px-20 mt-10">
      {/* Left Section */}
      <div className="bg-white p-8 pt-20 w-full md:w-3/4 md:max-w-md">
        <h2 className="text-2xl">Service Area</h2>
        <p className="text-gray-800 my-10 w-full md:w-full lg:w-[80%] text-lg">
          While initially focused on the United States, TelcoSolutions has
          expanded to being able to offer solutions around the world. Our
          relationships with 180 providers allow us unprecedented access to
          offer voice, data, and cloud solutions globally.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 mt-4 rounded">
          Get Started Now
        </button>
      </div>

      {/* Right Section */}
      <div className="bg-white hidden mt-8 sm:mt-0 sm:flex sm:justify-center">
        <video autoPlay loop muted className="w-[50%] lg:w-[70%]  md:mt-12">
          <source
            src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5d6a4e162927f638544ccf31_5bd8e76bd39e267484b8bd06_globe-compressed-transcodewebmhd-transcode.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ServiceSection;
