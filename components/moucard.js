import React from 'react';
import {moudata} from "../Data/moudata";
import Image from "next/image";

const Moucard = () => {
    return (
        <>
            {moudata.map((moudata, index) => (
                <div data-aos="fade-up" key = {index} className='rounded-xl bg-mit-grey border-2 border-mit-orange max-w-7xl mx-auto mt-8 h-auto md:flex-row'>
                    <div className="flex flex-col p-4 xs:justify-around text-mit-body-white leading-normal">
                        <h1 className="text-2xl lg:text-3xl py-[3%] md:py-[3%] font-bold tracking-tight text-mit-yellow">{moudata.name}</h1>
                        <p className=" font-normal lg:text-2xl text-justify"><span className='text-mit-orange'>QS Ranking:</span> {moudata.qs}</p>
                        <p className=" font-normal lg:text-2xl text-justify"><span className='text-mit-orange'>Department:</span> {moudata.dept}</p>
                        <p className=" font-normal lg:text-2xl text-justify"><span className='text-mit-orange'>Muj Nodal Officer:</span> {moudata.nodal}</p>
                        <div className='pb-[1%] xl:max-w-[12.5vw] mt-4'>
                            <a href={moudata.mou} className='bg-mit-orange px-3 py-2 border-2 border-mit-orange rounded-lg hover:bg-mit-grey hover:text-mit-orange'>
                                <button type='button'>
                                    MoU
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Moucard;