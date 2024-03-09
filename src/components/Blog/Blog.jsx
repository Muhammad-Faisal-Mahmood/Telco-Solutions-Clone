import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <Link to={"/blog/blog-post"}>
        <div className="flex items-center mb-8 cursor-pointer">
          <img
            src="https://assets-global.website-files.com/5b8d3a2138a95e5dc9a981ec/64fa0da10c62566d5a7cc4ae_what%20causes%20internet%20outages.jpg"
            alt="Internet Outages"
            className="h-[50vh] w-[40%] object-cover object-center mr-8 "
          />
          <div>
            <h3 className="text-md  mb-2 md:text-2xl">
              What Causes Internet Outages and How Does It Affect Your Business?
            </h3>
            <p className="text-gray-700 my-10 text-sm md:text-md ">
              As a business fiber internet provider, our team at TelcoSolutions
              delves deeper into the most common causes of internet outages,
              their impact on business, and how to prevent downtime.
            </p>
            <span className="text-neutral-500 p-2 bg-neutral-200">
              September 7, 2023
            </span>
          </div>
        </div>
      </Link>
      <hr className="border-gray-300 my-8" />
    </>
  );
};

export default Blog;
