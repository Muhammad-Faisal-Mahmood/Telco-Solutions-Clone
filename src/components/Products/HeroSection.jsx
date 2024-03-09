/* eslint-disable */

const HeroSection = ({ bgImage, logoImage, heading, paragraph }) => {
  return (
    <div
      className="bg-cover bg-center py-24 xl:px-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
        backgroundPosition: "center",
      }}
    >
      <img className="pl-8" src={`${logoImage}`} />
      <div className="container mx-auto  text-left text-white px-8">
        <h2 className="text-3xl mt-4 mb-2">{heading}</h2>
        <p className="text-neutral-200 text-lg font-bold  py-2 mt-10 mb-8 md:w-[80%] lg:w-[60%] xl:w-[50%]">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
