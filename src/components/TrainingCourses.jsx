import React from "react";
import training from '../assets/images/recruit-banner.jpeg'
import training2 from '../assets/images/training3.jpeg'
const courses = [
    {
        title: "6-Month Steel Fitter Course",
        subTitle: "Build Europe's Infrastructure",
        items: [
            { title: "Structural Steel Assembly", desc: "Complex framework construction" },
            { title: "Blueprint Reading", desc: "Technical drawing interpretation" },
            { title: "Precision Fitting Techniques", desc: "European quality standards" },
            { title: "Safety Protocols", desc: "Advanced safety management" },
            { title: "Tool Mastery", desc: "Professional equipment operation" },
            { title: "Career Path", desc: "Steel construction, infrastructure projects" },
        ],

        headerBg: "bg-[#b8e2e6]",
        text: "text-[#434f6b]",
    },
    {
        title: "5-Month Brick Wall Mason Course",
        subTitle: "Traditional Craftsmanship, Modern Standards",
        items: [
            { title: "European Masonry Techniques", desc: "Advanced brick laying methods" },
            { title: "Mortar Technology", desc: "Modern binding materials" },
            { title: "Quality Control", desc: "Precision measurement and alignment" },
            { title: "Project Management", desc: "Site coordination skills" },
            { title: "Certification", desc: "Professional mason credentials" },
            { title: "Employment Sectors", desc: "Residential, commercial construction" },
        ],

        headerBg: "bg-[#b8e2e6]",
        text: "text-[#434f6b]",
    }
];

export default function TrainingCoursesUI() {
    return (
        <div className="min-h-screen bg-primary py-10">
            <div className="max-w-2xl mx-auto">
                <div className="flex flex-row justify-between space-x-6 mb-24">
                    {courses.map((course) => (
                        <div key={course.title} className="w-[48%]">
                            <div className={`${course.headerBg} py-2 rounded-t-lg`}>
                                <h2 className=" text-sm md:text-md  font-small md:font-medium text-center text-secondary">{course.title}</h2>
                            </div>
                            <div className={`${course.bg} px-4 py-4 rounded-b-lg`}>
                                <p className={`italic text-center mb-4 ${course.text} text-third-text font-medium text-sm `}>{course.subTitle}</p>
                                {course.items.map((item) => (
                                    <div className="mb-2 text-center" key={item.title}>
                                        <span className="font-medium text-secondary">{item.title}</span>
                                        <span className="block text-sm text-gray-700">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative bg-[#434f6b] px-4 sm:px-6 py-20 min-h-[220px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[440px] flex flex-col items-center justify-center overflow-visible">
                {/* Top Image - Absolute, slightly left, peeking outside */}
                <div className="absolute left-4 sm:left-6 md:left-10 lg:left-28 -top-12 sm:-top-16 md:-top-20 lg:-top-24 z-10">
                    <img
                        src={training}
                        alt="Brick Mason"
                        className="w-[220px] h-[120px]
                        sm:w-[320px] sm:h-[150px]
                        md:w-[380px] md:h-[180px]
                        lg:w-[420px] lg:h-[200px]
                        xl:w-[520px] xl:h-[220px]
                        2xl:w-[580px] 2xl:h-[240px]
                        object-cover rounded shadow-lg transition-all duration-300"
                    />
                </div>

                {/* Bottom Image - Relative, slightly right inside container */}
                <div className="relative mt-2 -right-24 md:-right-44 translate-x-8 sm:translate-x-12 md:translate-x-16 z-0">
                    <img
                        src={training2}
                        alt="Steel Fitter"
                        className="w-[220px] h-[120px]
                        sm:w-[320px] sm:h-[150px]
                        md:w-[380px] md:h-[180px]
                        lg:w-[420px] lg:h-[200px]
                        xl:w-[520px] xl:h-[220px]
                        2xl:w-[580px] 2xl:h-[240px]
                        object-cover rounded shadow-lg transition-all duration-300"
                    />
                </div>
            </div>





        </div>
    );
}
