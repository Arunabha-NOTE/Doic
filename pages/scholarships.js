import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import universitiesData from "../Data/universitiesData";

const Scholarships = () => {
    const scholarshipInfo = universitiesData;
    const [animatePlane, setAnimatePlane] = useState(false);
    const [activeTab, setActiveTab] = useState("PARTNER");

    const handleRedirect = (link) => {
        window.open(link, '_blank');
    };

    const handleAnimation = () => {
        setAnimatePlane(true);
        setTimeout(() => setAnimatePlane(false), 1000);
    };

    const displayedEvents =
        activeTab === "PARTNER"
            ? scholarshipInfo.filter((event) => event.sno >= 1 && event.sno <= 0)
            : scholarshipInfo.filter((event) => event.sno >= 41 && event.sno <= 64);

    return (
        <div>
            <Navbar />
            <div className="bg-gradient-to-r">
                <div className='mx-auto max-w-7xl my-10'>
                    <img src='https://jaipur.manipal.edu/img/banner/about-muj.jpg' className='mx-auto mb-4' alt="Banner" />
                    <hr className='w-8 mx-auto h-1 bg-mit-orange' />
                    <h1 className='text-5xl font-bold text-center mx-auto'>Scholarships</h1>
                </div>
            </div>
            <div className='mb-4 mx-auto flex max-w-7xl font-bold justify-center pb-2'>
                <button
                    className={`mr-4 ${activeTab === "PARTNER" ? "border-b-2 border-green-500" : ""}`}
                    onClick={() => setActiveTab("PARTNER")}
                >
                    PARTNER
                </button>
                <button
                    className={`mr-4 ${activeTab === "OTHER" ? "border-b-2 border-gray-500" : ""}`}
                    onClick={() => setActiveTab("OTHER")}
                >
                    OTHER
                </button>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto'>
                {activeTab === "PARTNER" &&
                    scholarshipInfo
                        .filter((event) => event.sno >= 1 && event.sno <= 40)
                        .map((info, index) => (
                            <div key={index} data-aos="fade-up" className='break-inside rounded-xl mb-4 text-sm p-6 bg-gradient-to-r text-white from-manipal-orange to-mit-body-white hover:-translate-y-2 transition hover:bg-gradient-to-r hover:from-manipal-orange hover:to-mit-body-white hover:shadow-lg' style={{ border: '3px solid #000' }}>
                                <div className='flex flex-col space-y-2'>
                                    <h2 className='text-xl font-extrabold'>{info.universityName}</h2>
                                    <p>Country: {info.country}</p>
                                    <p>Opening Month: {info.openingMonth}</p>
                                    <p>Closing Month: {info.closingMonth}</p>
                                </div>
                                <div className='flex justify-between items-center mt-4'>
                                    <div>
                                        <h3 className='font-bold text-base'></h3>
                                        <p></p>
                                    </div>
                                    <span className={`flex items-center justify-center w-14 h-14 rounded-full bg-[#ff6b6b] text-white hover:bg-[#ff5252] cursor-pointer ${animatePlane ? 'animate-plane' : ''}`} onClick={() => { handleRedirect(info.link); handleAnimation(); }}>
                                        <svg width='32' height='32' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className=''>
                                            <path fill='currentColor' d='M20.56 3.91C21.15 4.5 21.15 5.45 20.56 6.03L16.67 9.92L18.79 19.11L17.38 20.53L13.5 13.1L9.6 17L9.96 19.47L8.89 20.53L7.13 17.35L3.94 15.58L5 14.5L7.5 14.87L11.37 11L3.94 7.09L5.36 5.68L14.55 7.8L18.44 3.91C19 3.33 20 3.33 20.56 3.91Z'/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        ))}
                {displayedEvents.map((info, index) => (
                    <div key={index} data-aos="fade-up" className='break-inside rounded-xl mb-4 text-sm p-6 bg-mit-grey text-white from-manipal-orange to-mit-body-white hover:-translate-y-2 transition hover:bg-gradient-to-r hover:from-manipal-orange hover:to-mit-body-white hover:shadow-lg' style={{ border: '3px solid #000' }}>
                        <div className='flex flex-col space-y-2'>
                            <h2 className='text-xl font-extrabold'>{info.Name}</h2>
                            <p>Country: {info.Country}</p>
                            <p>Degree: {info.Degree}</p>
                            <p>Program: {info.Program}</p>
                            <p>Date: {info.Date}</p>
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <div>
                                <h3 className='font-bold text-base'></h3>
                                <p></p>
                            </div>
                            <span className={`flex items-center justify-center w-14 h-14 rounded-full bg-[#ff6b6b] text-white hover:bg-[#ff5252] cursor-pointer ${animatePlane ? 'animate-plane' : ''}`} onClick={() => { handleRedirect(info.Link); handleAnimation(); }}>
                                <svg width='32' height='32' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className=''>
                                    <path fill='currentColor' d='M20.56 3.91C21.15 4.5 21.15 5.45 20.56 6.03L16.67 9.92L18.79 19.11L17.38 20.53L13.5 13.1L9.6 17L9.96 19.47L8.89 20.53L7.13 17.35L3.94 15.58L5 14.5L7.5 14.87L11.37 11L3.94 7.09L5.36 5.68L14.55 7.8L18.44 3.91C19 3.33 20 3.33 20.56 3.91Z'/>
                                </svg>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Scholarships;
