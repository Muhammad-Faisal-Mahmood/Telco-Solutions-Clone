import React from "react";
import Blog from "./Blog";
import GeneralButton from "../GeneralButton";

const BlogsSection = () => {
  return (
    <div className=" flex flex-col py-20 px-7 lg:px-24 lg:flex-row">
      <div className="w-full lg:w-3/4">
        <Blog />
        <Blog />
      </div>
      <div className=" w-full lg:w-2/4">
        <div className="mt-4  flex flex-col lg:ml-8">
          <h3 className="text-xl mb-4">Search the blog</h3>
          <input
            type="text"
            placeholder="Search..."
            style={{
              boxShadow: "4px 4px 0px #4682B4",
              transition: "box-shadow 0.2s ease-in-out",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "8px 8px 0px #4682B4";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "4px 4px 0px #4682B4";
            }}
            className="bg-gray-100 px-4 py-4 mb-2"
          />
          <div className="flex justify-end my-4">
            <GeneralButton>
              <text className="px-10">Search</text>
            </GeneralButton>
          </div>
        </div>
        <div className="mt-4 lg:ml-8">
          <h3 className="text-xl mb-4">Categories</h3>
          <div className="flex flex-wrap">
            <button className="bg-blue-500 text-white px-8 py-1 mb-2 mr-2 rounded-full">
              Business
            </button>
            <button className="bg-black text-white px-8 py-1 mb-2 mr-2 rounded-full">
              Tech
            </button>
            <button className="bg-blue-100 text-white px-8 py-1 mb-2 rounded-full">
              Comms
            </button>
          </div>
          <div className="flex flex-wrap mt-4">
            <button className="bg-green-300 text-white px-8 py-1 mb-2 mr-2 rounded-full">
              Networking
            </button>
            <button className="bg-pink-300 text-white px-8 py-1 mb-2 rounded-full">
              Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
