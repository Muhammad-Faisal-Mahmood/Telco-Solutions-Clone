const PartnerSection = () => {
  return (
    <>
      <div className="flex-col pl-10 pr-5 lg:flex lg:flex-row lg:px-0 lg:pl-10 xl:px-36">
        {/* First Section */}
        <div className="w-full pt-20 lg:w-[60%] lg:px-2 lg:pt-20  xl:p-16">
          <h1 className="text-4xl font-bold mb-4 font-sans">
            Join a Partnership Program Designed for Managed Services Providers
            and IT Companies
          </h1>
          <p className="mb-8 font-semibold">
            Join our many successful partners and earn industry-leading
            commissions through our Partner Referral Program.
          </p>
          <p className="mb-8 font-semibold">
            Since 2004, TelcoSolutions has worked with IT companies and Managed
            Services Providers, enabling them to offer their clients the best
            voice and data solutions while earning competitive commissions and
            upfront bonuses in the process. We work with over 180 providers to
            ensure that your clients have access to the correct solution for
            their unique situation.
          </p>
          <h3 className="text-4xl font-bold mb-4 font-sans">
            How our MSP Partner Program works
          </h3>
          <p className="mb-8 font-semibold">
            Introducing your clients to us is simple, easy and rewarding, and
            you can be confident that we’ll offer the same quality level of
            analysis and best-practice solutions that we give to all of our
            direct customers.
          </p>

          <p className="mb-8 font-semibold">
            There’s no long-term contract or commitment, and our quotas are
            minimal. Just two deals per calendar year is enough to make sure you
            retain all the benefits of the partnership. If you need support to
            get started, we can help. Our customized partnerships offer varying
            levels of support, depending on your needs, that allow you to start
            earning commissions right away. TelcoSolutions can manage everything
            from engaging on the initial sale, project management and ongoing
            consultancy throughout the lifecycle of the account.
          </p>

          <h3 className="text-4xl font-bold mb-4 font-sans">
            How you can benefit by adding voice and data to your MSP
            proposition?
          </h3>

          <p className="mb-8 font-semibold">
            Being a Partner allows you to earn passive income, turning a client
            relationship into a whole new revenue stream for your business.
            Here’s a few of the reasons our Partners are so happy with the
            Program:
          </p>

          <p className="mb-8 font-semibold ml-8">
            <ul className="list-disc ml-6">
              <li className="font-semibold">
                Flexible arrangement with no long-term commitment
              </li>
              <li className="font-semibold">
                Guaranteed lowest market rates regardless of where customers are
                located or which products and services they’re looking for
              </li>
              <li className="font-semibold">
                Access to over 75 years of combined experience, with more
                product knowledge, carrier relationships and market
                understanding than any other retail source
              </li>
              <li className="font-semibold">
                Regular monthly commissions (15th of each calendar month) with
                first payments often starting within 45 days of paperwork
                completion.
              </li>
            </ul>
          </p>

          <p className="mb-8 font-semibold">
            Let us help you close your IT, telephony and hardware deals with our
            creative carrier solutions; become one of our many happy partners
            and offer your customers the best value carrier services around. To
            find out more, please contact:
          </p>
        </div>

        {/* Second Section */}
        <div className="w-full lg:w-[40%]">
          {/* Partner Form */}
          <div
            className="mb-8  py-12 px-8 "
            style={{ backgroundColor: "#74c7f5" }}
          >
            <h1 className="text-3xl mb-8 text-white">
              Want to become our partner?
            </h1>
            <p className="mb-4 text-white font-semibold">
              Want to become a partner? You can make that happen. Sign up below,
              and we’ll contact you with all the details.
            </p>
            <form>
              <div className="mb-4">
                <input
                  style={{ boxShadow: "4px 4px 0px #55a3cc" }}
                  className="border w-full py-2 px-3"
                  placeholder="Contact Name*"
                  type="text"
                  id="contact"
                  name="contact"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  style={{ boxShadow: "4px 4px 0px #55a3cc" }}
                  className="border w-full py-2 px-3"
                  placeholder="Email*"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  style={{ boxShadow: " 4px 4px 0px #55a3cc" }}
                  className="border w-full py-2 px-3"
                  placeholder="Phone Number*"
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  style={{ boxShadow: "4px 4px 0px #55a3cc" }}
                  className="border w-full py-2 px-3"
                  id="additionalInfo"
                  name="additionalInfo"
                />
              </div>
              <button
                style={{
                  backgroundColor: "#8dc541",
                  boxShadow: "4px 4px 0px #7ea943",
                }}
                className=" text-white py-4 px-4 w-full font-semibold text-md"
                type="submit"
              >
                Become a partner
              </button>
            </form>
          </div>

          {/* Message from Erin Conrad */}
          <div
            className="bg-gray-200 pt-12 pb-12 px-8"
            style={{ backgroundColor: "#a7a7a7" }}
          >
            <h1 className="text-3xl mb-8 text-white">
              A message from Erin Conrad
            </h1>
            <p className="mb-4 text-white">
              TelcoSolutions has been steadily growing for almost 15 years with
              the help of our most valuable asset – our PARTNERS! This sustained
              growth did not happen by accident. We have cultivated long
              standing relationships with our partners because we are able to
              leverage our agreements with over 180 service providers.
            </p>
            <p className="mb-4 text-white">
              If you are looking to expand your current income stream or start a
              new business, you have come to the right place. We work with all
              size partners and customers offering you a chance to make a great
              residual income and ensuring that your clients are always taken
              care of.
            </p>
            <p className="text-white">
              Please do not hesitate to call me at{" "}
              <a href="tel:866-844-2181">866-844-2181</a> for additional
              information regarding our partner program.
            </p>
            <img
              src="https://assets.website-files.com/5b68628a23db9d1747f9f227/5b7701ded79b52bf159c155a_erin.png"
              alt="Erin Conrad"
              className="mt-12 w-36"
            />
          </div>
        </div>
      </div>
      <div
        className="px-10 lg:px-20 xl:px-52 py-8 font-bold"
        style={{ color: "#8dc541" }}
      >
        <text>Erin Conrad</text>
        <p>
          <a href="tel:866-844-2181">866-844-2181</a>
        </p>
      </div>
    </>
  );
};

export default PartnerSection;
