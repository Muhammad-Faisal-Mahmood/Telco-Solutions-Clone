import React from "react";
import Blog from "./Blog";

const BlogsSection = () => {
  return (
    <div className="flex  px-24 py-20">
      <div className="w-3/4">
        <Blog />
        <Blog />
      </div>
      <div className="w-2/4">
        <div className="mt-4 ml-8 flex flex-col">
          <h3 className="text-xl mb-4">Search the blog</h3>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-400 px-4 py-2 mb-2"
          />
          <div className="flex justify-end">
            <button className="bg-green-500 w-1/2 text-white py-2 px-4 ">
              Search
            </button>
          </div>
        </div>
        <div className="mt-4 ml-8">
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
