// Testimonial.js
import React from "react";

const Testimonial = ({ data, className }) => {
  const { company, testimonial, representative, designation, logo } = data;

  return (
    <div className={`testimonial p-6 h-80 text-center ${className}`}>
      <h2 className=" font-semibold mb-12">{company}</h2>
      <p className="text-gray-700 mb-12 font-semibold">{testimonial}</p>
      <p className="text-sm text-gray-600">
        <strong>{representative}</strong>, {designation}
      </p>
      {logo && (
        <div className=" my-12 flex justify-center">
          <img className="w-60" src={logo} />
        </div>
      )}
    </div>
  );
};

export default Testimonial;
