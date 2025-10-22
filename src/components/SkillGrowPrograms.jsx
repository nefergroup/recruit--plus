// SkillGrowPrograms.jsx
import { FaUserGraduate, FaCertificate, FaPlane } from "react-icons/fa";

const skillGrowPrograms = [
  {
    section: "Personality Development",
    items: [
      "Professional etiquette and workplace behaviour",
      "Leadership and team management skills",
      "Adaptability and problem-solving capabilities",
      "Career planning and professional growth strategies",
    ],
    color: "bg-secondary text-[#3a82c4]",
  },
  {
    section: "Technical Skills Development",
    items: [
      "Advanced manufacturing techniques for steel and construction industries",
      "Digital technology integration for modern workplace requirements",
      "Safety certification and compliance training",
      "Quality management and process optimization",
    ],
    color: "bg-secondary text-[#3a82c4]",
  },
  {
    section: "Language & Communication",
    items: [
      "Professional English proficiency programs",
      "Business communication skills",
      "Cross-cultural communication training",
      "Presentation and leadership skills",
    ],
    color: "bg-secondary text-[#3a82c4]",
  },
];

export default function SkillGrowPrograms() {
  return (
    <div className="bg-primary min-h-screen font-primary px-4 md:px-8 py-10 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-primary text-secondary font-bold mb-10 text-center">
        SkillGrow Academy Core Programs
      </h1>

      {/* Steps Row */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-8 md:gap-10">
        {/* Train in India */}
        <div className="flex flex-col items-center">
          <div className="bg-accent-blue rounded-full p-4 md:p-5">
            <FaUserGraduate size={28} className="text-third-text" />
          </div>
          <span className="text-secondary italic mt-2 font-primary-medium text-sm md:text-base">
            Train in India
          </span>
        </div>

        {/* Connector Line */}
        <div className="hidden md:block border-t-4 border-accent-blue w-12"></div>
        <div className="block md:hidden border-l-4 border-accent-blue h-8"></div>

        {/* Get Certified */}
        <div className="flex flex-col items-center">
          <div className="bg-accent-blue rounded-full p-4 md:p-5">
            <FaCertificate size={28} className="text-third-text" />
          </div>
          <span className="text-secondary italic mt-2 font-primary-medium text-sm md:text-base">
            Get Certified
          </span>
        </div>

        {/* Connector Line */}
        <div className="hidden md:block border-t-4 border-accent-blue w-12"></div>
        <div className="block md:hidden border-l-4 border-accent-blue h-8"></div>

        {/* Work in Europe */}
        <div className="flex flex-col items-center">
          <div className="bg-accent-blue rounded-full p-4 md:p-5">
            <FaPlane size={28} className="text-third-text" />
          </div>
          <span className="text-secondary italic mt-2 font-primary-medium text-sm md:text-base">
            Work in Europe
          </span>
        </div>
      </div>

      {/* Program List */}
      <div className="w-full max-w-2xl space-y-8">
        {skillGrowPrograms.map((prog) => (
          <div
            key={prog.section}
            className="flex flex-col md:flex-row md:items-center  overflow-hidden"
          >
            {/* Section Label */}
            <div
              className={`flex items-center justify-center md:w-64 w-full h-12 md:h-16 ${prog.color} text-center px-2 font-primary-medium text-base md:text-lg`}
            >
              {prog.section}
            </div>

            {/* Items List */}
            <div className="flex-1 py-4 px-5 text-secondary font-primary text-sm md:text-base md:bg-transparent">
              <ul className="list-disc pl-5 space-y-2">
                {prog.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
