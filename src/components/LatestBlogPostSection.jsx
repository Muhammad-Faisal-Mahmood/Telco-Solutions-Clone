const LatestBlogPostSection = () => {
  return (
    <section className="bg-neutral-100  py-10 md:mt-20">
      <div className="container  lg:mx-auto ">
        <h2 className="text-3xl text-center  text-neutral-600 mt-10 mb-20">
          Latest Blog Posts
        </h2>
        <div className="flex flex-col justify-center px-10  md:flex-row md:px-0 w-[100%]">
          {/* Card 1 */}
          <div className="mr-6 lg:p-2 xl:p-6 transition-transform duration-300 hover:-translate-y-3 md:w-[30%]">
            <h3 className="text-xl text-gray-800 mb-4">
              What Causes Internet Outages and How Does It Affect Your Business?
            </h3>
            <p className="text-gray-600 mb-4">
              As a business fiber internet provider, our team at TelcoSolutions
              delves deeper into the most common causes of internet outages,
              their impact on business, and how to prevent downtime.
            </p>
            <p className="text-gray-600 text-sm mt-10 mb-5">
              Thursday, September 7, 2023
            </p>
          </div>
          <div className="mr-6 lg:p-2 xl:p-6 transition-transform duration-300 hover:-translate-y-3 md:w-[30%]">
            <h3 className="text-xl text-gray-800 mb-4">
              What Causes Internet Outages and How Does It Affect Your Business?
            </h3>
            <p className="text-gray-600 mb-4">
              As a business fiber internet provider, our team at TelcoSolutions
              delves deeper into the most common causes of internet outages,
              their impact on business, and how to prevent downtime.
            </p>
            <p className="text-gray-600 text-sm mt-10 mb-5">
              Thursday, September 7, 2023
            </p>
          </div>
          <div className="mr-6 lg:p-2 xl:p-6 transition-transform duration-300 hover:-translate-y-3 md:w-[30%]">
            <h3 className="text-xl text-gray-800 mb-4">
              What Causes Internet Outages and How Does It Affect Your Business?
            </h3>
            <p className="text-gray-600 mb-4">
              As a business fiber internet provider, our team at TelcoSolutions
              delves deeper into the most common causes of internet outages,
              their impact on business, and how to prevent downtime.
            </p>
            <p className="text-gray-600 text-sm mt-10 mb-5">
              Thursday, September 7, 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPostSection;
