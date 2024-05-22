import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";



function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="z-20 bg-mit-grey bg-opacity-30 sticky top-0 app w-full">
            <nav className='xl:mx-auto max-w-7xl justify-items-center '>
                <div
                    className={`justify-around my-0  ${
                        !toggleMenu
                            ? " "
                            : "bg-mit-grey bg-opacity-0 backdrop-blur-0 duration-700"
                    }`}
                >
                    <div className="bg-mit-grey backdrop-blur-0 bg-opacity-0 px-[4vw] lg:px-0 w-full flex items-center align-middle justify-between mx-auto my-0">
                        {/* Primary menu and logo */}
                        <div className="flex flex-nowrap items-center align-middle justify-end gap-16 my-4">
                            {/* logo */}
                            <div>
                                <a href="/" className="flex items-center align-middle">
                                    <img src='https://jaipur.manipal.edu/img/manipal-university-jaipur-logo.svg' alt="Muj" className='w-[128px] lg:w-[192px] my-1'/>
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-6 align-middle">
                            {/* primary */}
                            <div className="hidden lg:inline-flex gap-8 align-middle relative items-center">
                                <a href="/">Home</a>
                                <a href="/events">Events</a>
                                <a href="/mous">MoUs</a>
                                <a href="/scholarships">Scholarships</a>
                                <a href="/internships">Internships</a>
                                <a href="/team">Team</a>
                            </div>
                            {/* Mobile navigation toggle */}
                            <div className="lg:hidden flex items-center">
                                <button onClick={() => setToggleMenu(!toggleMenu)}>
                                    <Bars3Icon className="h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile navigation */}
                <div
                    className={`z-40 w-full bg-mit-orange backdrop-blur-0 bg-opacity-0 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
                        !toggleMenu ? "h-0" : "h-screen bg-fixed py-12"
                    }`}
                >
                    <div className="px-8">
                        <div className="flex flex-col font-light gap-12 text-2xl tracking-wider text-center">
                            <a href="/">Home</a>
                            <a href="/events">Events</a>
                            <a href="/mous">MoUs</a>
                            <a href="/scholarships">Scholarships</a>
                            <a href="/internships">Internships</a>
                            <a href="/team">Team</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;