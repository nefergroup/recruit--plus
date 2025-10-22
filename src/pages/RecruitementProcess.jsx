// RecruitmentProcess.jsx
import React from "react";
import bgImage from "../assets/images/recruit-about.jpg";
import SkillGrowPrograms from "../components/SkillGrowPrograms";

export default function RecruitmentProcess() {
  return (
    <>
      <div className="relative w-full bg-primary text-primary font-primary overflow-hidden">
        <section className="max-w-5xl mx-auto px-6 md:px-10 pt-16 pb-4 relative z-10">
          <h2 className="font-heading text-4xl md:text-4xl text-secondary mb-4">
            Our Recruitment Process
          </h2>
          <h3 className="font-primary-bold italic text-third-text text-lg mb-4">
            Bridging the Skills Gap Across Europe
          </h3>
          <p className="font-primary-light text-sm md:text-lg leading-relaxed max-w-3xl mb-40">
            Europe faces a critical skilled labour shortage, with over 42 types of jobs
            experiencing significant gaps, particularly in construction, steel manufacturing,
            hospitality, and transportation. Our recruitment expertise addresses these challenges
            by connecting European employers with highly skilled professionals from India and Nepal.
          </p>
        </section>

        {/* Background Image Area */}
        <div
          className="absolute left-0 bottom-0 w-full h-[36vh] sm:h-[40vh] bg-cover bg-center z-0 mt-10"
          style={{
            backgroundImage: `linear-gradient(rgba(233,247,253,0.3), rgba(233,247,253,0.92)), url(${bgImage})`,
          }}
        ></div>

        {/* Dark Box (reduced size on small screens) */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-[calc(36vh-20%)] w-[90%] max-w-[900px]"
        >
          <div className="bg-[#434f6b] text-white p-5 sm:p-8 md:p-10 shadow-lg text-sm sm:text-base md:text-base">
            <ul className="space-y-3 sm:space-y-4 md:space-y-5 font-primary-light leading-relaxed">
              <li>
                <span className="font-primary">Comprehensive Candidate Assessment – </span>
                Technical skills evaluation, language proficiency testing, and cultural fit analysis
              </li>
              <li>
                <span className="font-primary">Documentation & Compliance – </span>
                Complete visa assistance, work permit processing, and legal compliance management
              </li>
              <li>
                <span className="font-primary">Pre-Departure Preparation – </span>
                Cultural orientation, professional training, and career counselling
              </li>
              <li>
                <span className="font-primary">Post-Placement Support – </span>
                Ongoing assistance for successful integration and career development
              </li>
            </ul>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-[45vh] sm:h-[40vh]"></div>
      </div>

      <SkillGrowPrograms />
    </>
  );
}
