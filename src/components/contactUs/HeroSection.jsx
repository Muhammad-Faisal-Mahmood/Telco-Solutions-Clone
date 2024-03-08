const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center py-20 px-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9ff05c4359f4832b2ac613_Contact-min.jpg)",
        backgroundPosition: "center top",
      }}
    >
      <div className="container mx-auto  text-left text-white px-8">
        <h2 className="text-3xl mt-4 mb-2">Contact</h2>
        <p className="text-neutral-200 text-lg font-bold w-[50%] py-2 mt-10 mb-8">
          Do you want to get the best price from your telecommunications service
          provider? You’ve come to the right place. We act as a conduit between
          major service providers and businesses.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
