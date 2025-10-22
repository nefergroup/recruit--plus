// PlacementServices.jsx
import React from 'react';

const services = [
    {
        title: "Career Counselling",
        description: "Personalized career pathway planning and goal setting",
    },
    {
        title: "Interview Preparation",
        description: "Comprehensive training for European workplace expectations",
    },
    {
        title: "Relocation Support",
        description: "Complete assistance with housing, banking, and administrative setup",
    },
    {
        title: "Contract Negotiation",
        description: "Ensuring fair terms and conditions for all placements",
    },
    {
        title: "Resume & Portfolio Development",
        description: "Professional documentation aligned with European standards",
    },
    {
        title: "Integration Programs",
        description: "Ongoing support for cultural adaptation and career growth",
    },
];

export default function PlacementServices() {
    return (
        <>
            {/* Intro Section */}
            <div
                className="py-12 px-8 font-primary text-[#434f6b]"
                style={{
                    background: "linear-gradient(to left, #bfcee4 0%, #bfe1ec 100%)",
                }}
            >
                <div className="max-w-4xl mx-auto text-center md:text-left">
                    <p className="text-base md:text-lg italic leading-relaxed">
                        <strong>Recruit Plus Europe - Job Placement Services</strong>
                        <br />
                        Recruit Plus Europe manages the entire placement process from initial consultation to successful career establishment in Europe. Our comprehensive approach ensures sustainable career transitions for skilled professionals.
                    </p>
                </div>
            </div>


            {/* Services Section */}
            <div className="bg-primary py-16">
                <h2 className="text-3xl font-semibold text-center mb-10 font-heading text-[#2a3856]">
                    Placement Services
                </h2>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0">
                    {services.map(({ title, description }) => (
                        <div
                            key={title}
                            className="bg-[#b8e2e6] p-5  hover:shadow-md transition-shadow duration-200"
                        >
                            <h3 className="text-xl mb-1 font-medium text-[#2a3856]">{title}</h3>
                            <p className="text-sm font-light text-[#434f6b]">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
