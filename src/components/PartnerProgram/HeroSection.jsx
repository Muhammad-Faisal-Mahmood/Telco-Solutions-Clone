const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center py-52 px-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://assets.website-files.com/5b68628a23db9d1747f9f227/5b99a270352e242b050b4eda__partners-min.jpg)",
        backgroundPosition: "center top",
      }}
    >
      <img
        className="pl-8"
        src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b76ff31a911bdd0896eb805_partner_pgm.svg"
      />
      <div className="container mx-auto  text-left text-white px-8">
        <h2 className="text-3xl mt-4 mb-2">Become a partner today!</h2>
        <p className="text-neutral-200 text-lg font-bold w-[50%] py-2 mt-10 mb-8">
          Join our many successful partners and earn industry-leading
          commissions through our Partner Referral Program.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
