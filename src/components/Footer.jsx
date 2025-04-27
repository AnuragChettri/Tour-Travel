import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ()=>{
    return (
        <div className="h-full pb-20 sm:h-[300px] sm:pb-0">
            <div className="w-[90%] m-auto sm:w-full sm:flex sm:flex-row sm:justify-around sm:items-baseline pt-4">
            <div className="basis-[30%]">
                <h1 className="mb-8 font-medium text-xl text-gray-800">Travel <span className="text-green-500">Now</span></h1>
                <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dignissimos
                    animi, quasi officia harum, est expedita hic cum voluptatum
                </p>
                <div className="flex flex-row justify-between w-[50%] pt-4">
                    <img src="/location-icon.jpg" className="h-[20px]" />
                    <img src="/location-icon.jpg" className="h-[20px]" />
                    <img src="/location-icon.jpg" className="h-[20px]" />
                    <img src="/location-icon.jpg" className="h-[20px]" />
                </div>
            </div>
            <div className="">
                <h1 className="mb-8 font-medium text-xl text-green-500"><span className="text-green-500">Quick</span> Links</h1>
                <p className="cursor-pointer mb-2 text-gray-800"><Link to="/">Home</Link></p>
                <p className="cursor-pointer mb-2 text-gray-800"><Link to="/about">About</Link></p>
                <p className="cursor-pointer mb-2 text-gray-800" >Online Booking</p>
                <p className="cursor-pointer mb-2 text-gray-800" ><Link to="/contact"> Contact </Link> </p>
            </div>
            <div className="">
                <h1 className="mb-8 font-medium text-xl text-green-500">Contact</h1>
                <div className="flex">
                <img src="/location-icon.jpg" className="h-[20px]" />
                <span className="px-2 font-medium">Address: </span>
                <p className="pl-2 text-gray-700">Gangtok, Sikkim </p>
                </div>
                <div className="flex my-3">
                <img src="/location-icon.jpg" className="h-[20px]" />
                <span className="px-2 font-medium">Email: </span>
                <p className="pl-2 text-gray-700">demotech@gmail.com </p>
                </div>
                <div className="flex">
                <img src="/location-icon.jpg" className="h-[20px]" />
                <span className="px-2 font-medium">Phone: </span>
                <p className="pl-2 text-[15px] text-gray-700">0123456789 </p>
                </div>
            </div>
            </div>
            <div className="pt-10">
            <p className="text-center text-gray-500">Copyright 2025, design and developed by demotech Sikkim, All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;