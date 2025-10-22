// CareerTransitionBanner.jsx
import React from 'react';
import warehouseImg from '../assets/images/career.png'; // Update path as per your file location
import PlacementServices from '../components/PlacementService';
import SkillGrowAcademy from '../components/SkillGrowAcademy';
import TrainingCoursesUI from '../components/TrainingCourses';
import WeldingCourseUI from '../components/WeldingCourseUI';
import LocationsSection from '../components/LocationSection';

export default function Careers() {
    return (
        <>
            <div className="w-full min-h-screen bg-[#434f6b] flex flex-col">
                {/* Top Spacer Block */}
                <div className="w-full h-[90px] bg-[#434f6b]"></div>
                {/* Main Image */}
                <div className="w-full h-[380px] lg:h-[500px] overflow-hidden flex justify-center">
                    <img
                        src={warehouseImg}
                        alt="Warehouse Person"
                        className="h-full object-cover lg:object-contain lg:h-full lg:w-[90%]"
                    />
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col bg-[#434f6b] px-6 py-8">
                    <div className="text-[#6ee6f5] text-5xl font-primary" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        Your Complete Career<br />
                        Transition Partner
                    </div>
                    <div className="mt-12 flex justify-end gap-2 opacity-30">
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="w-3 h-10 md:w-8 md:h-24 bg-teal-300 transform skew-x-12"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <PlacementServices />
            <SkillGrowAcademy />
            <TrainingCoursesUI />
            <WeldingCourseUI />
            <LocationsSection />
        </>
    );
}
