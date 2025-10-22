import React from "react";
import bgImage from "../assets/images/industry.png"; // 🔹 Replace with your actual image path

const IndustryImageSection = () => {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#003366]/50 mix-blend-multiply"></div>

      {/* Decorative Top Stripes */}
      <div className=" py-3 flex justify-start gap-2 opacity-30">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="w-3 h-10 md:w-6 md:h-20 bg-teal-300 transform skew-x-12"
            />
          ))}
        </div>
    </section>
  );
};

export default IndustryImageSection;
