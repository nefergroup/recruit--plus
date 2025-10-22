import React from 'react'
import logo from '../assets/logo/recruit-logo.png'
import banner from '../assets/images/recruit-banner.jpeg'
import About from './About'
import Specialization from './Specialization'
import RecruitmentProcess from './RecruitementProcess'
import Careers from './Careers'
import Services from './Services'
import skillgrow from '../assets/logo/skillgrow.png'
import exploreplus from '../assets/logo/exploreplus.png'
import vision from '../assets/logo/vision.png'
const Home = () => {

    return (
        <>
            <div className="bg-primary min-h-screen">
                {/* Main Container */}
                <div className="max-w-6xl mx-auto px-5 py-10 text-center">
                    {/* Logo Section */}
                    <div className="mb-10">
                        {/* Logo SVG - Person in suit with cityscape */}
                        <div className="w-80 h-80 mx-auto ">
                            <img src={logo} alt="" />
                        </div>


                    </div>

                    {/* Slogan Section */}
                    <div className="bg-secondary py-1 mb-10 inline-block">
                        <p className="text-third-text italic text-md md:text-md font-semibold leading-relaxed m-0">
                            Where European Dreams Become Reality Through Skills, Training & Opportunity
                        </p>
                    </div>



                    {/* Description Section */}
                    <div className="max-w-4xl mx-auto mb-16 text-left">
                        <p className="text-gray-700 text-md md:text-md leading-relaxed">
                            For over 12 years, Recruit Plus Europe has been Europe's trusted partner in international recruitment,
                            specializing in sourcing skilled professionals from India, Qatar and Nepal for thriving careers across
                            Croatia, Latvia, Germany and Serbia. We don't just fill positions – we build bridges between ambition and opportunity.
                        </p>
                    </div>

                    {/* Partners Section */}
                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full items-center justify-items-center">
                            {/* SkillGrow Academy */}
                            <div className="p-8 text-center flex flex-col items-center">
                                <img
                                    src={skillgrow}
                                    alt="SkillGrow Academy"
                                    className="h-16 w-auto object-contain mb-3"
                                />
                            </div>

                            {/* Explore Plus */}
                            <div className="p-8 text-center flex flex-col items-center">
                                <img
                                    src={exploreplus}
                                    alt="Explore Plus"
                                    className="h-16 w-auto object-contain mb-3"
                                />
                            </div>

                            {/* Recruit Plus */}
                            <div className="p-8 text-center flex flex-col items-center">
                                <img
                                    src={logo}
                                    alt="Recruit Plus"
                                    className="h-16 w-auto object-contain mb-3"
                                />
                            </div>

                            {/* Vision 360 */}
                            <div className="p-8 text-center flex flex-col items-center">
                                <img
                                    src={vision}
                                    alt="Vision 360"
                                    className="h-16 w-auto object-contain mb-3"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-full h-[340px] mt-2 mb-6 overflow-hidden">
                    <img
                        src={banner}
                        alt="Partner Banner"
                        className="w-full h-full object-cover"
                    />
                </div>


            </div>
            <About />
            <Specialization />
            <RecruitmentProcess />
            <Careers />
            <Services />
        </>
    )
}

export default Home
