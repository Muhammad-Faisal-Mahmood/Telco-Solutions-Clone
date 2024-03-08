import React from "react";

const WhyPeopleChooseUs = () => {
  return (
    <div
      className="bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9ad62b6219fee6d2595ab4_shutterstock_637073704.jpg)",
      }}
    >
      <div className="container mx-auto text-white text-center px-16">
        <h2 className="text-3xl mt-4 mb-8">Why People Choose Us</h2>
        <p className="text-md font-semibold mb-20">
          With over 75 years of combined experience, the TelcoSolutions team has
          a wealth of knowledge in the telecom sector. We have seen drastic
          changes occur throughout this time, and have made it our priority to
          stay ahead of the curve to be able to offer our clients the right
          solutions at the best prices. We are able to do this by leveraging the
          180 providers in our portfolio to find the correct solution for our
          individual clients. Customer satisfaction is of utmost importance to
          us. Through our dedicated account management team, we ensure that the
          installation, on-boarding, billing, and customer service are all
          accounted for and run as smoothly and efficiently as possible. Our
          experienced professionals and desire to maintain high levels of
          customer satisfaction are what set us apart from our competitors.
        </p>
        <div className="flex justify-center">
          {/* Card 1 */}
          <div className="mx-4">
            <img
              src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b97ce6f572072c162f11856_people-p-500.png"
              alt="Experienced Professionals"
              className="w-64 h-auto mx-auto mb-8"
            />
            <h3 className="text-2xl mb-4">Experienced Professionals</h3>
            <p className="text-sm">
              With over 75 years of combined experience, the TelcoSolutions team
              has a wealth of knowledge in the telecom sector.
            </p>
          </div>
          {/* Card 2 */}
          <div className="mx-4">
            <img
              src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b7daddd1296146a1f2f0dd9_Chosen.png"
              alt="Experienced Professionals"
              className="w-48 h-auto mx-auto mb-8"
            />
            <h3 className="text-2xl mb-4">Vast Product Line</h3>
            <p className="text-sm">
              We represent a vast range of providers that prove to be stable,
              affordable and trusted partners. We only acquire top quality
              service.
            </p>
          </div>
          {/* Card 3 */}
          <div className="mx-4">
            <img
              src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b717e91b3323ecbff032832_customers.png"
              alt="Experienced Professionals"
              className="w-[85px] h-auto mx-auto mb-8"
            />
            <h3 className="text-2xl mb-4">Customer Satisfaction</h3>
            <p className="text-sm">
              We are so happy with TelcoSolutions. Not only did they provide us
              with a service we can count on, they reduced our costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPeopleChooseUs;
