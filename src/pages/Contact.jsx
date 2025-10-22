import React from "react";
import welderImg from "../assets/images/contact.png"; // Replace with your actual path

const Contact = () => {
    return (
        <div className="w-full bg-primary  text-primary font-primary">
            {/* Banner */}
            <div className="relative w-full h-[350px] bg-primary">
                <img
                    src={welderImg}
                    alt="Welder working"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Contact;
