import React from 'react';
import Eventcard from "../components/eventcard";
import Navbar from "../components/navbar";
import Footer from '../components/footer'

const Events = () => {
    return (
        <div className="bg-mit-body-white ">
            <Navbar />
            <div className= "pt-16">
                <div className='mx-auto max-w-7xl my-10'>
                    {/*<img src='https://jaipur.manipal.edu/img/about-us/mandatory-disclosure%20copy.jpg' className='mx-auto mb-4 '/>*/}
                    <hr className='w-8 mx-auto h-1 bg-mit-orange' />
                    <h1 className='text-5xl font-bold text-center mx-auto'>Events</h1>
                </div>
                <div className='mx-auto min-h-screen'>
                    <div className='my-8 mt-8'>
                        <Eventcard />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Events;