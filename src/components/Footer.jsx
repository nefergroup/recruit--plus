import React from 'react'
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <div className="w-full bg-primary text-primary font-primary">
           

            {/* Contact Info */}
            <div className="bg-primary text-center py-10">
                <h2 className="text-3xl font-secondary font-bold text-secondary mb-6">Contact Us</h2>

                <div className="max-w-4xl mx-auto">
                    {/* Email */}
                    <div className="mb-6 flex items-center justify-center gap-3">
                        <Mail className="w-6 h-6 text-secondary" />
                        <p className="text-lg font-medium text-secondary">info@recruitplus-eu.com</p>
                    </div>

                    {/* India Office */}
                    <div className="mb-10 text-center">
                        <p className="text-xl font-primary  text-secondary mb-3 flex justify-center items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            India Office
                        </p>
                        <p className="text-orange-400 font-primary text-secondary mb-1">Explore Plus</p>
                        <p>35/1420, 2nd Floor,</p>
                        <p>Next to Dream Flower Magna Latros Apartment,</p>
                        <p>Ponakkara Road, Edappally, Ernakulam 682024, Kerala, India</p>
                        <p className="mt-2">Phone: +91 70120 86422, +91 88489 61134</p>
                    </div>

                    {/* Headquarters & Other Offices Grid */}
                    <div className="grid grid-cols-2 gap-12 text-center">
                        <div>
                            <p className="text-xl font-primary text-secondary mb-2 flex justify-center items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                Headquarters - Croatia
                            </p>
                            <p>Ilica 237, Zagreb 10000, Croatia</p>
                            <p>Phone: +385 953565592</p>
                        </div>

                        <div>
                            <p className="text-xl font-primary text-secondary mb-2 flex justify-center items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                Qatar Office
                            </p>
                            <p>Phone: +974 30344183</p>
                        </div>
                    </div>


                    {/* Footer Locations */}
                    <div className="text-secondary mt-10 border-t border-gray-300 pt-4 text-sm">
                        <p>Croatia • Germany • Latvia • Serbia • Qatar • India</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer
