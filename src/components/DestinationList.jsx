import React from 'react';
import { useParams } from 'react-router-dom';
import {districtInfo,destinationListData} from '../utils/constant.jsx';
import DestinationCard from './DestinationCard.jsx';
import { motion } from 'motion/react';
import { easeOut } from 'motion';
import GoTop from './GoTop.jsx';

const DestinationList = ()=>{

    const {name:districtName} = useParams();

    // Find the district with id as districtId
    // const district = districtInfo.find((place)=>{
    //     return place.id == districtId;
    // })

    // const {districtName} = district;

    //Filter all place with district Name
    const districtPlaces = destinationListData.filter((place,index)=>{
        if(place.district === districtName )
            return true;
    });


    return(
        <div className="bg-gray-200">
            <div className="h-[520px] overflow-hidden relative bg-red-500">
                <img src="/public/lachung.jpg" className="brightness-80 h-full sm:w-full sm:h-auto" />
                <div className="absolute top-[70px] left-0 sm:top-[50%] sm:left-[10%] overflow-hidden">
                    <h1 className="text-center text-3xl font-bold text-yellow-500 font-sans"> Explore The Best Travel Distination in <span className="text-green-600"> {districtName} SIKKIM </span></h1>
                    <p className="sm:w-[90%] mt-8 text-xl text-white text-center font-sans"> Discover the amazing beautfy of the <span className="text-green-600"> {districtName} SIKKIM </span> with colorful flowers, peaceful waterfalls and stunning views that make it a perfect place to relax and enjoy nature </p>
                </div>
            </div>
            <div className="w-[95%] m-auto sm:w-[70%]">
                <p className="mt-8 text-3xl font-light text-black text-center font-sans"> Discover <span className="text-green-500"> {districtName} SIKKIM </span> Hidden Places And Top Attraction </p>
                <motion.div 
                className="pt-10 pb-10 grid grid-cols-1 sm:grid sm:grid-cols-2 gap-8">
                    {/* <DestinationCard /> */}
                    {
                        districtPlaces.map((place,index)=>{
                            return <DestinationCard key={index} place={place}/>
                        })
                    }
                </motion.div>
            </div>
            <GoTop />
        </div>
    )
};

export default DestinationList;