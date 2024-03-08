const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center py-40 px-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://assets.website-files.com/5b68628a23db9d1747f9f227/5b984aee607a0971d0d2136c_customers.jpg)",
        backgroundPosition: "center ",
      }}
    >
      <div className="container mx-auto  text-left text-white px-8">
        <img src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b983f30d05a70c62dab5fea_Customers.svg" />
        <h2 className="text-3xl mt-4 mb-2">Current Customers</h2>
        <p className="text-neutral-400 text-lg font-bold w-[50%] py-2 mt-10 mb-8">
          Since 2004 TelcoSolutions has been the lead consultant for over 5000+
          businesses regarding their voice and data solutions.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
