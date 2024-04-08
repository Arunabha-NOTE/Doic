import React from 'react';
import {eventsdata} from "../Data/eventcarddata";
import Image from "next/image";

const Eventcard = () => {
    return (
        <>
            {eventsdata.map((eventsdata, index) => (
                <div data-aos="fade-up" key = {index} className='rounded-xl bg-mit-grey border-2 border-mit-orange flex flex-col  max-w-7xl mx-auto mt-8 h-auto md:flex-row'>
                    <Image className="max-h-full mx-auto my-auto max-w-full align-middle justify-between aspect-[3/4] w-[50%] h-full md:h-full md:w-[25%] md:rounded-none md:rounded-l-lg p-[5%] md:p-[3%]" src={eventsdata.poster} width='1920' height = '1080' alt=""/>
                    <div className="flex flex-col p-4 xs:justify-around text-mit-body-white leading-normal">
                        <h1 className="text-2xl lg:text-4xl py-[3%] md:py-[3%] font-bold tracking-tight text-mit-yellow">{eventsdata.name}</h1>
                        <p className=" font-normal lg:text-2xl text-justify"><span className='text-mit-orange'>Organizer:</span> {eventsdata.organizer}</p>
                        <p className=" font-normal lg:text-2xl text-justify"><span className='text-mit-orange'>Venue:</span> {eventsdata.venue}</p>
                        <p className=" font-normal lg:text-2xl text-justify"><span className='text-mit-orange'>Description:</span> {eventsdata.description}</p>
                        <p className=" font-normal lg:text-2xl text-justify"><span className='text-mit-orange'>Starting at:</span> {eventsdata.start}</p>
                        <p className="font-normal lg:text-2xl text-justify"><span className='text-mit-orange'>Ending at:</span> {eventsdata.end}</p>
                        <p className=" font-normal lg:text-2xl text-justify"><span className='text-mit-orange'>Price:</span> {eventsdata.price}</p>
                        <p className="mb-[3vh] font-normal lg:text-2xl text-justify"><span className='text-mit-orange'>Registeration Status:</span> {eventsdata.registerationstatus}</p>
                        <div className='pb-[1%] xl:max-w-[12.5vw]'>
                            <a href={eventsdata.brochure} className='bg-mit-orange px-3 py-2 border-2 border-mit-orange rounded-lg hover:bg-mit-grey hover:text-mit-orange'>
                                <button type='button'>
                                    Brochure
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Eventcard;