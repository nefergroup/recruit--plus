import React from 'react';
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-primary font-primary">
      {/* Contact Info */}
      <div className="bg-primary text-center py-10 px-5">
        <h2 className="text-3xl font-secondary font-bold text-secondary mb-6">
          Contact Us
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Email */}
          <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Mail className="w-6 h-6 text-secondary" />
            <p className="text-lg font-medium text-secondary break-all">
              info@recruitplus-eu.com
            </p>
          </div>

          {/* Headquarters */}
          <div className="mb-10 text-center">
            <p className="text-xl font-primary text-secondary mb-3 flex justify-center items-center gap-2">
              <MapPin className="w-5 h-5" />
              Headquarters Office
            </p>
            <p className="text-xl font-extrabold font-primary text-secondary mb-1">Croatia</p>
            <p>Ilica 237, Zagreb 10000, Croatia</p>
            <p>Phone: +385 953565592</p>
          </div>

          {/* Offices Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center text-center lg:text-center">
            {/* Latvia */}
            <div className="flex flex-col items-center">
              <p className="text-xl font-primary text-secondary mb-2 flex justify-center items-center gap-2">
                <MapPin className="w-5 h-5" />
                Latvia
              </p>
              <p className="max-w-xs">
                Vision 360 Degree SIA, Krišjāņa Valdemāra iela 149,
                Rīga, floor 6, office 600 Latvia
              </p>
            </div>

            {/* Qatar */}
            <div className="flex flex-col items-center">
              <p className="text-xl font-primary text-secondary mb-2 flex justify-center items-center gap-2">
                <MapPin className="w-5 h-5" />
                Qatar Office
              </p>
              <p>Phone: +974 30344183</p>
            </div>

            {/* India */}
            <div className="flex flex-col items-center">
              <p className="text-xl font-primary text-secondary mb-2 flex justify-center items-center gap-2">
                <MapPin className="w-5 h-5" />
                Indian Office
              </p>
              <p>35/1420, 2nd Floor,</p>
              <p>Next to Dream Flower Magna Latros Apartment,</p>
              <p>Ponakkara Road, Edappally, Ernakulam 682024, Kerala, India</p>
              <p className="mt-2">Phone: +91 70120 86422, +91 88489 61134</p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-secondary mt-10 border-t border-gray-300 pt-4 text-sm text-center">
            <p>Croatia • Germany • Latvia • Serbia • Qatar • India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
