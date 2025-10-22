// CareerTransitionBanner.jsx
import React from 'react';
import warehouseImg from '../assets/images/career.png'; // Update path as per your file location
import PlacementServices from '../components/PlacementService';
import SkillGrowAcademy from '../components/SkillGrowAcademy';
import TrainingCoursesUI from '../components/TrainingCourses';

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
                    <div className="mt-8 w-full overflow-hidden">
                        <div className="flex flex-row justify-between">
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={i}
                                    className="flex-1 h-3 mx-[2px] rounded-sm bg-[#6ee6f5] opacity-50"
                                    style={{ transform: 'skewX(-20deg)' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <PlacementServices />
            <SkillGrowAcademy />
            <TrainingCoursesUI />
        </>
    );
}
