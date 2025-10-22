// SpecializationAreas.jsx
import React from "react";
import SpecializationImages from "../components/SpecializationImages";

export default function Specialization() {
  return (
    <div className="min-h-screen w-full bg-primary flex flex-col items-center font-primary text-primary relative overflow-hidden">
      {/* Title */}
      <h2 className="font-primary text-3xl text-secondary mt-10 mb-12 tracking-tight">
        Our Specialization Areas
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0 max-w-4xl relative z-10 mb-28">
        {/* Hospitality Sector */}
        <div className="bg-secondary shadow-lg px-6 py-8 w-full flex flex-col items-center text-center">
          <span className="font-heading text-3xl text-accent-blue mb-2">01</span>
          <h3 className="font-primary-bold text-lg mb-3">Hospitality Sector</h3>
          <p className="font-primary-light text-base text-primary">
            European hospitality continues expanding post-pandemic, requiring diverse skilled professionals.
            We recruit experienced chefs, hotel managers, housekeeping supervisors, and service specialists who understand international standards.
          </p>
        </div>

        {/* Construction Industry */}
        <div className="bg-secondary shadow-lg px-6 py-8 w-full flex flex-col items-center text-center">
          <span className="font-heading text-3xl text-accent-blue mb-2">02</span>
          <h3 className="font-primary-bold text-lg mb-3">Construction Industry</h3>
          <p className="font-primary-light text-base text-primary">
            With construction labour shortages now three times higher than a decade ago across EU member states,
            we provide skilled tradespeople including carpenters, electricians, plumbers, project managers, and specialized construction technicians.
          </p>
        </div>

        {/* Steel Structure */}
        <div className="bg-secondary shadow-lg px-6 py-8 w-full flex flex-col items-center text-center">
          <span className="font-heading text-3xl text-accent-blue mb-2">03</span>
          <h3 className="font-primary-bold text-lg mb-3">
            Steel Structure & Component Manufacturing
          </h3>
          <p className="font-primary-light text-base text-primary">
            The European steel industry supports 2.5 million jobs and generates €123 billion in turnover annually.
            We supply qualified metallurgical engineers, welders, structural steel technicians, process operators, and maintenance specialists.
          </p>
        </div>

        {/* Transport & Logistics */}
        <div className="bg-secondary shadow-lg px-6 py-8 w-full flex flex-col items-center text-center relative z-10">
          <span className="font-heading text-3xl text-accent-blue mb-2">04</span>
          <h3 className="font-primary-bold text-lg mb-3">Transportation & Logistics</h3>
          <p className="font-primary-light text-base text-primary">
            Supporting Europe's growing transportation infrastructure needs with qualified drivers,
            logistics coordinators, warehouse managers, and transportation technicians.
          </p>
        </div>
      </div>

      <SpecializationImages />

    </div>
  );
}
