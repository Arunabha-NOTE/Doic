import React from 'react';
import {Internships} from "../Data/internshipdata.js";


const Internshiptable = () => {
    return (
        <>

        <div data-aos="fade-up" >
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Internship Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description & Benefits
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Deadline
                        </th>
                        <th scope="col" className="px-6 py-3">
                            More Information
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {Internships.map((data, index) => (
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {data.name}
                        </th>
                        <td className="px-6 py-4">
                            {data.description}
                        </td>
                        <td className="px-6 py-4">
                            {data.deadline}
                        </td>
                        <td className="px-6 py-4">
                            <a href={data.link} className="font-medium text-mit-orange dark:text-mit-orange hover:underline">Link</a>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

            </>
    );
};

export default Internshiptable;
