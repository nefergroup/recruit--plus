import React from "react";

const Services = () => {
  const jobs = [
    "General Mason",
    "Tile Mason, Steel Fixer",
    "Shuttering Carpenter",
    "Electrician, Plumber",
    "Painter",
    "TIG Welders",
    "MIG/MAG Welders",
    "Steel Fitters",
    "Trailer Drivers",
    "Bus Drivers",
    "Warehouse Assistants",
    "Factory Workers",
    "Nurse",
    "Care Givers",
    "House Keeping",
    "Chefs and Waiters",
  ];

  return (
    <>
      <div className="relative min-h-screen bg-primary overflow-hidden flex flex-col items-center md:items-start px-4 md:px-16">
        {/* Heading section (top of screen) */}
        <div className="z-20 text-left mt-8  max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary">
            International Recruitment Services
          </h1>
          <p className="text-base md:text-lg mt-2 text-accent-blue italic">
            We train workers for the following jobs:
          </p>
        </div>

        {/* Background diagonal design */}
        <div className="absolute w-[150%] h-[20%] bg-[#434f6b] rotate-[15deg] top-[40%] -left-[25%]"></div>
        <div className="absolute w-[150%] h-5 bg-[#434f6b] rotate-[15deg] top-[55%] -left-[25%]"></div>

        {/* Left side box with job list */}
        <div className="absolute left-0 top-[25%] md:top-[25%] w-[250px] sm:w-[300px] md:w-[400px] bg-[#bee5ed] z-10 p-4">
          <ul className="text-sm md:text-base font-medium mt-5 text-secondary leading-6 text-left list-none space-y-1">
            {jobs.map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom info section */}
      <div className="py-12 px-4 md:px-16 bg-blue-50">
        <div className="max-w-4xl">
          <p className="text-slate-700 leading-relaxed">
            <span className="font-bold text-lg">Important:</span>{" "}
            <span className="font-semibold">
              India office is only a back end office for all education, training and administrative support and is not in the business of recruitment.{" "}
            </span>
            <span className="font-normal">
              All recruitment process is handled by Recruit Plus Europe directly.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
