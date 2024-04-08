import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Hero = () => {
    // Sample images for the carousel
    const images = [
        'https://doic-web.vercel.app/doic1.jpeg',
        'https://doic-web.vercel.app/doic2.jpeg',
        'https://doic-web.vercel.app/doic6.jpg',
        'https://doic-web.vercel.app/doic7.jpg',
        "https://doic-web.vercel.app/doic8.jpg",
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
    };

    return (
        <div className="fade-in-up-animation p-10" data-aos="fade-up">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className=" border-2 border-mit-orange rounded-2xl md:w-[70vw] mt-12 mx-auto md:h-[70vh]"/>
                    </div>
                ))}
            </Slider>
            <div className="">
                <div className='mx-auto my-12 max-w-7xl'>
                    <hr className='w-10 mx-auto h-1 bg-mit-orange'/>
                    <h1 className='text-5xl font-bold text-center mx-auto'>Overview</h1>
                </div>
            </div>
            <div>
                <div className='mx-auto my-12 max-w-7xl'>
                    <p className='text-sm sm:text-2xl text-center mx-auto'>Directorate of International and
                        Collaborations (DoIC) is headed by a team of dedicated staff and supported by the advisory
                        council with a group of faculty and administrators representing key academic units are
                        functional under this office. DoIC is established to promote internationalization and
                        partnerships with international institutes is functional for collaboration with institutes
                        globally for student and faculty exchange, semester abroad program, student mobility, higher
                        education opportunities and signing of MoUs with local and global educational and research
                        Institutes. Also supports local student chapter of The International Association for the
                        Exchange of Students for Technical Experience (IAESTE) team also takes care and all
                        International activities, projects, funding, mobility (short, long) and Summer and Winter
                        Schools.
                        In summary, this office provides the comprehensive and unified framework within which all work
                        in the International arena can seamlessly be achieved.</p>
                </div>
            </div>
        </div>
    );
};
const WorksSection = () => {
    return (
        <div className="relative py-10 sm:py-16 lg:py-24 fade-in-up-animation" data-aos="fade-up">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <hr className='w-10 mx-auto h-1 bg-mit-orange'/>
                    <h2 className="text-4xl text-black font-extrabold mx-auto md:text-6xl lg:text-5xl">How does it
                        work?</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-base text-black leading-relaxed md:text-2xl">Lorem ipsum
                        dolor sit amet, consectetur adipiscing elih</p>
                </div>
                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img
                            alt=""
                            loading="lazy"
                            width="1000"
                            height="500"
                            decoding="async"
                            data-nimg="1"
                            className="w-full"
                            style={{color: 'transparent'}}
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                        />
                    </div>
                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div data-aos="fade-right">
                            <div
                                className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700">1</span>
                            </div>
                            <h3 className="mt-6 text-xl text-black font-semibold leading-tight md:mt-10">Lorem
                                epsum</h3>
                            <p className="mt-4 text-base text-black md:text-lg">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam nec purus ac libero ultrices varius. Donec</p>
                        </div>
                        <div data-aos="fade-bottom">
                            <div
                                className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700">2</span>
                            </div>
                            <h3 className="mt-6 text-xl text-black font-semibold leading-tight md:mt-10">Lorem epsom
                                epsom</h3>
                            <p className="mt-4 text-base text-black md:text-lg">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam nec purus ac libero ultrices varius. Donec</p>
                        </div>
                        <div data-aos="fade-left">
                            <div
                                className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700">3</span>
                            </div>
                            <h3 className="mt-6 text-xl text-black font-semibold leading-tight md:mt-10">Lorem
                                Ipsum</h3>
                            <p className="mt-4 text-base text-black md:text-lg">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                 style={{background: 'radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)'}}></div>
        </div>
    );
};

const HomePage = () => {
    return (
        <div className='overflow-x-hidden'>
            <Hero/>
                      {/* <WorksSection/> */}
        </div>
    );
};

export default HomePage;


