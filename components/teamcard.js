import React from 'react';
import {CCTeamData} from "../Data/teamdata"
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faSquareGithub, faSquareInstagram} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Teamcard = () => {
    return (
        <>
            {CCTeamData.map((data, index) => (
                <div data-aos="fade-up" className=' hover:-translate-y-6 duration-500' key={index}>
                    <div
                        className='mx-auto w-64 bg-mit-orange  border-mit-orange border-2 bg-opacity-10  hover:shadow-lg hover:shadow-mit-orange rounded-full'>
                        <div className="relative overflow-hidden transition duration-500 transform rounded-full">
                            <Image src={data.imageURL} alt={data.name} width={512} height={512}
                                   className="object-cover rounded-full w-full aspect-square"/>
                            <div
                                className="absolute inset-0 flex flex-col justify-end p-16 text-center transition-opacity duration-300 bg-[#292929] bg-opacity-40 opacity-0 hover:opacity-100">
                                <div className="justify-center">
                                    <ul className="flex flex-col items-start text-white text-base font-medium">
                                        {data.hasLinkedIn &&
                                            <li>
                                                <Link href={data.linkedInURL} className="inline-flex gap-2">
                                                    <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                                                    <p className="inline-flex hover:underline hover:underline-offset-2">Linkedin<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                                                    </p>
                                                </Link>
                                            </li>
                                        }
                                        {data.hasGitHub && <li>
                                            <Link href={data.gitHubURL} className="inline-flex gap-2">
                                                <FontAwesomeIcon icon={faSquareGithub} size="xl"/>
                                                <p className="inline-flex hover:underline hover:underline-offset-2">GitHub<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                                                </p>
                                            </Link>
                                        </li>}
                                        {data.hasInstagram && <li>
                                            <Link href={data.instagramURL} className="inline-flex gap-2">
                                                <FontAwesomeIcon icon={faSquareInstagram} size="xl"/>
                                                <p className="inline-flex hover:underline hover:underline-offset-2">Instagram<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="w-4 h-4"><path fillRule="evenodd"
                                                                                               d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                               clipRule="evenodd"/></svg>
                                        </span>
                                                </p>
                                            </Link>
                                        </li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <p className="text-center text-xl font-bold">{data.name}</p>
                        <p className="text-center text-lg">{data.position}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Teamcard;