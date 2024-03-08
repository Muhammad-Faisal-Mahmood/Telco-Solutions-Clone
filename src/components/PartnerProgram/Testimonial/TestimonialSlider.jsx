// TestimonialSlider.js
import { useState } from "react";
import Testimonial from "./Testimonial";

const testimonialData = [
  {
    company: "Telecom Consulting Group",
    testimonial:
      "The team at Telcosolutions kick some serious ass and take names. They're a high-volume agency who do it the right way for their agents and customers. They're true telecom pros who can quickly identify the right carrier solution and implement the right solution.",
    representative: "Dan Pirigyi",
    designation: "Partner, Telecom Consulting Group",
    logo: "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9fdc7f475d3e71964a3ac4_TCG.png",
  },
  {
    company: "Pure Technology, Inc",
    testimonial:
      "We’ve been working with TelcoSolutions since the early 2000’s for all our telephone and internet service needs.  When one of our customers need services, we trust TelcoSolutions to provide not only the best price, but the best value as well.  Our team is confident when working with TelcoSolutions that they have the expertise and persistence to make sure our order is placed correctly and installed in a timely manner.  We appreciate the way TelcoSolutions does business and we are happy to be a partner!",
    representative: "Scott McClannahan",
    designation: " President, Pure Technology, Inc",
    logo: "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9fdb698d567a243cc6736e_pure.png",
  },
  {
    company: "MegaPath",
    testimonial:
      "As a longtime Vendor Partner to Erin Conrad and TelcoSolutions, I can always rely on Erin being professional, detail-oriented, accurate, and timely with the way he conducts business and represents his client’s needs.  Not only does this validate value and assurance with his clients, it ensures proper expectations and a pleasant experience for all parties involved with a specific solution that is being provided.",
    representative: "Sean Mitchell",
    designation: "Senior Partner Consultant, MegaPath",
    logo: "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9fd98b67f8be5d9996a36b_ntg.png",
  },
  {
    company: "A//BACS",
    testimonial:
      "I have worked with TelcoSolutions for more than a decade. They provide informative solutions which results in monetary savings and better suitable products for clients. I always find them up in their game, with a good satisfying customer service experience.",
    representative: "Marc Master",
    designation: "Managing Partner, A//BACS",
  },
  {
    company: "Meridian Star POS",
    testimonial:
      "It would be an understatement to say that over the years I’ve happily dealt with TelcoSolutions on many occasions by referring the business of my customers. The simple reason being is that the TelcoSolutions team have made me shine in the eyes of my customers by protecting their wallets. In a similar light to my POS business (where several Food vendors & competitors actually refer their high end restaurant customers to me inlieu of being actually able to  provide low end POS solutions), I have many times observed  overpriced telephony competitors  discreetly take advantage of  TelcoSolutions’ strong ability in providing strong cost savings to  save their sale! In my eyes that’s quite impressive and a badge of honor. Highly recommend them!",
    representative: "Bob Brainard",
    designation: "Senior Account Manager, Meridian Star POS",
    logo: "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9fdaa68d567af702c672ae_ms%5D.png",
  },
  {
    company: "Call Global Solutions",
    testimonial:
      "I have been working with Telco Solutions for over 12 years.  They have never backed away from their commitment to providing the best solution at the best value.  Their service and industry knowledge is top tier and they have never let me or any of my customers down.",
    representative: "Ben Greene",
    designation: "President, Call Global Solutions",
    logo: "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9fdcc3e698fcaddb55482d_cgs.png",
  },
  {
    company: "CT Solutions",
    testimonial:
      "TelcoSolutions has been a great technology partner for CT Solutions.  I have worked with TelcoSolutions for several years and they are always responsive to quote requests and anything we need.  Even with one off opportunities, Telco does a great job of sourcing a vendor.",
    representative: "Barclay Gaston",
    designation: "Senior Sales Manager, CT Solutions",
    logo: "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9fdbd067f8be47d796a7d7_ctsolutions.png",
  },
  {
    company: "Nextiva",
    testimonial:
      "I’ve worked with TelcoSolutions from the beginning.  Throughout this experience, they have demonstrated a tenacity and unrelenting desire to help their customers receive the best value and customer service available. Regardless of the size of the client, they always have put forth the maximum effort in engaging with the client to find out what the best telecom solution is and getting implemented for them in a timely manner.",
    representative: "Nick DuPree",
    designation: " Senior Channel Manager, Nextiva",
    logo: "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b8d2f77fbecdf82d08c3dd2_Nextiva-Logo.png",
  },
  {
    company: "Emerald Data Networks, Inc.",
    testimonial:
      "We at Emerald have worked with Erin Conrad and TelcoSolutions for many years now.  Erin is highly responsive, very knowledgeable and always willing to lend a hand.  We will continue to use TelcoSolutions and recommend them to anyone looking for their services.",
    representative: "Darrell Rodgers",
    designation: "President, Emerald Data Networks, Inc.",
    logo: "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9fdb0de698fc1d74554690_Emerald.png",
  },
  {
    company: "NUsource Technology Group",
    testimonial:
      " We've been working with Telco Solutions for the last 5 years and we couldn't be happier with the team. There is no job size limitation with them, from a small T1 circuit to a 600+ POTS lines upgrade, we've always received the professionalism and responsiveness needed to move forward. I totally recommend them, and look forward to work on more projects together.",
    representative: "Juan Pablo Bustos",
    designation: "Partner, NUsource Technology Group",
    logo: "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9fd9d867f8be0f4d96a395_ntgw.png",
  },
  {
    company: "Southeastern Voice & Data Solutions of Florida",
    testimonial:
      "TelcoSolutions has been a consummate partner in all things carrier related from T-1s to fiber to cable to Hosted VoIP and really helped expand our business opportunities. We never realized the revenue available in this area until they shared their considerable expertise.",
    representative: "Thomas Tobin",
    designation:
      "Vice President, Southeastern Voice & Data Solutions of Florida",
    logo: "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b686eff23db9d1a6efa0902_Logo.png",
  },
  {
    company: "Selective Solutions",
    testimonial:
      "We have partnered with TelcoSolutions for over 15 years. That partnership has been invaluable to us. In a rapidly changing ISP environment. They are always up to date with what is going on in the industry and can provide us with the information we need to make the best long-term decisions for our customers",
    representative: "Ken Holmes",
    designation: "President, Selective Solutions",
    logo: "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9fdb9f8d567a6249c67383_selective.png",
  },
  {
    company: "Premier Telecom Group",
    testimonial:
      "I have worked as an agent with TelcoSolutions for over 13 years. With the resources they provide me, I can easily sell any carrier at any time. In addition, Telco has always been honest and forthcoming on all commissions and they have an open book policy on all carriers’ commissions. Being able to secure my income with a stable master agent is very important these days especially when many masters agencies have taken a hit. TelcoSolutions continues to thrive. I look forward to my prosperous relationship with them moving forward!",
    representative: "David Sweet",
    designation: "Manager, Premier Telecom Group",
    logo: "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9fdc0923b956220aa139f5_PRemiuer.png",
  },
  {
    company: " Firefly Telecommunications",
    testimonial:
      "My company has worked with TelcoSolutions for over a decade. Their comprehensive knowledge of telecom services has always been an asset to making sure our customers get the solutions they need.",
    representative: "Peter Ristuccia",
    designation: "President, Firefly Telecommunications",
    logo: "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9fdc3ee698fc31625547e1_fire.png",
  },
  {
    company: "OneStop Communications",
    testimonial:
      "  As a telecommunications broker, I have many choices with whom I can place my business.  The team at TelcoSolutions is undoubtedly one of my first calls.  They take the time to listen to what my customer needs and make great recommendations.  Once the solution has been implemented, they have maintained an impeccable record of paying on time for the last 13 years!",
    representative: "Teddy Mathis",
    designation: "President, OneStop Communications",
    logo: "https://assets.website-files.com/5b68628a23db9d1747f9f227/5b9fda7623b9563518a13602_ones.png",
  },

  // Add more testimonial data as needed
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonialData.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonialData.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="testimonial-slider flex items-center justify-between p-4">
      <button
        onClick={handlePrev}
        className="text-4xl text-gray-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
      >
        &lt;
      </button>
      <Testimonial
        key={currentIndex} // Ensure a re-render when the index changes
        data={testimonialData[currentIndex]}
        className="transition-opacity duration-300 ease-in-out"
      />
      <button
        onClick={handleNext}
        className="text-4xl text-gray-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
      >
        &gt;
      </button>
    </div>
  );
};

export default TestimonialSlider;
