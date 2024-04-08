import React from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Internshiptable from "../components/internshiptable";

const Internships = () => {
    return (
        <div>
            <Navbar />
            <div className='mx-auto max-w-7xl pt-16 my-10' >
                {/*<img src='https://jaipur.manipal.edu/img/banner/about-muj.jpg' className='mx-auto mb-4 '/>*/}
                <hr className='w-8 mx-auto h-1 bg-mit-orange' />
                <h1 className='text-5xl font-bold text-center mx-auto pb-4'>Internships</h1>
                <Internshiptable />
            </div>
            <Footer />
        </div>
    );
};

export default Internships;