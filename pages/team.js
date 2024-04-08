import React from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Teamcard from "../components/teamcard";

const Team = () => {
    return (
        <div>
            <Navbar />
            <div className= "bg-mit-body-white pt-10">
                <div className='mx-auto mt-12 py-12 max-w-7xl'>
                    <hr className='w-8 mx-auto h-1 bg-mit-orange' />
                    <h1 className='text-5xl font-bold text-center mx-auto'>Team</h1>
                </div>
                <div className=" ">'
                    <div className='grid overflow-hidden lg:grid-cols-4 md:grid-cols-2 py-12 grid-cols-1 gap-16 mx-auto justify-around max-w-7xl'><Teamcard/></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Team;