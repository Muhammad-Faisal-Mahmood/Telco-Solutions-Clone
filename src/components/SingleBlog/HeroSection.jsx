const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center py-44"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://assets.website-files.com/5b68628a23db9d1747f9f227/63beab6fed270d73aa2e2bb0_telco%20solution%20blog.jpg)",
      }}
    >
      <div className="container  flex flex-col px-5 md:w-[50%]  text-white  lg:px-8 xl:px-24">
        <h2 className="text-4xl mb-12">
          What Causes Internet Outages and How Does It Affect Your Business?
        </h2>
        <p className="text-lg max-w-lg mb-8 text-neutral-200">
          Read the latest news in telecomms and get helpful business advice on
          the company blog. We bring insightful articles that explain how and
          why telecomms will benefit the running of your business.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
