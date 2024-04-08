import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-mit-nav-white fixed top-0 left-0 right-0 z-10 py-2.5 '>
            <nav className="text-white mx-auto max-w-7xl backdrop-blur-3xl">
                <div className="grid grid-cols-2 items-center justify-around my-auto max-w-screen-7xl px-0 mx-auto">
                    <a href="/" className="flex items-center">
                        <img src="https://jaipur.manipal.edu/img/manipal-university-jaipur-logo.svg" className="w-[144px] pt-4 lg:w-48 px-3 lg:px-0" alt="MUJ Logo" />
                    </a>
                    <div className="flex items-center justify-end lg:order-2">
                        <div className="hidden mt-2 mr-4 sm:inline-block">
                            <span></span>
                        </div>

                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none dark:text-red-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded={isOpen ? "true" : "false"}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                            <svg className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-end w-full lg:flex lg:w-auto lg:order-1 ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:space-y-4 lg:text-lg ">
                            <li></li> {/* Empty list item added so that it does not hinder the HOME tab orientation */}
                            <li>
                                <a href="/" className="block py-2 pl-3 pr-4 bg-white rounded lg:bg-transparent lg:text-red-700 lg:p-0 dark:text-black hover:text-red-700">Home</a>
                            </li>
                            <li>
                                <a href="/events" className="block py-2 pl-3 pr-4 bg-transparent rounded lg:bg-transparent lg:text-red-700 lg:p-0 dark:text-black hover:text-red-700 border-b lg:border-0 dark:border-gray-700">Events</a>
                            </li>
                            <li>
                                <a href="/mous" className="block py-2 pl-3 pr-4 bg-transparent rounded lg:bg-transparent lg:text-red-700 lg:p-0 dark:text-black hover:text-red-700 border-b lg:border-0 dark:border-gray-700">MoUs</a>
                            </li>
                            <li>
                                <a href="/scholarships" className="block py-2 pl-3 pr-4 bg-transparent rounded lg:bg-transparent lg:text-red-700 lg:p-0 dark:text-black hover:text-red-700 border-b lg:border-0 dark:border-gray-700">Scholarships</a>
                            </li>
                            <li>
                                <a href="/internships" className="block py-2 pl-3 pr-4 bg-transparent rounded lg:bg-transparent lg:text-red-700 lg:p-0 dark:text-black hover:text-red-700 border-b lg:border-0 dark:border-gray-700">Internships</a>
                            </li>
                            <li>
                                <a href="/team" className="block py-2 pl-3 pr-4 bg-transparent rounded lg:bg-transparent lg:text-red-700 lg:p-0 dark:text-black hover:text-red-700 border-b lg:border-0 dark:border-gray-700">Team</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
