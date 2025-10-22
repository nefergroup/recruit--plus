import React from 'react';
import map from '../assets/images/map.png'
export default function LocationsSection() {
  const locations = [
    {
      name: 'Croatia - Headquarters',
      description: 'Our main operations centre managing strategic partnerships across the Balkans region and coordinating international recruitment initiatives.',
      position: { top: '38%', left: '49%' }
    },
    {
      name: 'Germany',
      description: "Serving one of Europe's largest economies where 82% of employers report difficulty finding qualified candidates, particularly in manufacturing and construction sectors.",
      position: { top: '32%', left: '48%' }
    },
    {
      name: 'Latvia',
      description: 'Supporting Baltic region expansion with focus on transportation, logistics, and emerging technology sectors.',
      position: { top: '28%', left: '52%' }
    },
    {
      name: 'Serbia',
      description: 'Regional hub for Southeastern European operations, capitalizing on growing infrastructure development and manufacturing investments.',
      position: { top: '40%', left: '51%' }
    },
    {
      name: 'Qatar',
      description: 'International expansion supporting Middle Eastern projects requiring skilled European-standard professionals, particularly in construction and hospitality.',
      position: { top: '48%', left: '56%' }
    }
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-6xl mx-auto">
        {/* Map Section */}
        <div className="bg-[#69c8ca] rounded-lg overflow-hidden mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary text-center pt-12 pb-8">
            Our Locations
          </h2>
          
          {/* Map Container */}
          <div className="relative h-96 bg-[#69c8ca] flex items-center justify-center">
            <img 
              src={map}
              alt="World Map with Locations" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Locations Details */}
        <div className=" rounded-lg p-8 md:p-12 space-y-8">
          {locations.map((location, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-slate-700 font-bold text-lg">
                {location.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {location.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}