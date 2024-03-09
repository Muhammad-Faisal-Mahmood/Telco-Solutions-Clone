import GeneralButton from "./GeneralButton";

const WhoIsTelco = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Column */}
        <div className="md:mr-16 md:ml-24 md:py-16 mx-4">
          <h2 className="text-3xl font-bold mb-12 mt-8">
            Who is TelcoSolutions?
          </h2>
          <p className="text-gray-700 mb-8 font-semibold">
            With over 75 years of combined experience, the TelcoSolutions team
            has a wealth of knowledge in the telecom sector. We have seen
            drastic changes occur throughout this time, and have made it our
            priority to stay ahead of the curve to be able to offer our clients
            the right solutions at the best prices. We are able to do this by
            leveraging the 180 providers in our portfolio to find the correct
            business telecommunications solution for our individual clients.
          </p>
          <p className="text-gray-700 mb-8 font-semibold">
            Customer satisfaction is of utmost importance to us. Through our
            dedicated account management team, we ensure that the installation,
            on-boarding, billing, and customer service are all accounted for and
            run as smoothly and efficiently as possible. Our experienced
            professionals and desire to maintain high levels of customer
            satisfaction are what set us apart from our competitors.
          </p>

          <GeneralButton>
            <div className="font-semibold px-4">Learn More</div>
          </GeneralButton>
        </div>

        {/* Second Column */}
        <div>
          {/* Responsive Embed YouTube Video */}
          <div className="md:h-full h-96">
            <iframe
              title="TelcoSolutions Video"
              src="https://www.youtube.com/embed/vmudbcJDAEE"
              allowFullScreen
              style={{ width: "100%", height: "100%" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsTelco;
