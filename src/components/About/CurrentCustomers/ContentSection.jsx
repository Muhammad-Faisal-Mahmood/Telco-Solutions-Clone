import React from "react";
import ProductsRange from "../../ProductsRange";

const ContentSection = () => {
  return (
    <div className="flex px-32">
      <div className="w-full md:w-[60%] ">
        <h1 className="mt-10 mb-24 text-neutral-700 font-semibold">
          Our customer base is filled with a diverse listing of customers
          engaged in almost every conceivable type of commerce in all 50 states.
          From the Fortune 500 to your local dentist’s office… we have unmatched
          expertise.
        </h1>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div>
              <h1 className="text-2xl text-neutral-500">FORTUNE </h1>
              <ul className="list-disc ml-10 mt-2 text-neutral-500 font-semibold">
                <li>Canon</li>
                <li>Zenith</li>
                <li>IBM</li>
                <li>Volkswagen</li>
              </ul>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl text-neutral-500">GOVERNMENT</h1>
              <ul className="list-disc ml-10 mt-2 text-neutral-500 font-semibold">
                <li>Consulate General of France</li>
                <li>US Navy</li>
                <li>USDA</li>
                <li>City of Newnan, GA</li>
                <li>City of Morrow, GA</li>
                <li>City of Carrolton, TX</li>
              </ul>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl text-neutral-500">ENVIRONMENTAL</h1>
              <ul className="list-disc ml-10 mt-2 text-neutral-500 font-semibold">
                <li>Georgia Wildlife Federation</li>
                <li>Tennessee Valley Recycling</li>
                <li>US Department of Agriculture</li>
              </ul>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl text-neutral-500">EDUCATIONAL</h1>
              <ul className="list-disc ml-10 mt-2 text-neutral-500 font-semibold">
                <li>Brenau University</li>
                <li>Creative Montessori School</li>
                <li>Georgia State University</li>
              </ul>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl text-neutral-500">INSURANCE INDUSTRY</h1>
              <ul className="list-disc ml-10 mt-2 text-neutral-500 font-semibold">
                <li>Allstate</li>
                <li>GA Farm Bureau</li>
                <li>Nationwide</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className="text-2xl text-neutral-500">SERVICE INDUSTRY</h1>
              <ul className="list-disc ml-10 mt-2 text-neutral-500 font-semibold">
                <li>Action Heating & Air</li>
                <li>North West Plumbing</li>
                <li>Tin Lizzy’s</li>
                <li>Two Men & A Truck</li>
              </ul>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl text-neutral-500">
                MEDICAL-DENTAL INDUSTRY
              </h1>
              <ul className="list-disc ml-10 mt-2 text-neutral-500 font-semibold">
                <li>Atlanta Oncology</li>
                <li>Cobb Kidney Center</li>
                <li>Morrison Dental</li>
                <li>Women’s Healthcare Association</li>
                <li>South Atlanta Medical Clinics</li>
              </ul>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl text-neutral-500">METRO ATLANTA AREA</h1>
              <ul className="list-disc ml-10 mt-2 text-neutral-500 font-semibold">
                <li>Atlantic Station</li>
                <li>Atlanta Primary Care</li>
                <li>GA Association of Realtors</li>
                <li>Peachtree Neurosurgery</li>
                <li>First Communities Property Group</li>
                <li>American Israeli Chamber of Commerce</li>
              </ul>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl text-neutral-500">LEGAL SECTOR</h1>
              <ul className="list-disc ml-10 mt-2 text-neutral-500 font-semibold">
                <li>Aldridge/Connors, LLP</li>
                <li>Lamb & Lurch</li>
                <li>Southern Center for Human Rights</li>
              </ul>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl text-neutral-500">AUTO INDUSTRY</h1>
              <ul className="list-disc ml-10 mt-2 text-neutral-500 font-semibold">
                <li>Capital Cadillac Hummer</li>
                <li>Orange Buick Pontiac GMC</li>
                <li>Southtowne Hyundai Isuzu</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="font-md font-semibold text-neutral-700">
            Are you ready to upgrade your internet services? Contact
            TelcoSolutions and
            <span className="text-green-600"> get a free quote today!</span>
          </h1>
        </div>
        <div className="mt-10 mb-40">
          <h1 className="font-md  text-neutral-600">
            *T1 prices are subject to the mileage distance from the nearest
            servicing office. Rates may be higher for longer T1 loops.
          </h1>
        </div>
      </div>
      <div className="w-full md:w-[40%] relative ">
        <div className="absolute w-full ">
          <ProductsRange />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
