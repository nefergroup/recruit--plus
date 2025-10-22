import React from "react";
import { Plus } from 'lucide-react';
import IndustryImageSection from "./IndustryImageSection";

export default function WeldingCourseUI() {
  return (
    <>
      <div className="w-full min-h-screen bg-primary font-primary">
        {/* Top Section */}
        <div className="relative max-w-lg mx-auto pt-10 pb-0 px-4">
          <div className="flex flex-col items-center">
            {/* Header Box */}
            <div className="bg-[#b8e2e6] px-6 py-2 rounded mb-6">
              <span className="font-primary-medium text-[18px] text-secondary">
                6-Month ARC/MIG Welding Course
              </span>
            </div>
            {/* Main Content */}
            <div className="w-full text-center">
              <div className="italic text-[#3a56a5] font-medium mb-1" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>
                Master European Welding Standards
              </div>
              <div className="mb-3">
                <span className="font-primary-bold text-secondary">Advanced ARC Welding Techniques</span>
                <div className="text-[#222222] text-[15px]">Shielded Metal Arc Welding (SMAW)</div>
              </div>
              <div className="mb-3">
                <span className="font-primary-bold text-secondary">MIG Welding Proficiency</span>
                <div className="text-[#222222] text-[15px]">Gas Metal Arc Welding (GMAW)</div>
              </div>
              <div className="mb-3">
                <span className="font-primary-bold text-secondary">European Safety Standards</span>
                <div className="text-[#222222] text-[15px]">Complete compliance training</div>
              </div>
              <div className="mb-3">
                <span className="font-primary-bold text-secondary">Certification</span>
                <div className="text-[#222222] text-[15px]">International welding credentials</div>
              </div>
              <div className="mb-3">
                <span className="font-primary-bold text-secondary">Industry Focus</span>
                <div className="text-[#222222] text-[15px]">
                  Steel &nbsp; manufacturing, &nbsp; construction<br />
                  fabrication
                </div>
              </div>
              <div className="mb-3">
                <span className="font-primary-bold text-primary">Job Opportunities</span>
                <div className="text-[#222222] text-[15px]">€1,500-4,000 monthly in European markets</div>
              </div>
            </div>
            {/* Decorative Crosses (bottom-right) */}
            <div className="absolute right-6 bottom-[-32px] pointer-events-none select-none">
              <svg width="120" height="80" fill="none">
                <g opacity="0.35">
                  <rect x="60" y="28" width="27" height="7" rx="3.5" transform="rotate(45 60 28)" fill="#7ecddc" />
                  <rect x="73" y="33" width="27" height="7" rx="3.5" transform="rotate(-45 73 33)" fill="#7ecddc" />
                  <rect x="90" y="55" width="18" height="4.5" rx="2.25" transform="rotate(45 90 55)" fill="#7ecddc" />
                  <rect x="99" y="58" width="18" height="4.5" rx="2.25" transform="rotate(-45 99 58)" fill="#7ecddc" />
                  <rect x="111" y="20" width="9" height="3" rx="1.5" transform="rotate(45 111 20)" fill="#7ecddc" />
                  <rect x="116" y="22.2" width="9" height="3" rx="1.5" transform="rotate(-45 116 22.2)" fill="#7ecddc" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#434f6b] mt-0 pt-10 pb-8 px-2 md:px-0">
          <div className="max-w-lg mx-auto">
            <div className=" text-accent-blue text-4xl mb-5 font-medium tracking-wide">Our Training Methodology</div>
            <div className="text-white text-sm leading-[2.6] tracking-wide font-light font-primary">
              <div className="mb-2">Hands-On Learning – 70% practical training, 30% theoretical knowledge</div>
              <div className="mb-2">European Standards – All programs meet EU industry requirements</div>
              <div className="mb-2">Language Integration – Technical English and communication skills</div>
              <div className="mb-2">Safety First – Comprehensive safety training and certification</div>
              <div className="mb-2">Job Readiness – Direct preparation for European workplace demands</div>
            </div>
          </div>
        </div>
      </div>



      {/* why chosse us section*/}


      <div className="min-h-screen bg-primary p-8 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-12">
            Why Choose Recruit Plus Europe
          </h1>

          {/* Hero Box */}
          <div className="relative mb-16">
            {/* Badge */}
            <div className="absolute -top-3 left-48 bg-teal-400 text-white px-4 py-2 text-xs sm:text-[10px] sm:px-2 sm:py-1 font-medium shadow-md z-10 scale-100 sm:scale-90 origin-top-left">
              <div className="absolute left-0 top-0 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-teal-500 -translate-x-full"></div>
              12 Years of Proven Excellence
            </div>

            {/* Main Card */}
            <div className="bg-teal-200/60 rounded-2xl p-8 pt-14 sm:p-6 sm:pt-10 shadow-lg">
              <p className="text-slate-700 text-center leading-relaxed text-base sm:text-sm">
                <span className="font-bold">Since 2012</span>, we've successfully facilitated
                thousands of career transitions, building lasting relationships with both candidates
                and employers across our European network.
              </p>
            </div>
          </div>



          {/* Features List */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Plus className="w-6 h-6 text-accent-blue" strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-bold text-slate-700 mb-2">
                  Comprehensive Service Portfolio
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Unlike traditional recruitment agencies, we provide end-to-end solutions
                  including skills development, cultural preparation, and post-placement support
                  ensuring higher success rates and longer-term satisfaction.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Plus className="w-6 h-6 text-accent-blue" strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-bold text-slate-700 mb-2">
                  Strategic European Presence
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our headquarters in Croatia and operations across Latvia, Germany, Serbia,
                  and Qatar provide unmatched regional expertise and local market knowledge.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Plus className="w-6 h-6 text-teal-400" strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-bold text-slate-700 mb-2">
                  Industry Expertise
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Deep specialization in high-demand sectors experiencing acute skilled labour
                  shortages - steel manufacturing, construction, hospitality, and transportation.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Plus className="w-6 h-6 text-accent-blue" strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-bold text-slate-700 mb-2">
                  Ethical Recruitment Practices
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Committed to transparent, fair recruitment processes that benefit both
                  candidates and employers while maintaining the highest professional standards.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Stripes */}
          <div className="mt-12 flex justify-end gap-2 opacity-30">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-10 md:w-6 md:h-20 bg-teal-300 transform skew-x-12"
              />
            ))}
          </div>
        </div>
      </div>
      <IndustryImageSection />
    </>
  );
}
