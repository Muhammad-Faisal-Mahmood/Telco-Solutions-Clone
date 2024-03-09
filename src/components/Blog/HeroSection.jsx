const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center py-44"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://assets.website-files.com/5b68628a23db9d1747f9f227/63beab6fed270d73aa2e2bb0_telco%20solution%20blog.jpg)",
      }}
    >
      <div className="container  flex flex-col px-5   text-white  lg:px-8 xl:px-24">
        <h2 className="text-4xl mb-12">The latest from TelcoSolutions</h2>
        <p className="text-lg max-w-lg mb-8 text-neutral-200">
          Telco Solutions provides voice and data telecom services and solutions
          to the following states, which we can proudly claim is all 50 states!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
