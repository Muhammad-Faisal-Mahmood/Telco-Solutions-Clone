const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center py-40 px-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://assets.website-files.com/5b68628a23db9d1747f9f227/5b99a27058e3593e78ba1dd1__testimonials-min.jpg)",
        backgroundPosition: "center ",
      }}
    >
      <div className="container mx-auto  text-left text-white px-8">
        <h2 className="text-3xl mt-4 mb-2">Testimonials</h2>
        <p className="text-neutral-200 text-lg font-bold w-[50%] py-2 mt-10 mb-8">
          Telco Solutions provides voice and data telecom services and solutions
          to the following states, which we can proudly claim is all 50 states!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
