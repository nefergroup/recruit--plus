// SpecializationImages.jsx
import React from "react";
import hospitality from '../assets/images/hospitality.jpg'
import welding from '../assets/images/welding.jpeg'
import construction from '../assets/images/recruit-banner.jpeg'
import truck from '../assets/images/truck.jpg'


const img1 = hospitality; // Hospitality
const img2 = welding; // Welding
const img3 = construction; // Construction
const img4 = truck; // Logistics truck

export default function SpecializationImages() {
    return (
        <div className="w-full flex justify-center items-center relative bg-primary py-10">
            {/* Decorative stripes */}
            {/* Decorative stripes */}
            <div className="absolute top-4 right-0 flex justify-end mb-10">
                <div className=" md:flex h-6">
                    <div className="flex flex-row-reverse space-x-3 space-x-reverse">
                        {[...Array(9)].map((_, i) => (
                            <div
                                key={i}
                                className="w-16 h-6 bg-accent-blue opacity-20 skew-x-[-25deg]"
                            />
                        ))}
                    </div>
                </div>
            </div>


            {/* Main grid */}
            <div className="relative z-10 max-w-3xl w-full mx-auto px-6 md:px-0 mt-10">
                <div className="grid grid-cols-2 gap-6 md:gap-8">
                    {/* Images */}
                    <div className="rounded-tr-4xl rounded-bl-4xl overflow-hidden aspect-square bg-gray-200">
                        <img src={img1} alt="Hospitality" className="object-cover w-full h-full" />
                    </div>
                    <div className="rounded-tl-4xl rounded-br-4xl overflow-hidden aspect-square bg-gray-200">
                        <img src={img2} alt="Welding" className="object-cover w-full h-full" />
                    </div>
                    <div className="rounded-tl-4xl rounded-br-4xl overflow-hidden aspect-square bg-gray-200">
                        <img src={img3} alt="Construction" className="object-cover w-full h-full" />
                    </div>
                    <div className="rounded-tr-4xl rounded-bl-4xl overflow-hidden aspect-square bg-gray-200">
                        <img src={img4} alt="Logistics" className="object-cover w-full h-full" />
                    </div>
                </div>
                {/* Center circle accent */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-accent-blue rounded-full w-24 h-24 md:w-32 md:h-32 border-4 border-accent-blue" />
                </div>

            </div>
            {/* Plus symbols background */}
            <div className="absolute inset-0 -z-10 pointer-events-none flex flex-wrap items-stretch opacity-30 select-none">
                {[...Array(12)].map((_, i) => (
                    <span
                        key={i}
                        className="text-accent-blue text-4xl font-heading mx-2 my-2 opacity-40"
                    >+</span>
                ))}
            </div>
        </div>
    );
}
