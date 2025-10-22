import React from "react";
import aboutImg from "../assets/images/recruit-about.jpg";

const About = () => {
  return (
    <div className="bg-primary min-h-screen flex flex-col font-secondary text-primary">
      {/* --- Top Section --- */}
      <div className="relative w-full h-[450px]">
        {/* Split background: top plain color, bottom image */}
        <div className="absolute inset-0 bg-primary" />

        <div className="absolute bottom-0 w-full h-[70%] overflow-hidden">
      <img
        src={aboutImg}
        alt="Office Background"
        className="w-full h-full object-cover object-center"
      />

      {/* 🔹 Blue transparent shadow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#69989e]/80 to-[#69989e]/10"></div>
     
    </div>

        {/* Overlay Box */}
        <div
          className="absolute top-1/2 left-6 md:left-16 transform -translate-y-1/2 
          bg-[#434f6b] text-white p-6 md:p-10 max-w-sm md:max-w-md shadow-lg"
        >
          <h2 className="font-primary text-lg md:text-xl mb-4">
            About Recruit Plus Europe
          </h2>
          <p className="text-sm leading-relaxed mb-4 font-light">
            Established in 2012, Recruit Plus is a comprehensive human resources
            and recruitment organization headquartered in Croatia with strategic
            operations across Europe. We operate through three specialized
            divisions:
          </p>

          <ul className="text-sm space-y-2 font-light">
            <li>
              <span className="text-accent-teal font-bold">+</span>{" "}
              <span className="font-bold">Recruit Plus</span> – Our core
              recruitment and HR consultancy services
            </li>
            <li>
              <span className="text-accent-teal font-bold">+</span>{" "}
              <span className="font-bold">SkillGrow Academy</span> – Professional
              skill development and personality enhancement programs
            </li>
            <li>
              <span className="text-accent-teal font-bold">+</span>{" "}
              <span className="font-bold">Vision 360 Degree d.o.o.</span> –
              Specialized job placement and career transition services
            </li>
          </ul>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div className="max-w-4xl mx-auto py-16 px-6 text-left leading-relaxed">
        <h3 className="font-primary-bold text-lg md:text-xl mb-4">
          Why Europe Needs Your Skills
        </h3>

        <p className="text-md text-gray-700 mb-4 font-primary">
          The European Union faces critical skilled labour shortages with over
          42 types of jobs experiencing significant gaps. Construction labour
          shortages are now three times higher than a decade ago, while 82% of
          German employers report difficulty finding qualified candidates. Our
          specialized programs address these exact industry needs.
        </p>

        <p className="text-md text-gray-700 font-primary">
          Our extensive European network spans five key markets, positioning us
          uniquely to address the growing skilled labour shortage across
          construction, steel manufacturing, hospitality, healthcare, and
          transportation industries.
        </p>

        {/* Decorative underline */}
        <div className="mt-8 h-1 w-32 bg-accent-teal rounded-full"></div>
      </div>
    </div>
  );
};

export default About;
