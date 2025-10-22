import React from "react";
import training from '../assets/images/training.jpeg'
import training2 from '../assets/images/training2.jpeg'
export default function SkillGrowAcademy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#c2c5de] to-[#dde7f4]">
            {/* Top Section */}
            <div className="pt-12 pb-16 px-8 bg-gradient-to-b from-[#c2c5de] to-[#dde8f5]">
                <div className="max-w-2xl mx-auto">
                    <p className="italic text-lg font-medium mb-2 text-[#414b5a]">
                        Industry–Specific Training:
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed">
                        Our curriculum aligns with European industry standards,
                        ensuring graduates meet the specific requirements of steel
                        manufacturing, construction, hospitality, and transportation sectors.
                    </p>
                </div>
            </div>
            {/* Middle Section */}
            <div className="bg-primary pt-8 pb-12">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-lg font-semibold text-[#5B657A] mb-4">
                        Building Blue Collar Excellence
                    </p>
                    <div className="flex items-center justify-center mb-6 gap-3">
                        <div className="rounded-full bg-[#405996] w-12 h-12 flex items-center justify-center">
                            {/* Helmet Icon (SVG) */}
                            <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
                                <circle cx="14" cy="14" r="14" fill="#405996"></circle>
                                <path
                                    d="M9.5 14.5V13a4.5 4.5 0 119 0v1.5"
                                    stroke="#fff"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M10 18.5h8"
                                    stroke="#fff"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M12 17v1.5M16 17v1.5"
                                    stroke="#fff"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <span className="font-bold text-xl text-[#23272f] ml-1">
                            SkillGrow Academy
                        </span>
                    </div>
                    <p className="uppercase tracking-wide text-sm text-[#8a98af] mb-7">
                        EUROPE JOB TRAINING CENTRE
                    </p>
                    <h2 className="text-2xl font-semibold text-[#505a73] mb-4">
                        Training Programs Designed for Europe
                    </h2>
                    <p className="text-[#545759] text-base px-4 mb-7">
                        SkillGrow Academy specializes in training Indian workers for global construction employment, with all programs aligned to European industry standards. Our mission: making you certified, job-ready, and internationally employable.
                    </p>
                </div>
                {/* Image Row */}
                <div className="flex items-center justify-center gap-4 px-8">
                    <div className="w-[230px] h-[130px] md:w-[270px] md:h-[200px] overflow-hidden rounded-tl-4xl rounded-tr-4xl rounded-bl-4xl">
                        <img
                            src={training}
                            alt="Training Session"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-[230px] h-[130px] md:w-[270px] md:h-[200px] overflow-hidden rounded-tl-4xl rounded-tr-4xl rounded-br-4xl">
                        <img
                            src={training2}
                            alt="Equipment Room"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>


            </div>
        </div>
    );
}
