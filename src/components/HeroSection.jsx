import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-black  ">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className=" inset-0 w-full h-full object-cover"
      >
        <source
          src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5bd99050d39e261735b93f68_tlco-transcode.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Text and Button Container */}
      <div className="absolute inset-0 flex flex-col justify-center pl-20 w-[50%]">
        <div className="text-white  mb-8">
          <h2 className="text-4xl ">
            We Are Your Business Telecommunications Conduit
          </h2>
          <p className="text-lg mt-5 text-neutral-400 font-bold w-[90%]">
            Do you want to get the best price from your business
            telecommunications service provider? You’ve come to the right place.
            We act as a conduit between major service providers and businesses.
          </p>
        </div>
        <button className="bg-green-500 text-white px-6 py-3  w-[30%]">
          Get a Quote Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
